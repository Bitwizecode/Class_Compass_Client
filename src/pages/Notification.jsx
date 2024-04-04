import Layout from "../components/Layout";
import { Box, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BgImage from "../assets/icon/message_bg.jpg";

const Notification = ({ selected, setSelected }) => {
  return (
    <Layout selected={selected} setSelected={setSelected}>
      <Box className="notification-main">
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
            {[0, 1, 0, 1, 0, 1, 0, 1].map((item, i) => (
              <Box
                key={i}
                display={"flex"}
                justifyContent={"right"}
                flexDirection={"column"}
                alignItems={item == 0 ? "end" : "start"}
              >
                <Typography fontSize={"10px"}>
                  09:30 pm 04-April-2024
                </Typography>
                <Box
                  width={"80%"}
                  bgcolor={"lightblue"}
                  p={"10px"}
                  borderRadius={"10px"}
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
            <TextField
              sx={{ ml: 1, background: "#fff" }}
              fullWidth
              placeholder="Message"
            />
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
          >
            lkfv
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Notification;
