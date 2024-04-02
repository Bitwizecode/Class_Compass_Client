import { AppBar, IconButton, Typography, Toolbar, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <Box>
      <AppBar position="static">
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
              src="https://cdn-icons-png.flaticon.com/128/1080/1080985.png"
              alt=""
            />
            <Box
               sx={{
                lineHeight:"1.2",
                fontSize:"18px"
               }}
               title={"MGM Acedemy's High School"}
            >
              MGM Academy's High school
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavbar;
