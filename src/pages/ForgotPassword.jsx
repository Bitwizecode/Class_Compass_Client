import React, { useState, useRef } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../assets/icon/school_logo.jpg";
import { authApiService } from "../api-services/authApiService";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSubmit, setIsOtpSubmit] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [inputData, setInputData] = useState("");
  const { forgotPassword, verifyOtp } = authApiService();

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

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ inputData });
      toast.success("Otp sent to the provided input detail");
      setIsOtpSent(true);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const jointOTP = otp.join("");
      const res = await verifyOtp({ otp: jointOTP });
      toast.success("Otp verified successfully");
      setIsOtpSubmit(true);
    } catch (error) {
      toast.error("Wrong OTP!");
      console.log(error);
    }
  };
  return (
    <Box className="forgot-pass-main">
      <ToastContainer />
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
          <form onSubmit={isOtpSent ? handleVerifyOtp : handleForgotPassword}>
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
                          sx={{ fontSize: "13px", color: "grey" }}
                          mt={0.7}
                          mb={-0.8}
                        >
                          Didn't receive OTP? &nbsp;
                        </Typography>
                        <Typography
                          onClick={() => navigate("/forgot-password")}
                          className="forgot-password"
                          mt={0.7}
                          mb={-0.8}
                          sx={{ cursor: "pointer" }}
                        >
                          Resend
                        </Typography>
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
                <Button
                  // onClick={() => {
                  //   isOtpSent ? navigate("/login") : setIsOtpSent(true);
                  // }}
                  type="submit"
                  variant="contained"
                >
                  {isOtpSent ? "Reset" : "Send OTP"}
                </Button>
              </Box>
            ) : (
              ""
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
