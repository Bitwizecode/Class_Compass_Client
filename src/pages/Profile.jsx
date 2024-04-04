import React from "react";
import {
  Box,
  Typography,
  CardContent,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";
import Layout from "../components/Layout";

const Profile = ({selected, setSelected}) => {
  return (
    <>
      <Layout selected={selected} setSelected={setSelected} isBack title={"My Profile"}>
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
                  <span className="card-details-span">
                    Blood Group:{" "}
                  </span>
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
                <Box className="profile-Call-Block-logo" >
                  <i style={{ fontSize: 16 }} className="fa-solid fa-ban"></i>
                </Box>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Profile;
