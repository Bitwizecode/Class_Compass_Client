import Layout from "../components/Layout";
import { Box, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BgImage from "../assets/icon/message_bg.jpg";
import { useRef } from "react";

const Message = ({ selected, setSelected }) => {
  const fileInputRef = useRef(null);

  const handleOpenFile = () => {
    fileInputRef.current.click();
  };
  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={8} className="message-main">
        <Box className="notification-message-box">
          <Box
            height={"100%"}
            m={"0 8px 8px 8px"}
            overflow={"auto"}
            flexDirection={"column"}
            gap={"40px"}
            display={"flex"}
            justifyContent={"right"}
          >
            {[0, 0, 0, 0, 0, 0, 0].map((item, i) => (
              <Box
                key={i}
                display={"flex"}
                justifyContent={"right"}
                flexDirection={"column"}
                alignItems={item == 0 ? "end" : "start"}
              >
                <Typography
                  borderRadius={"5px"}
                  padding={"2px 10px"}
                  fontSize={"10px"}
                  mb={"5px"}
                  color={"#fff"}
                  bgcolor={"#0000008a"}
                >
                  09:30 pm 04-April-2024
                </Typography>
                <Box
                  width={"80%"}
                  bgcolor={"#1976d2"}
                  p={"10px"}
                  borderRadius={"10px"}
                  color={"#fff"}
                >
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque illo voluptate est? Asperiores enim illo modi
                    suscipit nobis eos fugit amet excepturi facilis facere.
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="notification-field-send-btn-box">
            <Box sx={{ width: "100%", position: "relative" }}>
              <TextField
                sx={{ ml: 1, background: "#fff" }}
                fullWidth
                placeholder="Message"
              />
              <i
                className="fa-solid fa-paperclip"
                onClick={handleOpenFile}
                style={{
                  position: "absolute",
                  right: "1.5%",
                  top: "20px",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "gray",
                }}
              ></i>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={() => {}}
              />
            </Box>

            <Box
              onClick={() => console.log("object")}
              className="notification-send-btn"
            >
              <SendIcon sx={{ fontSize: "26px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              opacity: 0.1,
              backgroundImage: `url(${BgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            height={"100%"}
            width={"100%"}
            position={"absolute"}
            top={0}
            zIndex={-1}
          ></Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Message;
