import React, { useState, useRef } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../assets/icon/school_logo.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));

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
  return (
    <Box className="forgot-pass-main">
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
                />
              </Box>
            ) : (
              <>
                <div className="otp-area">
                  {otp.map((data, i) => {
                    return (
                      <input
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
                    sx={{fontSize: "13px", color: "grey"}}
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
                  <Button onClick={e => setOtp([...otp.map(e => "")])} variant="outlined">
                    Clear
                  </Button>
                  <Button onClick={() => navigate("/")} variant="contained">
                    Submit
                  </Button>
                </Box>
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
          </Box>
          <Box className="forgot-pass-buttons">
            <Button
              onClick={() => {
                isOtpSent ? setIsOtpSent(false) : navigate("/login");
              }}
              variant="outlined"
            >
              {isOtpSent ? "Back" : "Cancel"}
            </Button>
            <Button
              onClick={() => {
                isOtpSent ? navigate("/login") : setIsOtpSent(true);
              }}
              variant="contained"
            >
              {isOtpSent ? "Reset" : "Send OTP"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
