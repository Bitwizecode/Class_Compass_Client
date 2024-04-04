import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  IconButton,
  Tooltip,
  TextField,
  Button,
} from "@mui/material";
import SchoolLogo from "../assets/icon/school_logo.jpg";
import { Password } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Box className="Login-main">
        <Box>
          <Box className="LoginPage-main" sx={{ minWidth: 330, }}>
            <Box textAlign={"center"}>
              <img
                className="profile-avatar"
                style={{ marginTop: "-60px" }}
                src={SchoolLogo}
                alt=""
              />
              <Typography variant="h4" fontWeight={650} mt={2}>
                Welcome Back!
              </Typography>
              <Typography
                color={"gray"}
                mt={"1px"}
                marginBottom={"11px"}
                fontSize={16}
              >
                Log in to your existing account
              </Typography>
              <hr className="login-hr-line" style={{ color: "red" }} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
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
              <Box position={"relative"}>
                <TextField
                  required
                  type={showPassword ? "text" : "password"}
                  id="outlined-required"
                  label="Password"
                  fullWidth
                />
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={`fa-solid fa-eye${
                    showPassword ? "" : "-slash"
                  } eye-icon`}
                ></i>
              </Box>
              <Box
                position={"absolute"}
                top={313}
                left={35}
                sx={{ cursor: "pointer" }}
              >
                <h6 className="forgot-password">Forgot password ? </h6>
              </Box>
            </Box>
            <Box className="login-submit">
              <Button variant="contained">Login</Button>
            </Box>
            <Box className="Login-SignUp-option">
              <span>
                Don't have an account ?{" "}
                <span
                  style={{
                    color: "#1976d2",
                    cursor: "pointer",
                    fontWeight: 550,
                  }}
                >
                  Sign Up
                </span>
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;