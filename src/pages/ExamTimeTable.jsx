import React, { useState } from "react";
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
  MenuItem,
  Tooltip,
  Paper,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Model from "../components/Model";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
function ExamTimeTable({ selected, setSelected }) {
  const [state, setState] = useState(false);
  const [openEditExamTT, setOpenEditExamTT] = React.useState(false);
  const subject = [
    { value: "Holiday" },
    { value: "English" },
    { value: "Marathi" },
    { value: "Hindi" },
    { value: "Maths" },
    { value: "Science" },
    { value: "History & PS" },
    { value: "Geography" },
    { value: "Sanskrit" },
    { value: "EVS" },
  ];
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
        className={"main-xx"}
        maxWidth={"1000px"}
        m={"0 auto"}
        display={"flex"}
        mt={"6rem"}
        mb={"2rem"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          className="toggle-main"
          width={"90%"}
          display={"flex"}
          p={2}
          justifyContent={"center"}
          position={"relative"}
          textAlign={"center"}
        >
          <Typography variant="h6" fontWeight={650}>
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
                <TableCell className="exam-time-table-head"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" className="table-name">
                    {row.day}
                  </TableCell>
                  {row.subjects.map((sub) => {
                    console.log(sub);
                    return (
                      <TableCell
                        align="center"
                        className="table-name"
                        style={{
                          color: sub.name === "Holiday" ? "red" : "inherit",
                          fontWeight:
                            sub.name === "Holiday" ? "650" : "inherit",
                        }}
                      >
                        <Box>{sub.name}</Box>
                      </TableCell>
                    );
                  })}
                  {row.subjects.map((sub) => {
                    console.log(sub);
                    return (
                      <TableCell
                        align="center"
                        className="table-name"
                        style={{
                          color: sub.name === "Holiday" ? "red" : "inherit",
                          fontWeight:
                            sub.name === "Holiday" ? "650" : "inherit",
                        }}
                      >
                        <Box>{sub.timing}</Box>
                      </TableCell>
                    );
                  })}
                  <TableCell align="center" className="table-name">
                    <Button
                      onClick={() => {
                        setOpenEditExamTT(true);
                      }}
                      size="small"
                      variant="contained"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <Model
                    open={openEditExamTT}
                    setOpen={setOpenEditExamTT}
                    headerText={"Exam Time Table"}
                    submitText={"Update"}
                    subHeaderText={"Update Exam Time Table"}
                    onSubmit={() => {
                      setOpenEdit(false);
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={1.2}
                      height={"230px"}
                      overflow={"auto"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={1.2}
                        marginInline={2}
                        mt={2}
                      >
                        <Box>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            required
                            type="date"
                            id="outlined-required"
                            label="Date"
                            fullWidth
                          />
                        </Box>
                        <Box>
                          <TextField
                            className="subject-term-textfield"
                            id="select-subject"
                            select
                            label="Choose Subjects"
                          >
                            {subject.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>
                        <Box>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            required
                            type="time"
                            id="outlined-required"
                            label="Time"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Model>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default ExamTimeTable;
