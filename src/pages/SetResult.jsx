import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Input,
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
function SetResult() {
  const [openEditExamTT, setOpenEditExamTT] = React.useState(false);
  const [subject, setSubject] = useState(
    JSON.parse(localStorage.getItem("subject"))
  );
  const [data, setData] = useState({ subject: "", marks: "" });
  useEffect(() => {
    const storedData = localStorage.getItem("subject");
    if (storedData) {
      setSubject(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subject", JSON.stringify(subject));
  }, [subject]);

  const rows = [
    {
      name: "Ravi Gupta",
      fathername: "Raju Gupta",
      class: "10",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
    },
    {
      name: "Raj Gupta",
      fathername: "Raju Gupta",
      class: "9",
      div: "B",
      rollno: 152,
      dob: "12-12-2003",
    },
    {
      name: "Rohit Gupta",
      fathername: "Raju Gupta",
      class: "12",
      div: "B",
      rollno: 131,
      dob: "12-12-2004",
    },
    {
      name: "Rahul Gupta",
      fathername: "Raju Gupta",
      class: "15",
      div: "B",
      rollno: 141,
      dob: "12-12-2005",
    },
  ];

  const marks = [
    { sub: "English", markobt: 95, marktottal: 100, grade: "A" },
    { sub: "Marathi", markobt: 98, marktottal: 100, grade: "A+" },
    { sub: "Hindi", markobt: 99, marktottal: 100, grade: "A+" },
    { sub: "Maths", markobt: 83, marktottal: 100, grade: "C" },
    { sub: "Science", markobt: 79, marktottal: 100, grade: "C" },
    { sub: "History & PS", markobt: 86, marktottal: 100, grade: "B" },
    { sub: "Geography", markobt: 83, marktottal: 100, grade: "C" },
    { sub: "EVS", markobt: 95, marktottal: 100, grade: "B" },
  ];
  const date = new Date();
  console.log(subject);
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        className="result-main-container"
        marginBlock={"10px"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        }}
      >
        <Box
          sx={{
            mt: "8px",
            padding: "10px",
          }}
        >
          <Typography variant="h5" fontWeight={650}>
            Set Students Marks
          </Typography>
          <Typography color={"gray"} marginBottom={"12px"} fontSize={14}>
            Name : {rows[0].name} <br /> Class : {rows[0].class}/{rows[0].div}
          </Typography>
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
              {subject.map((sub) => (
                <TableRow key={sub.subject} sx={{ fontSize: "10px" }}>
                  <TableCell className="result-inside-text" sx={{ pl: "20px" }}>
                    {sub.subject}
                  </TableCell>
                  <TableCell className="result-inside-text" align="center">
                    {sub.marks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          onClick={() => {
            setOpenEditExamTT(true);
          }}
        >
          Add
        </Button>
        <Model
          open={openEditExamTT}
          setOpen={setOpenEditExamTT}
          headerText={"Exam Time Table"}
          submitText={"Save"}
          subHeaderText={"Update Exam Time Table"}
          onSubmit={() => {
            setSubject([...subject, data]);
            setOpenEditExamTT(false);
          }}
        >
          <form action="">
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
                    className="subject-term-textfield"
                    InputLabelProps={{ shrink: true }}
                    required
                    type="text"
                    id="outlined-required"
                    label="Date"
                    onChange={(e) =>
                      setData({ ...data, subject: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    className="subject-term-textfield"
                    InputLabelProps={{ shrink: true }}
                    required
                    type="text"
                    id="outlined-required"
                    label="Time"
                    onChange={(e) =>
                      setData({ ...data, marks: e.target.value })
                    }
                  />
                </Box>
              </Box>
            </Box>
          </form>
        </Model>
      </Box>
    </Box>
  );
}

export default SetResult;
