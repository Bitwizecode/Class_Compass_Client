import React from "react";
import Layout from "../components/Layout";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BgImage from "../assets/icon/message_bg.jpg";

const Notification = () => {
  return (
    <Layout isBack title={"Notification"}>
      <Box
        position={"relative"}
        height={"calc(100vh - 13rem)"}
        m={"0 8px"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
      >
        <Box
          maxWidth={520}
          width={"100%"}
          height={"100%"}
          overflow={"auto"}
          mt={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"end"}
          pb={1}
          sx={{
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            bgcolor: "rgba(0,0,0,0)",
          }}
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
        </Box>
      </Box>
    </Layout>
  );
};

export default Notification;
