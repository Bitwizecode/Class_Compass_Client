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
import { useNavigate } from "react-router-dom";
import { authApiService } from "../api-services/authApiService";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = authApiService();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = { loginInput, password };
      const res = await login(user);
      toast.error("Login successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Box className="Login-main">
        <ToastContainer />
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
            <form onSubmit={handleLogin}>
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
                    onChange={(e) => setLoginInput(e.target.value)}
                  />
                </Box>
                <Box position={"relative"}>
                  <TextField
                    required
                    type={showPassword ? "text" : "password"}
                    id="outlined-required"
                    label="Password"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`fa-solid fa-eye${
                      showPassword ? "" : "-slash"
                    } eye-icon`}
                  ></i>
                </Box>
                <Box mt={"-12px"} sx={{ cursor: "pointer" }}>
                  <Typography
                    onClick={() => navigate("/forgot-password")}
                    className="forgot-password"
                    mt={0.5}
                  >
                    Forgot password ?{" "}
                  </Typography>
                </Box>
              </Box>
              <Box className="login-submit">
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Box>
            </form>
            <Box className="Login-SignUp-option">
              <span>
                Don't have an account ?{" "}
                <span
                  onClick={() => navigate("/sign-up")}
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
