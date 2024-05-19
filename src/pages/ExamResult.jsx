import React, { useRef } from "react";
import Layout from "../components/Layout";
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
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/icon/edit.png";
import { useExamResultContext } from "../contexts/ExamResultContextProvider";

const ExamResult = ({ selected, setSelected }) => {
  const fileInputRef = useRef(null);
  const handleOpenFile = () => {
    fileInputRef.current.click();
  };
  const navigate = useNavigate();
  const { setSelectedStudent, selectedStudent } = useExamResultContext();
  console.log(selectedStudent);
  const rows = [
    {
      name: "Ravi Gupta",
      fathername: "Raju D Gupta",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: [
        { sub: "English", markObt: 95, markTotal: 100, grade: "A" },
        { sub: "Marathi", markObt: 98, markTotal: 100, grade: "A+" },
        { sub: "Hindi", markObt: 99, markTotal: 100, grade: "A+" },
        { sub: "Maths", markobt: 83, markTotal: 100, grade: "C" },
        { sub: "Science", markObt: 79, markTotal: 100, grade: "C" },
        { sub: "History & PS", markObt: 86, markTotal: 100, grade: "B" },
        { sub: "Geography", markObt: 83, markTotal: 100, grade: "C" },
        { sub: "EVS", markObt: 95, markTotal: 100, grade: "B" },
      ],
    },
    {
      name: "Rahul Gupta",
      fathername: "Raju Devnath Gupta",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: false,
    },
    {
      name: "Raj Gupta",
      fathername: "Raju D Gupta",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
    },
    {
      name: "Prathamesh Chavan",
      fathername: "Shashikant C",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
    },
    {
      name: "Siddhu Gupta",
      fathername: "Shashikant Chavan",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: false,
    },
    {
      name: "Rohit Gupta",
      fathername: "Raju D G",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
    },
  ];
  const term = [
    { value: "1st Term" },
    { value: "2nd Term" },
    { value: "3rd Term" },
    { value: "4th Term" },
  ];

  return (
    <Layout isBack title={"Exam Results"}>
      <Box m={"0 auto"} mt={9} width={"100%"} mb={9}>
        <Box width={"95%"} m={"auto"}>
          <Typography variant="h6" sx={{ fontWeight: 550, mb: "7px" }}>
            Class - 2 / B
          </Typography>
        </Box>
        <Box
          width={"95%"}
          m={"auto"}
          mb={"-6px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button variant="outlined" size="small">
            No of Students : 102
          </Button>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          mt={"20px"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TableContainer sx={{ width: "95%" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: "25px" }}>Name</TableCell>
                  <TableCell align="left">Roll No</TableCell>
                  <TableCell align="center">View Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={"10px"}
                      >
                        {row.name}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.class}</TableCell>

                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "11px" }}
                        onClick={() => {
                          setSelectedStudent(row);
                          navigate(
                            row.isResultSet == true
                              ? "/view-result"
                              : "/set-result"
                          );
                        }}
                      >
                        {row.isResultSet == true ? "View Result" : "Set Result"}
                      </Button>
                    </TableCell>
                    {/* <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "11px" }}
                        onClick={() => navigate("/set-result")}
                      >
                        Set Result
                      </Button>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default ExamResult;
