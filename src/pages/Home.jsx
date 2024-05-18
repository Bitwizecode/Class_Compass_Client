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

  const [selectedValue, setSelectedValue] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={8} mb={8}>
        <Box
          m={" 10px 10px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedValue}
              onChange={handleSelectChange}
              label="Age"
              style={{ textAlign: "center" }}
            >
              <MenuItem value={0}>Choose Class</MenuItem>
              <MenuItem value={1}>Class 1-A</MenuItem>
              <MenuItem value={2}>Class 2-A</MenuItem>
              <MenuItem value={3}>Class 3-A</MenuItem>
              <MenuItem value={4}>Class 4-A</MenuItem>
              <MenuItem value={5}>Class 5-A</MenuItem>
              <MenuItem value={6}>Class 6-A</MenuItem>
              <MenuItem value={7}>Class 7-A</MenuItem>
              <MenuItem value={8}>Class 8-A</MenuItem>
              <MenuItem value={9}>Class 9-A</MenuItem>
              <MenuItem value={10}>Class 10-A</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          className="home-profile-main"
          m={"0 auto"}
          maxWidth={"690px"}
          borderRadius={"10px"}
          padding={"10px 20px"}
          gap={"8%"}
          boxShadow={"rgba(0, 0, 0, 0.18) 0px 3px 8px"}
          border={"0.5px solid #1967d2"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            color={"#fff"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              src="https://static.vecteezy.com/system/resources/thumbnails/034/580/356/small/ai-generated-cute-little-girl-in-school-uniform-with-yellow-background-back-to-school-concept-photo.jpg"
              alt=""
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            className="home-profile-text"
            paddingBlock={"6px"}
            maxWidth={"400px"}
          >
            <h2 className="home_profile_name">Prathamesh Shashikant Chavan</h2>
            <p>Class : 10-B</p>
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
