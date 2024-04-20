import { useState } from "react";
import Layout from "../components/Layout";
import Results from "../assets/icon/result.gif";
import ExamTT2 from "../assets/icon/exam_time_table.gif";
import Leave3 from "../assets/icon/leave3.png";
import Syllabus from "../assets/icon/syllabus.gif";
import Timetable2 from "../assets/icon/calendar.gif";
import HomeWork3 from "../assets/icon/homework2.gif";
import SchoolGallery from "../assets/icon/school_gallery.gif";
import Attendance3 from "../assets/icon/attendance3.gif";
import Todo from "../assets/icon/todo1.gif";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // const items = [
  //   { icon: Attendance3, text: "Student Attendance",path:"/attendance" },
  //   { icon: HomeWork3, text: "HomeWork",path:"/attendance" },
  //   { icon: Timetable2, text: "Time Table",path:"/attendance" },
  //   { icon: Todo, text: "Todo",path:"/attendance" },
  //   { icon: Leave3, text: "Student's Leave",path:"/attendance" },
  //   { icon: Syllabus, text: "Syllabus",path:"/attendance" },
  //   { icon: Results, text: "Exam Results",path:"/attendance" },
  //   { icon: ExamTT2, text: "Exam Time Table",path:"/attendance" },
  //   { icon: SchoolGallery, text: "School Gallery",path:"/school-gallery" },
  // ];

  const items = [
    { icon: Attendance3, text: "Student Attendance",path:"/attendance" },
    { icon: HomeWork3, text: "HomeWork",path:"/attendance" },
    { icon: Timetable2, text: "Time Table",path:"/time-table" },
    { icon: Todo, text: "Todo",path:"/attendance" },
    { icon: Leave3, text: "Student's Leave",path:"/attendance" },
    { icon: Syllabus, text: "Syllabus",path:"/attendance" },
    { icon: Results, text: "Exam Results",path:"/exam-result" },
    { icon: ExamTT2, text: "Exam Time Table",path:"/exam-time-table" },
    { icon: SchoolGallery, text: "School Gallery",path:"/school-gallery" },
    { icon: Attendance3, text: "Class", path: "/class" },
    { icon: HomeWork3, text: "Teachers", path: "/teachers" },
    { icon: Timetable2, text: "Drivers", path: "/attendance" },
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
            bgcolor={"#1976d2"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            p={1}
            borderRadius={"10px"}
            color={"#fff"}
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
            <Button
              onClick={() => {
                navigate("/attendance");
                setSelected("/attendance");
              }}
              variant="outlined"
              size="small"
            >
              Take Attendance
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Grid
            width={["100%", "50%", "50%"]}
            mt={"20px"}
            padding={"0 8px"}
            container
          >
            {items.map((item, index) => (
              <Grid
                spacing={1}
                onClick={() => {
                  navigate(item.path);
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                item
                xs={4}
                key={index}
              >
                <Box className="home-items" m={"10px"}>
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
