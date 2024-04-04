import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BottomNavbar from "../components/BottomNavbar";
import TopNavbar from "../components/TopNavbar";
import Notification from "./Notification";


const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
    
    {/* <TopNavbar toggleSidebar={()=>setOpenSidebar(!openSidebar)} />
    <Sidebar open={openSidebar} onClose={()=>setOpenSidebar(false)} />
    <BottomNavbar/> */}
    <Notification/>
    </>
  );
};

export default Home;
