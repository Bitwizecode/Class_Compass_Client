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
import {useNavigate} from "react-router-dom"
import { Password } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Box className="Login-main">
        <Box>
          <Box className="LoginPage-main" sx={{ minWidth: 280, maxWidth: 400 }}>
            <Box textAlign={"center"}>
              <img
                className="profile-avatar"
                style={{ marginTop: "-50px" }}
                src={SchoolLogo}
                alt=""
              />
              <Typography variant="h5" fontWeight={650} mt={1}>
                Welcome Back!
              </Typography>
              <Typography
                color={"gray"}
                mt={"1px"}
                marginBottom={"11px"}
                fontSize={14}
              >
                Log in to your existing account
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
                mt={"-12px"}
                sx={{ cursor: "pointer" }}
              >
                <Typography onClick={()=>navigate("/forgot-password")}  className="forgot-password" mt={0.5}>Forgot password ? </Typography>
              </Box>
            </Box>
            <Box className="login-submit">
              <Button onClick={()=>navigate("/")} variant="contained">Login</Button>
            </Box>
            <Box className="Login-SignUp-option">
              <span>
                Don't have an account ?{" "}
                <span
                onClick={()=>navigate("/sign-up")}
                  style={{
                    color: "#1976d2",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Register
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