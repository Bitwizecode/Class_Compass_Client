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

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const gender = [{ value: "Male" }, { value: "Female" }];
  return (
    <>
      <Box className="SignUp-main">
        <Box>
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

            <Grid container>
              <Grid display={"flex"} gap={"7px"} xs={12}>
                <Grid mb={1} xs={12} md={12} sm={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    fullWidth
                  />
                </Grid>
                <Grid mb={1} xs={12} md={12} sm={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid display={"flex"} mb={1} gap={"7px"} xs={12}>
                <Grid xs={6} md={6} sm={12}>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Gender"
                    fullWidth
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
                  ></TextField>
                </Grid>
              </Grid>

              <Grid mb={1} xs={12}>
                <TextField
                  required
                  type="Number"
                  id="outlined-required"
                  label="Phone No."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Grid>
              <Grid mb={1} xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Enter Your Email"
                  fullWidth
                />
              </Grid>
              <Grid mb={1} xs={12} position={"relative"}>
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
                  label="Enter Your Address"
                  fullWidth
                />
              </Grid>
              <Grid display={"flex"} mb={1} gap={"7px"} xs={12}>
                <Grid item md={6} xs={12}>
                  <TextField
                    required
                    type="Number"
                    id="outlined-required"
                    label="Pin Code"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="District"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid display={"flex"} gap={"7px"} xs={12}>
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
              <Button variant="contained">Sign Up</Button>
            </Box>
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
        </Box>
      </Box>
    </>
  );
};

export default Signup;
