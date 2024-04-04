import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
// import ContactUs from "../assets/icon/Contact_us.png";
import ContactUS2 from "../assets/icon/Contact_us2.png";
import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";

const HelpSupport = ({selected, setSelected}) => {
  return (
      <Layout selected={selected} setSelected={setSelected} isBack title={"Help & Support"}>
        <Box className="help-Support">
          <Box textAlign={"center"}>
            <img
              className="help-Support-logo"
              style={{ marginTop: "20px" }}
              src={ContactUS2}
              alt="helpSupportLoGo"
            />
            <Typography
              variant="h4"
              fontWeight={650}
              mt={-6}
              mb={1}
              className=""
              color={"#1976d2"}
            >
              Contact Us
            </Typography>
            <hr className="line" />
            <Typography className="contact-text" marginInline={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consequuntur <br /> dicta, officiis ducimus ipsam adipisci sequi
              molestias temporibus corrupti, <br /> nesciunt dignissimos nulla
              molestiae? Reiciendis <br /> inventore vel aperiam ipsum.
            </Typography>
          </Box>
          <Box className="callemail-logo">
            <Stack direction="row" spacing={4}>
              <Button variant="contained">
                <i className="fa-solid fa-phone"></i> &nbsp; &nbsp; Call
              </Button>
              <Button variant="contained">
                <i className="fa-solid fa-envelope"></i>&nbsp; &nbsp; Email
              </Button>
            </Stack>
          </Box>
        </Box>
      </Layout>
  );
};

export default HelpSupport;
