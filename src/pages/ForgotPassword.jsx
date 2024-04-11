import React, { useState, useRef } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../assets/icon/school_logo.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;

    // Ensure only one digit from 0 to 9 is entered
    if (/^[0-9]?$/.test(value)) {
      // Update the input value
      if (value.length <= 1) {
        inputRefs.current[index].value = value;
      }

      // Move focus to the next input if available
      if (index < inputRefs.current.length - 1 && value !== "") {
        if (value.length > 1) {
          return; // Prevent moving focus if more than one digit is entered
        }
        inputRefs.current[index + 1].focus();
      } else if (value === "") {
        // Clear the previous input if the value is empty
        inputRefs.current[index - 1].value = "";
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else if (index === inputRefs.current.length - 1) {
        // Ensure only one digit in the last input box
        inputRefs.current[index].value = value.slice(0, 1);
      }
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
                <Grid container spacing={1.2}>
                  {[...Array(4)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <TextField
                        type="number"
                        variant="outlined"
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        onChange={(event) => handleInputChange(index, event)}
                        sx={{ width: "55px", height: "55px" }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box display={"flex"} justifyContent={"end"} mt={"-12px"} sx={{ cursor: "pointer" }}>
                  <Typography
                    onClick={() => navigate("/forgot-password")}
                    className="forgot-password"
                    mt={0.7} mb={-0.8}
                  >
                    Resend OTP?
                  </Typography>
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
