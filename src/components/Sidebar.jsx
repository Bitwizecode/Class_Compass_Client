import { useState } from "react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import StudentBoy from "../assets/icon/student_boy.png";
import {useNavigate} from "react-router-dom"
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { title: "My Profile", icon: "fa-user", path:"/profile" },
    { title: "Notification", icon: "fa-bell", path:"/notification" },
    { title: "Help & Support", icon: "fa-circle-info", path:"/help-support" },
    { title: "Log Out", icon: "fa-arrow-right-from-bracket", path:"profile" },
  ];
  return (
    <>
      <Button sx={{ fontSize: "30px" }} onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
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
        <Box>
          {menuItems.map((item, i) => (
            <Box key={i} className="sidebar-menu-item" onClick={()=> navigate(item.path)}>
              <i
                style={{ fontSize: "22px" }}
                className={`fa-solid ${item.icon}`}
              ></i>
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{position:"absolute", bottom:"20px", textAlign:"center", width:"99%", color:"gray"}}>
          <Typography fontSize={"12px"}>
            Managed & Powered by <br />
            Better Mind
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
