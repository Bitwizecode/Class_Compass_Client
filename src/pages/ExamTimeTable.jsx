import React from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Model from "../components/Model";

function ExamTimeTable({ selected, setSelected }) {
  const navigate = useNavigate();
  const [openEditExamTimeTable, setOpenEditExamTimeTable] =
    React.useState(false);
  const rows = [
    {
      day: "23 March 2024",
      subjects: [{ name: "English", timing: "12.30 to 2.30" }],
    },
    {
      day: "24 March 2024",
      subjects: [{ name: "Hindi", timing: "12.30 to 2.30" }],
    },
    {
      day: "25 March 2024",
      subjects: [{ name: "Marathi", timing: "12.30 to 2.30" }],
    },
    {
      day: "26 March 2024",
      subjects: [{ name: "Holiday", timing: "- : -" }],
    },
    {
      day: "27 March 2024",
      subjects: [{ name: "Maths-1", timing: "12.30 to 2.30" }],
    },
    {
      day: "28 March 2024",
      subjects: [{ name: "Maths-2", timing: "12.30 to 2.30" }],
    },
    {
      day: "29 March 2024",
      subjects: [{ name: "Science-1", timing: "12.30 to 2.30" }],
    },
    {
      day: "30 March 2024",
      subjects: [{ name: "Science-2", timing: "12.30 to 2.30" }],
    },
    {
      day: "01 April 2024",
      subjects: [{ name: "Holiday", timing: "- : -" }],
    },
    {
      day: "02 April 2024",
      subjects: [{ name: "Geography", timing: "12.30 to 2.30" }],
    },
    {
      day: "03 April 2024",
      subjects: [{ name: "Holiday", timing: "- : -" }],
    },
    {
      day: "04 April 2024",
      subjects: [{ name: "History & PS", timing: "12.30 to 2.30" }],
    },
    {
      day: "05 April 2024",
      subjects: [{ name: "EVS", timing: "12.30 to 2.30" }],
    },
  ];
  return (
    <Layout isBack title={"Exam Time Table"}>
      <Box
        maxWidth={"1000px"}
        m={"0 auto"}
        display={"flex"}
        mt={"6rem"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        // height={"100vh"}
      >
        <Box>
          <Typography variant="h5" fontWeight={650} p={2}>
            2<sup>nd</sup> Semester Exam
          </Typography>
        </Box>
        <TableContainer
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="exam-time-table-head" align="left">
                  Date
                </TableCell>
                <TableCell className="exam-time-table-head">Subject</TableCell>
                <TableCell className="exam-time-table-head">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" className="table-name">
                    {row.day}
                  </TableCell>
                  {row.subjects.map((sub, i) => {
                    console.log(sub);
                    return (
                      <TableCell
                        key={i}
                        align="center"
                        className="table-name"
                        style={{
                          color: sub.name === "Holiday" ? "red" : "inherit",
                          // fontWeight: sub.name === "Holiday" ? "650" : "inherit",
                        }}
                      >
                        <Box>{sub.name}</Box>
                      </TableCell>
                    );
                  })}
                  {row.subjects.map((sub, i) => {
                    console.log(sub);
                    return (
                      <TableCell
                        key={i}
                        align="center"
                        className="table-name"
                        style={{
                          color: sub.name === "Holiday" ? "red" : "inherit",
                          // fontWeight: sub.name === "Holiday" ? "650" : "inherit",
                        }}
                      >
                        <Box>{sub.timing}</Box>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={3}>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "14px" }}
            onClick={() => {
              setOpenEditExamTimeTable(true);
            }}
          >
            Edit Time-Table
          </Button>
        </Box>
        <Model
          open={openEditExamTimeTable}
          setOpen={setOpenEditExamTimeTable}
          headerText={"Edit Time-Table"}
          submitText={"Update"}
          subHeaderText={"Update or Edit the Time-Table"}
          onSubmit={() => {
            setOpenEditExamTimeTable(false);
          }}
        ></Model>
      </Box>
    </Layout>
  );
}

export default ExamTimeTable;
