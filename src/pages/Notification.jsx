import React from "react";
import Layout from "../components/Layout";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BgImage from "../assets/icon/message_bg.jpg";

const Notification = () => {
  return (
    <Layout isBack title={"Notification"}>
      <Box
        border={"4px solid red"}
        height={"calc(100vh - 8rem)"}
        position={"relative"}
        marginBottom={"4rem"}
      >
        {/* <Box
          maxWidth={520}
          width={"100%"}
          height={"95%"}
          border={"4px solid"}
          boxShadow={
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          }
        >
          <Box className="notification-field-send-btn-box">
            <TextField
              sx={{ ml: 1, background:"#fff" }}
              fullWidth
              placeholder="Message"
            />
            <Box className="notification-send-btn">
              <SendIcon sx={{ fontSize: "26px" }} />
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Layout>
  );
};

export default Notification;
