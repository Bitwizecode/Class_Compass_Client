import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  IconButton,
  Tooltip,
  InputAdornment,
  Grid,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";
const gender = [{ value: "Male" }, { value: "Female" }];
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Model from "../components/Model";

const Profile = ({ selected, setSelected }) => {
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openResetPass, setOpenResetPass] = React.useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <Layout
      selected={selected}
      setSelected={setSelected}
      isBack
      title={"My Profile"}
    >
      <Box className="profile-main-details">
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box
            className="card-main"
            sx={{ minWidth: 255, maxWidth: 460, m: "0 10px  " }}
          >
            <Box textAlign={"center"}>
              <img
                className="profile-avatar"
                style={{ marginTop: "-60px" }}
                src={StudentBoy}
                alt=""
              />
              <Typography
                variant="h5"
                fontWeight={550}
                mb={0}
                className="profile-username"
              >
                Prathamesh Chavan
              </Typography>
              <Typography
                color={"gray"}
                mt={"2px"}
                marginBottom={"10px"}
                fontSize={15}
              >
                Class : 1-B
              </Typography>
              <Tooltip title="Edit Profile" placement="top" arrow>
                <IconButton
                  sx={{
                    fontSize: "16px",
                    position: "absolute",
                    right: "12px",
                    top: "0",
                  }}
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    setOpenEdit(true);
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </IconButton>
              </Tooltip>
              <Model
                open={openEdit}
                setOpen={setOpenEdit}
                headerText={"Edit Profile"}
                submitText={"Update"}
                subHeaderText={"Update Your Profile Information"}
                onSubmit={() => {
                  setOpenEdit(false);
                }}
              >
                <Grid container>
                  <Grid display={"flex"} gap={1} xs={12}>
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

                  <Grid display={"flex"} mb={1} gap={1} xs={12}>
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
                  <Grid xs={12}>
                    <Grid mb={1} xs={12}>
                      <TextField
                        required
                        type="number"
                        id="outlined-required"
                        label="Phone No."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              +91
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                    <Grid mb={1} xs={12}>
                      <TextField
                        required
                        type="Email"
                        id="outlined-required"
                        label="Enter Your Email"
                        fullWidth
                      />
                    </Grid>

                    <Grid mb={1} xs={12}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter Your Address"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid display={"flex"} mb={1} gap={1} xs={12}>
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
              </Model>
              <hr className="line" style={{ color: "red" }} />
            </Box>
            <CardContent className="card">
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Class : </span>
                10<sup>th</sup> - A
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Roll No : </span>
                45
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Gender : </span>
                Male / Female
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Phone No : </span>
                +91 XXXXXXXXXX
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Email : </span>
                xyz123@gmail.com
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">DOB : </span>
                12 Dec 2001
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Address : </span>
                H. No 02, Kini Apartment, Sainath Nagar, Virar East, 401305.
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">State : </span>
                Maharashtra
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Country : </span>
                India
              </Typography>
              <Typography variant="h7" className="card-details">
                <span className="card-details-span">Blood Group: </span>
                A+
              </Typography>
            </CardContent>
            <Box className="call-logo">
              <Tooltip title="Call Parent" placement="top" arrow>
                <Box className="profile-Call-Block-logo">
                  <i style={{ fontSize: 16 }} className="fa-solid fa-phone"></i>
                </Box>
              </Tooltip>
              <Tooltip title="Block Student" placement="top" arrow>
                <Box className="profile-Call-Block-logo">
                  <i style={{ fontSize: 16 }} className="fa-solid fa-ban"></i>
                </Box>
              </Tooltip>
            </Box>
            <Tooltip
              title="If you want to change the password, Click here"
              placement="top"
              arrow
            >
              <Box
                sx={{
                  textAlign: "center",
                  color: "#1976d2",
                  mb: "10px",
                  cursor: "pointer",
                }}
              >
                <h5
                  onClick={() => {
                    setOpenResetPass(true);
                  }}
                >
                  Reset Password
                </h5>
              </Box>
            </Tooltip>
            
            <Model
              open={openResetPass}
              setOpen={setOpenResetPass}
              headerText={"Reset Password"}
              submitText={"Reset"}
              subHeaderText={"Reset your password to ensure security"}
              onSubmit={() => {
                setOpenResetPass(false);
              }}
            >
              <Grid container>
                <Grid mb={1} xs={12} position={"relative"}>
                  <TextField
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    id="outlined-required"
                    label="Old Password"
                    fullWidth
                  />
                  <i
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`fa-solid fa-eye${
                      showConfirmPassword ? "" : "-slash"
                    } pass-eye-icon`}
                  ></i>
                </Grid>
                <Grid mb={1} xs={12} position={"relative"}>
                  <TextField
                    required
                    type={showOldPassword ? "text" : "password"}
                    id="outlined-required"
                    label="New Password"
                    fullWidth
                  />
                  <i
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className={`fa-solid fa-eye${
                      showOldPassword ? "" : "-slash"
                    } pass-eye-icon`}
                  ></i>
                </Grid>
                <Grid mb={1} xs={12} position={"relative"}>
                  <TextField
                    required
                    type={showNewPassword ? "text" : "password"}
                    id="outlined-required"
                    label="Confirm Password"
                    fullWidth
                  />
                  <i
                    onClick={() => setNewShowPassword(!showNewPassword)}
                    className={`fa-solid fa-eye${
                      showNewPassword ? "" : "-slash"
                    } pass-eye-icon`}
                  ></i>
                </Grid>
              </Grid>
            </Model>
            <Tooltip
              title="Click here to View Students Attendance"
              placement="top"
              arrow
            >
              <Box align="center">
                <Button variant="outlined" size="small" onClick={() => navigate("/view-attendance")}>
                  View Attendance
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;
