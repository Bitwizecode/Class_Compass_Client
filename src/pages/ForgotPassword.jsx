import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../assets/icon/school_logo.jpg";
import { authApiService } from "../api-services/authApiService";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSubmit, setIsOtpSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const resendOTP = () => {
    setMinutes(0);
    setSeconds(59);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const { forgotPassword, verifyOtp, changePassword } = authApiService();

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if(e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index-1] = "";
      e.target.previousSibling.focus();
      setOtp(newOtp);
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword({ inputData });
      toast.success("Otp sent to the provided input detail");
      setIsOtpSent(true);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const jointOTP = otp.join("");
      const res = await verifyOtp({ otp: jointOTP });
      toast.success("Otp verified successfully");
      setIsOtpSubmit(true);
    } catch (error) {
      toast.error("Wrong OTP!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password != confirmPassword) {
        toast.error("Confirm password does not match!");
        return;
      }
      const res = await changePassword({
        email: inputData,
        password: password,
      });
      toast.success("Password Changes Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="forgot-pass-main">
      <ToastContainer />
      {loading && <Loader />}
      <Box>
        <Box
          className="forgotPass-page-main"
          sx={{ minWidth: 280, maxWidth: 400 }}
        >
          <Box textAlign={"center"}>
            <img
              className="profile-avatar"
              style={{ marginTop: "-50px" }}
              src={SchoolLogo}
              alt=""
            />
            <Typography variant="h5" fontWeight={650} mt={1}>
              Forgot Password
            </Typography>
            <Typography
              color={"gray"}
              mt={"1px"}
              marginBottom={"11px"}
              fontSize={14}
            >
              Please enter the Phone/Email <br /> linked with your account
            </Typography>
            <hr className="hr-line" />
          </Box>
          <form
            onSubmit={
              isOtpSent && !isOtpSubmit
                ? handleVerifyOtp
                : isOtpSubmit
                ? handleChangePassword
                : handleForgotPassword
            }
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1.2}
              marginInline={2}
            >
              {!isOtpSent ? (
                <Box>
                  <TextField
                    required
                    id="outlined-required"
                    label="Phone/Email"
                    fullWidth
                    onChange={(e) => setInputData(e.target.value)}
                    value={inputData}
                  />
                </Box>
              ) : (
                <>
                  {!isOtpSubmit ? (
                    <>
                      <div className="otp-area">
                        {otp.map((data, i) => {
                          return (
                            <input
                              key={i}
                              className="otp-input"
                              type="text"
                              value={data}
                              maxLength={1}
                              onChange={(e) => handleInputChange(e, i)}
                              onFocus={(e) => e.target.select()}
                              onKeyDown={(e) => handleKeyDown(e, i)}
                            />
                          );
                        })}
                      </div>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        mt={"-12px"}
                      >
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "grey",
                          }}
                          mt={1}
                          mb={-0.8}
                        >
                          {seconds > 0 || minutes > 0 ? (
                            <p>
                              Resend OTP in -{" "}
                              {minutes < 10 ? `0${minutes}` : minutes}:
                              {seconds < 10 ? `0${seconds}` : seconds} Seconds
                            </p>
                          ) : (
                            <p>Didn't receive code? &nbsp;</p>
                          )}
                        </Typography>
                        {seconds === 0 && minutes === 0 && (
                          <Typography
                            onClick={resendOTP}
                            className="forgot-password"
                            mt={1}
                            mb={-0.8}
                            sx={{
                              cursor: "pointer",
                              color: "#1976d2",
                            }}
                          >
                            Resend OTP
                          </Typography>
                        )}
                      </Box>
                      <Box className="send-otp-buttons">
                        <Button
                          onClick={(e) => {
                            if (otp.filter((num) => num != 0).length > 0) {
                              setOtp([...otp.map((e) => "")]);
                            } else {
                              setIsOtpSent(false);
                              setIsOtpSubmit(false);
                            }
                          }}
                          variant="outlined"
                        >
                          {otp.filter((num) => num != 0).length > 0
                            ? "Clear"
                            : "Back"}
                        </Button>
                        <Button
                          // onClick={() => setIsOtpSubmit(true)}
                          type="submit"
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box>
                        <TextField
                          required
                          id="outlined-required"
                          label="New Password"
                          fullWidth
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm Password"
                          fullWidth
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                        />
                      </Box>
                    </>
                  )}
                </>
              )}
            </Box>
            {!isOtpSent || isOtpSubmit ? (
              <Box className="forgot-pass-buttons">
                <Button
                  onClick={() => {
                    if (isOtpSent) {
                      setIsOtpSent(false);
                      setIsOtpSubmit(false);
                    } else {
                      navigate("/login");
                    }
                  }}
                  variant="outlined"
                >
                  {isOtpSent ? "Back" : "Cancel"}
                </Button>
                <Button type="submit" variant="contained">
                  {isOtpSent ? "Reset" : "Send OTP"}
                </Button>
              </Box>
            ) : (
              <>
                {!isOtpSubmit ? (
                  <></>
                ) : (
                  <>
                    <Box>
                      <TextField
                        required
                        id="outlined-required"
                        label="New Password"
                        fullWidth
                      />
                    </Box>
                    <Box>
                      <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        fullWidth
                      />
                    </Box>
                  </>
                )}
              </>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
