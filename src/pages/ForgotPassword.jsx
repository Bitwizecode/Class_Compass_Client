import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import {useNavigate} from "react-router-dom"
import SchoolLogo from "../assets/icon/school_logo.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();
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
            <Typography variant="h5"  fontWeight={650} mt={1}>
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
            <Box>
              <TextField
                required
                id="outlined-required"
                label="Phone/Email"
                fullWidth
              />
            </Box>

          <Box>
              <TextField
                required
                type="Number"
                id="outlined-required"
                label="OTP"
                fullWidth
              />
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
          </Box>
          <Box className="forgot-pass-buttons">
            <Box className="submit-button">
              <Button variant="contained">Send OTP</Button>
            </Box>
            <Box className="submit-button">
              <Button onClick={()=>navigate("/login")} variant="outlined">Cancel</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
