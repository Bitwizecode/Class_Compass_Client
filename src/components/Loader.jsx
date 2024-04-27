import { Typography } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loading-text">
        <div className="loader"></div>
        <Typography sx={{ color: "#fff", ml: "25px" }} variant="h5">
          LOADING...
        </Typography>
      </div>
    </div>
  );
};

export default Loader;
