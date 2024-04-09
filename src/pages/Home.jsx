import { useState } from "react";
import Layout from "../components/Layout";
import Attendance from "../assets/icon/attendance.png";
import Timetable from "../assets/icon/timetable.png";
// import Results from "../assets/icon/results.png";
import Results from "../assets/icon/passed.gif";
import Leave from "../assets/icon/student_leave.png";
import HomeWork from "../assets/icon/homework.png";
import ExamTT from "../assets/icon/exam_time_table.png";
import Leave2 from "../assets/icon/leave.png";
import HomeWork2 from "../assets/icon/home_work.png";
import Attendance2 from "../assets/icon/attendance2.png";
// import Timetable2 from "../assets/icon/time_table.png";
import Timetable2 from "../assets/icon/calendar.gif";
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
  const items = [
    { icon: Attendance, text: "Student Attendance" },
    { icon: Leave2, text: "Student's Leave" },
    { icon: Timetable2, text: "Time Table" },
    { icon: Results, text: "Exam Results" },
    { icon: HomeWork, text: "HomeWork" },
    { icon: ExamTT, text: "Exam Time Table" },
    { icon: ExamTT, text: "School Gallery" },
    { icon: HomeWork, text: "Syllabus" },
    { icon: HomeWork, text: "Todo" },
  ];
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
          <Typography variant="h6">Greetings, Nisha mam</Typography>
          <Box
            m={"10px 0"}
            bgcolor={"whitesmoke"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            p={1}
            borderRadius={"10px"}
          >
            <Typography variant="p">
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
        <Box display={"flex"} justifyContent={"center"}>
        <Grid  width={["100%", "50%", "50%"]} mt={"20px"} padding={"0 8px"} container>
          
          {items.map((item, index) => (
            <Grid spacing={1}  display={"flex"} justifyContent={"center"} alignItems={"center"} item xs={4} key={index}>
              <Box className="home-items" m={"10px"} >
                <Box className="home-item-icon">
                  <img width={"60px"} src={item.icon} alt="" />
                </Box>
                <Typography
                  className="home-item-text"
                  sx={{ lineHeight: 1.1, mt: "10px", fontSize: "14px" }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>

        
      </Box>
    </Layout>
  );
};

export default Home;
