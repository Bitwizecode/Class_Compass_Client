import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  IconButton,
  Tooltip,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Grid,
} from "@mui/material";
import SchoolLogo from "../assets/icon/school_logo.jpg";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { authApiService } from "../api-services/authApiService";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";

const Signup = () => {
  const { register } = authApiService();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const gender = [{ value: "Male" }, { value: "Female" }];
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pin_code: "",
    district: "",
    state: "Maharashtra",
    country: "India",
    classes: [],
    school_id: "123456",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (signUpData.password !== signUpData.confirmPassword) {
        toast.error("Password does not match!");
        return; 
      }
      const res = await register(signUpData);
      toast.success("Teacher registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, [1000]);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {loading && <Loader />}

      <Box className="SignUp-main">
        <Box
          className="LoginPage-main"
          sx={{ minWidth: 240, maxWidth: 600, padding: "20px" }}
        >
          <Box textAlign={"center"}>
            <img
              className="profile-avatar"
              style={{ marginTop: "-60px" }}
              src={SchoolLogo}
              alt=""
            />
            <Typography variant="h5" fontWeight={650} mt={1}>
              Register
            </Typography>
            <Typography
              color={"gray"}
              mt={"10px"}
              marginBottom={"12px"}
              fontSize={14}
            >
              Enter Your Personal Information <br />
              to create Your account.
            </Typography>
            <hr className="hr-line" />
          </Box>
          <form onSubmit={handleSignUp}>
            <Grid container>
              <Grid display={"flex"} gap={1} xs={12}>
                <Grid mb={1} xs={12} md={12} sm={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    fullWidth
                    value={signUpData.first_name}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        first_name: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid mb={1} xs={12} md={12} sm={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    fullWidth
                    value={signUpData.last_name}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        last_name: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>

              <Grid display={"flex"} mb={1} gap={1} xs={12}>
                <Grid xs={6} md={6} sm={12}>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Gender"
                    fullWidth
                    value={signUpData.gender}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        gender: e.target.value,
                      });
                    }}
                  >
                    {gender.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={6} md={6} sm={12}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-select-gender"
                    type="date"
                    label="Date of Birth"
                    fullWidth
                    value={signUpData.dob}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        dob: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>

              <Grid mb={1} xs={12}>
                <TextField
                  required
                  type="number"
                  id="outlined-required"
                  label="Phone No."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  fullWidth
                  value={signUpData.phone}
                  onChange={(e) => {
                    setSignUpData({
                      ...signUpData,
                      phone: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid mb={1} xs={12}>
                <TextField
                  required
                  type="Email"
                  id="outlined-required"
                  label="Email Address"
                  fullWidth
                  value={signUpData.email}
                  onChange={(e) => {
                    setSignUpData({
                      ...signUpData,
                      email: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid mb={1} xs={12} position={"relative"}>
                <TextField
                  required
                  type={showPassword ? "text" : "password"}
                  id="outlined-required"
                  label="Password"
                  fullWidth
                  value={signUpData.password}
                  onChange={(e) => {
                    setSignUpData({
                      ...signUpData,
                      password: e.target.value,
                    });
                  }}
                />
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={`fa-solid fa-eye${
                    showPassword ? "" : "-slash"
                  } pass-eye-icon`}
                ></i>
              </Grid>
              <Grid mb={1} xs={12} position={"relative"}>
                <TextField
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  id="outlined-required"
                  label="Confirm Password"
                  defaultValue={""}
                  fullWidth
                  value={signUpData.confirmPassword}
                  onChange={(e) => {
                    setSignUpData({
                      ...signUpData,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
                <i
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`fa-solid fa-eye${
                    showConfirmPassword ? "" : "-slash"
                  } pass-eye-icon`}
                ></i>
              </Grid>
              <Grid mb={1} xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Residential Address"
                  fullWidth
                  value={signUpData.address}
                  onChange={(e) => {
                    setSignUpData({
                      ...signUpData,
                      address: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid display={"flex"} mb={1} gap={1} xs={12}>
                <Grid item md={6} xs={12}>
                  <TextField
                    required
                    type="Number"
                    id="outlined-required"
                    label="Pin Code"
                    fullWidth
                    value={signUpData.pin_code}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        pin_code: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="District"
                    fullWidth
                    value={signUpData.district}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        district: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid display={"flex"} gap={1} xs={12}>
                <Grid mb={1} md={6} xs={12}>
                  <TextField
                    disabled
                    id="outlined-required"
                    label="State"
                    defaultValue={"Maharashtra"}
                    fullWidth
                  />
                </Grid>
                <Grid mb={1} md={6} xs={12}>
                  <TextField
                    disabled
                    id="outlined-required"
                    defaultValue={"India"}
                    label="Country"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Box className="sign-up-submit">
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </Box>
          </form>
          <Box className="Login-SignUp-option">
            <span>
              Already have an account ?{" "}
              <span
                onClick={() => navigate("/login")}
                style={{
                  color: "#1976d2",
                  cursor: "pointer",
                  fontWeight: 550,
                }}
              >
                Login
              </span>
            </span>
          </Box>
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Signup;
