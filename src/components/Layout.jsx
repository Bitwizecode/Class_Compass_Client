import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BottomNavbar from "../components/BottomNavbar";
import TopNavbar from "../components/TopNavbar";

const Layout = ({ isBack, title, children, selected, setSelected }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <TopNavbar isBack={isBack} title={title} toggleSidebar={() => setOpenSidebar(!openSidebar)} />
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(!openSidebar)} />
      {children}
      <BottomNavbar selected={selected} setSelected={setSelected}/>
    </>
  );
};

export default Layout;
