import React from "react";
import { Box, Typography, CardContent, IconButton, Tooltip } from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";
import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";

const Profile = () => {
  return (
    <>
      <Layout isBack title={"My Profile"}>
        <Box className="profile-main-details">
          <Box>
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
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </IconButton>
                </Tooltip>
                <hr className="line" style={{color:"red"}} />
              </Box>
              <CardContent className="card">
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Class : </span>
                  10<sup>th</sup> - A
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Roll No : </span>
                  45
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Gender : </span>
                  Male / Female
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Phone No : </span>
                  +91 XXXXXXXXXX
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Email : </span>
                  xyz123@gmail.com
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>DOB : </span>
                  12 Dec 2001
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Address : </span>
                  H. No 02, Kini Apartment, Sainath Nagar, Virar East, 401305.
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>State : </span>
                  Maharashtra
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>Country : </span>
                  India
                </Typography>
                <Typography variant="h7" className="card-details">
                  <span style={{ mb: 0.8, fontWeight: 600 }}>
                    Blood Group:{" "}
                  </span>
                  A+
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Profile;
