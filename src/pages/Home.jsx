import React, { useState } from "react";
import { Drawer, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Sidebar />
    </>
  );
};

export default Home;
