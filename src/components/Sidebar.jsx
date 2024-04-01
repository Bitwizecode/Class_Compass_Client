import React, { useState } from "react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button sx={{ fontSize: "30px" }} onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box p={1} width={250} className="sidebar-profile-header">
          <Box >
            <img className="sidebar-avatar" src={StudentBoy} alt="" />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={550} mb={0} className="sidebar-username">
              Hii, Prathamesh Chavan
            </Typography>
            <Typography color={"gray"} mt={"5px"} fontSize={12}>
              Class : 1-B
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
