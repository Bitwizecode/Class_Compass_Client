import { useContext, useState } from "react";
import Layout from "../components/Layout";
import Results from "../assets/icon/result.gif";
import student from "../assets/icon/student.jpg";
import ExamTT2 from "../assets/icon/exam_time_table.gif";
import Leave3 from "../assets/icon/leave3.png";
import Syllabus from "../assets/icon/syllabus.gif";
import Timetable2 from "../assets/icon/calendar.gif";
import HomeWork3 from "../assets/icon/homework2.gif";
import SchoolGallery from "../assets/icon/school_gallery.gif";
import Attendance3 from "../assets/icon/attendance3.gif";
import Todo from "../assets/icon/todo1.gif";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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

  const store = useSelector((store) => {
    return store;
  });

  const items = [
    { icon: Attendance3, text: "Student Attendance", path: "/attendance" },
    { icon: HomeWork3, text: "HomeWork", path: "/homework" },
    { icon: Timetable2, text: "Time Table", path: "/time-table" },
    { icon: Todo, text: "Todo", path: "/todo" },
    { icon: Leave3, text: "Student's Leave", path: "/student-leave" },
    { icon: Syllabus, text: "Syllabus", path: "/syllabus" },
    { icon: Results, text: "Exam Results", path: "/exam-result" },
    { icon: ExamTT2, text: "Exam Time Table", path: "/exam-time-table" },
    { icon: SchoolGallery, text: "School Gallery", path: "/school-gallery" },
    { icon: Attendance3, text: "Class", path: "/class" },
    { icon: HomeWork3, text: "Teachers", path: "/teachers" },
    { icon: Timetable2, text: "Drivers", path: "/drivers" },
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
          m={"0 15px"}
          borderRadius={"10px"}
          p={"10px 0 5px 10px"}
          display={"flex"}
          gap={"5%"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          bgcolor={"#1976d2"}
        >
          <Box color={"#fff"}>
            <img
              style={{
                width: "100px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHLThNbz89WvCrB-YCLz7_2HrxW-wcG5jzA&s"
              alt=""
            />
          </Box>
          <Box sx={{ color: "#fff" }}>
            <h3>Prathamesh Chavan</h3>
            <p>Class : 10th-B</p>
            <p> Roll No :78</p>
            <p> DOB :10th-July-2002</p>
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
