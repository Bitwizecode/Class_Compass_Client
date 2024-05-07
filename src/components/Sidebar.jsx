import { useState } from "react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "My Profile",
      icon: "fa-user",
      path: "/profile",
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      title: "Notification",
      icon: "fa-bell",
      path: "/notification",
      onClick: () => {
        navigate("/notification");
      },
    },
    {
      title: "Help & Support",
      icon: "fa-circle-info",
      path: "/help-support",
      onClick: () => {
        navigate("/help-support");
      },
    },
    {
      title: "Log Out",
      icon: "fa-arrow-right-from-bracket",
      path: "login",
      onClick: () => {
        localStorage.clear();
        navigate("/login");
      },
    },
    // {
    //   title: "Log In",
    //   icon: "fa-arrow-right-from-bracket",
    //   path: "/login",
    //   onClick: () => {
    //     navigate("/login");
    //   },
    // },
    // {
    //   title: "Sign Up",
    //   icon: "fa-arrow-right-from-bracket",
    //   path: "/sign-up",
    //   onClick: () => {
    //     navigate("/sign-up");
    //   },
    // },
  ];
  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <Box p={1} width={250} className="sidebar-profile-header">
          <Box>
            <img className="sidebar-avatar" src={StudentBoy} alt="" />
          </Box>
          <Box>
            <Typography
              variant="h3"
              fontWeight={550}
              mb={0}
              className="sidebar-username"
            >
              Hii, Prathamesh Chavan
            </Typography>
            <Typography color={"gray"} mt={"5px"} fontSize={12}>
              Class : 1-B
            </Typography>
          </Box>
        </Box>
        <Box mb={"100%"}>
          {menuItems.map((item, i) => (
            <Box key={i} className="sidebar-menu-item" onClick={item.onClick}>
              <i
                style={{ fontSize: "22px" }}
                className={`fa-solid ${item.icon}`}
              ></i>
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", width: "99%", color: "gray" }}>
          <Typography fontSize={"12px"}>
            Managed & Powered by <br />
            BetterMind 🧠 <br />
            Terms & Conditions
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
