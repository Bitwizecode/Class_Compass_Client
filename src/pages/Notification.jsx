import Layout from "../components/Layout";
import { Box, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BgImage from "../assets/icon/message_bg.jpg";

const Notification = () => {
  return (
    <Layout isBack title={"Notification"}>
      <Box
        height={"calc(100vh - 9.5rem)"}
        position={"relative"}
        marginBottom={"4.5rem"}
        display={"flex"}
        justifyContent={"center"}
        p={"8px"}
      >
        <Box
          maxWidth={520}
          width={"100%"}
          height={"100%"}
          boxShadow={
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          }
          borderRadius={2}
          p={"8px 0"}
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"end"}
          position={"relative"}
        >
          <Box
            height={"100%"}
            m={"0 8px 8px 8px"}
            overflow={"auto"}
          >
            {[
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0,
            ].map((item, i) => (
              <Box key={i}>
                <h1>ajkhsdlkd</h1>
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
