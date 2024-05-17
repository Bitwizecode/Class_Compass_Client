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
          maxWidth={"750px"}
          borderRadius={"10px"}
          padding={"10px 8px"}
          gap={"8%"}
          boxShadow={"rgba(0, 0, 0, 0.18) 0px 3px 8px"}
          border={"0.5px solid #1967d2"}
          sx={{
            display: "flex",
            justifyContent: "left",
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
              src="data:image/jpeg;base64,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"
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
            <h2 className="home_profile_name">Prathamesh Chavan</h2>
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
