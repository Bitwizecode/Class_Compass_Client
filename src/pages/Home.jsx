import { useState } from "react";
import Layout from "../components/Layout";
import Attendance from "../assets/icon/attendance.png";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  Grid,
} from "@mui/material";

const Home = ({ selected, setSelected }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={8} mb={8}>
        <Box m={" 10px 10px"} display={"flex"} alignItems={"center"}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={10}
              onChange={() => {}}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Class 10-B</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography fontSize={"12px"} color={"#d3d2d2"}>
            Change class
          </Typography>
        </Box>
        <Box
          p={"8px 15px"}
          bgcolor={"#fff"}
          m={"0 10px"}
          borderRadius={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <Typography variant="h5">Greetings, Nisha mam</Typography>
          <Box
            m={"10px 0"}
            bgcolor={"whitesmoke"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            p={1}
            borderRadius={"10px"}
          >
            <Typography variant="h6">
              “Just believe in yourself. Even if you don't pretend that you do
              and, at some point, you will.” <br />
            </Typography>
            <Typography style={{ textAlign: "right", width: "100%" }}>
              -Venus Williams.
            </Typography>
          </Box>
          <Box width={"100%"} textAlign={"right"}>
            <Button variant="outlined" size="small">
              Take Attendance
            </Button>
          </Box>
        </Box>

        <Grid mt={"20px"} container>
          {[0, 0, 0, 0, 0, 0].map((item) => (
            <Grid item xs={4}>
              <Box className="home-items" >
                <Box
                  textAlign={"center"}
                  p={"10px 0"}
                  borderRadius={"10px"}
                  bgcolor={"#fff"}
                  // border={"2px solid blue"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  }
                >
                  <img width={"60px"} src={Attendance} alt="" />
                </Box>
                <Typography sx={{ lineHeight: 1, mt: "10px" }}>
                  Student Attendance
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
