import { AppBar, IconButton, Typography, Toolbar, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {useNavigate} from "react-router-dom"
import SchoolLogo from "../assets/icon/school_logo.jpg"

const TopNavbar = ({ title, isBack, toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <Box mb={7}>
      <AppBar position="fixed" >
        {!isBack ? (
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "45px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
                src= {SchoolLogo}
                alt=""
              />
              <Box
                sx={{
                  lineHeight: "1.2",
                  fontSize: "18px",
                }}
                title={"MGM Acedemy's High School"}
              >
                MGM Academy's High school
              </Box>
            </Typography>
          </Toolbar>
        ) : (
          <Toolbar>
            <IconButton
              size=""
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={()=>navigate("/")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  lineHeight: "1.2",
                  fontSize: "20px",
                  marginLeft: "8px",
                }}
                title={"Details"}
              >
                {title}
              </Box>
            </Typography>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
};

export default TopNavbar;
