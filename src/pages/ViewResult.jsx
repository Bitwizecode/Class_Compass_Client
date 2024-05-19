import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Typography,
} from "@mui/material";
import SchoolLogo from "../assets/icon/school_logo.jpg";
import { useNavigate } from "react-router-dom";
import { useExamResultContext } from "../contexts/ExamResultContextProvider";

const ViewResult = () => {
  const navigate = useNavigate();

  const { selectedStudent } = useExamResultContext();

  const date = new Date();

  if (!selectedStudent) {
    return <Typography variant="h6">No student selected.</Typography>;
  }

  // Calculate total marks obtained and total maximum marks
  const totalMarksObtained = selectedStudent.marks.reduce(
    (total, mark) => total + mark.markObt,
    0
  );
  const totalMaxMarks = selectedStudent.marks.reduce(
    (total, mark) => total + mark.markTotal,
    0
  );

  // Calculate percentage
  const percentage = (totalMarksObtained / totalMaxMarks) * 100;

  // Status
  let status;
  if (totalMarksObtained < 280) {
    status = "Fail";
  } else {
    status = "Pass";
  }
console.log(selectedStudent)
  return (
    <Box m={"0 auto"} width={"100%"}>
      <Box
        width={"100%"}
        display={"flex"}
        marginBlock={"10px"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          mb={"10px"}
          display={"flex"}
          justifyContent={"right"}
          width={"60%"}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "11px" }}
            onClick={() => navigate("/set-result")}
          >
            Edit Result
          </Button>
        </Box>
        <Box
          className="result-main-container"
          sx={{
            mb: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          }}
        >
          <div className="top">
            <div className="left">
              <div className="result-logo">
                <img className="result-school-logo" src={SchoolLogo} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="school-name">MGM Academy's High School</div>
              <div className="school-add">
                Sainath nagar, Virar east, 401305
              </div>
              <div className="school-add">
                Academic Year : {date.getFullYear()} - {date.getFullYear() + 1}
              </div>
              <div className="school-add">
                1<sup>st</sup> Semester Exam
              </div>
            </div>
          </div>
        </Box>
        <Box
          className="result-main-container"
          sx={{
            mb: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          }}
        >
          <div className="main-details">
            <div className="name-father-name">
              <div className="name-result">
                Student Name :
                <span className="text-result"> {selectedStudent?.name}</span>
              </div>
              <div className="name-result">
                Father Name :{" "}
                <span className="text-result">
                  {selectedStudent?.fathername}
                </span>
              </div>
            </div>
            <div className="name-father-name">
              <div className="name-result">
                DOB :{" "}
                <span className="text-result"> {selectedStudent?.dob}</span>
              </div>
              <div className="name-result">
                Class :{" "}
                <span className="text-result">{selectedStudent?.class}</span>
              </div>
            </div>
            <div className="name-father-name">
              <div className="name-result">
                Roll No :{" "}
                <span className="text-result"> {selectedStudent?.rollno}</span>
              </div>
              <div className="name-result">
                Div :{" "}
                <span className="text-result"> {selectedStudent?.div}</span>
              </div>
            </div>
          </div>
        </Box>
        <TableContainer
          className="result-main-container"
          component={Paper}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "whitesmoke" }}>
                <TableCell className="result-table-text" sx={{ pl: "20px" }}>
                  Subject
                </TableCell>
                <TableCell className="result-table-text" align="center">
                  Marks Obtained
                </TableCell>
                <TableCell className="result-table-text" align="center">
                  Total Marks
                </TableCell>
                <TableCell className="result-table-text" align="center">
                  Grade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedStudent?.marks.map((mark) => (
                <TableRow key={mark.sub} sx={{ fontSize: "10px" }}>
                  <TableCell className="result-inside-text" sx={{ pl: "20px" }}>
                    {mark.sub}
                  </TableCell>
                  <TableCell className="result-inside-text" align="center">
                    {mark.markObt}
                  </TableCell>
                  <TableCell className="result-inside-text" align="center">
                    {mark.markTotal}
                  </TableCell>
                  <TableCell className="result-inside-text" align="center">
                    {mark.grade}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          className="result-main-container"
          sx={{
            mt: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          }}
        >
          <div className="percentage-box">
            <div className="up-content">
              <div className="marks-obtained">
                Marks Obtained :{" "}
                <span className="text-result" style={{ color: "#1976d2" }}>
                  {" "}
                  {totalMarksObtained} / {totalMaxMarks}
                </span>
              </div>
              <div className="percentage-calculate">
                Percentage :{" "}
                <span className="text-result" style={{ color: "#1976d2" }}>
                  {" "}
                  {percentage}%
                </span>
              </div>
            </div>
            <div className="down-content">
              <div className="status-pass-fail">
                Status :{" "}
                <span
                  className="text-result"
                  style={{ color: status === "Pass" ? "green" : "red" }}
                >
                  {" "}
                  {status}
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewResult;
