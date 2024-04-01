import React, { useState } from "react";
import { Drawer, Button } from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Button onClick={() => setOpen(true)}>OPen drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        lsjdhfkjsbdfk
      </Drawer>
    </>
  );
};

export default Home;
