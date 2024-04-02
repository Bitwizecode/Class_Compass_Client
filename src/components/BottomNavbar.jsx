import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";

const BottomNavbar = () => {
    const [selected, setSelected] = useState("home")
  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      width={"100%"}
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
    >
      <BottomNavigation value={selected}   onChange={(e,value) => {setSelected(value)}}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<i className="fa-solid fa-house bottom-navbar-icon"></i>}
        />
        <BottomNavigationAction
          label="Students"
          value="students"
          icon={<i className="fa-solid fa-users bottom-navbar-icon"></i>}
        />
        <BottomNavigationAction
          label="Attendance"
          value="attendance"
          icon={<i className="fa-regular fa-calendar-check bottom-navbar-icon"></i>}
        />
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={<i className="fa-solid fa-comment-dots bottom-navbar-icon"></i>}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavbar;
