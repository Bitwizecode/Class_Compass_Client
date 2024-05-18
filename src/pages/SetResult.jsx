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
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import TripleDotMenu from "../components/TripleDotMenu";
function SetResult() {
  const navigate = useNavigate();
  const [openEditExamTT, setOpenEditExamTT] = React.useState(false);
  const [editResult, setEditResult] = useState(
    JSON.parse(localStorage.getItem("editResult")) || []
  );
  const [data, setData] = useState({
    termName: "",
    subject: "",
    marks_obtained: "",
    total_marks: "",
    grade: "",
  });
  useEffect(() => {
    const storedData = localStorage.getItem("subjects");
    if (storedData) {
      setEditResult(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("editResult", JSON.stringify(editResult));
  }, [editResult]);

  const handleDelete = (index) => {
    const updatedResults = [...editResult];
    updatedResults.splice(index, 1);
    setEditResult(updatedResults);
  };

  const [selectedValue, setSelectedValue] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
      >
        <Box
          sx={{
            mt: "8px",
            padding: "10px",
          }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={650}>
            Set Students Marks
          </Typography>
          <Typography color={"gray"} fontSize={14}>
            Name : {rows[0].name}
          </Typography>
          <Typography color={"gray"} fontSize={14}>
            Class : {rows[0].class}/{rows[0].div}
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Typography color={"gray"} fontSize={14}>
                Term : &nbsp;
              </Typography>
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  label="Age"
                  style={{ textAlign: "center", fontSize: "13px" }}
                >
                  <MenuItem value={0}>1st Term</MenuItem>
                  <MenuItem value={1}>2nd Term</MenuItem>
                  <MenuItem value={2}>3rd Term</MenuItem>
                  <MenuItem value={2}>4th Term</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button
                variant="contained"
                size="small"
                sx={{ fontSize: "11px" }}
                onClick={() => navigate("/view-result")}
              >
                View Result
              </Button>
            </Box>
          </Box>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "whitesmoke" }}>
                <TableCell className="result-table-text" sx={{}}></TableCell>
                <TableCell className="result-table-text">Subject</TableCell>
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
              {editResult.map((sub, i) => (
                <TableRow key={i} sx={{ fontSize: "10px" }}>
                  <TableCell
                    className="result-inside-text"
                    sx={{ pl: "20px", cursor: "pointer" }}
                  >
                    <TripleDotMenu
                      menuItems={["Delete"]}
                      handleActions={({ open, setOpen }) => {
                        setOpen(false);
                        handleDelete();
                      }}
                    />
                  </TableCell>
                  <TableCell
                    className="result-inside-text"
                    style={{ textTransform: "capitalize" }}
                  >
                    {sub.subject}
                  </TableCell>
                  <TableCell
                    className="result-inside-text"
                    align="center"
                    style={{ textTransform: "capitalize" }}
                  >
                    {sub.marks_obtained}
                  </TableCell>
                  <TableCell
                    className="result-inside-text"
                    align="center"
                    style={{ textTransform: "capitalize" }}
                  >
                    {sub.total_marks}
                  </TableCell>
                  <TableCell
                    className="result-inside-text"
                    align="center"
                    style={{ textTransform: "capitalize" }}
                  >
                    {sub.grade}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"30px"}
          mb={"15px"}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              setOpenEditExamTT(true);
            }}
          >
            Add
          </Button>
        </Box>
        <Model
          open={openEditExamTT}
          setOpen={setOpenEditExamTT}
          headerText={"Exam Time Table"}
          submitText={"Save"}
          subHeaderText={"Update Exam Time Table"}
          onSubmit={() => {
            setEditResult([...editResult, data]);
            setOpenEditExamTT(false);
          }}
        >
          <form action="">
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1.2}
              height={"220px"}
              overflow={"auto"}
              mt={2}
            >
              <Box mt={2}>
                <TextField
                  className="subject-term-textfield"
                  InputLabelProps={{ shrink: true }}
                  required
                  fullWidth
                  type="text"
                  id="outlined-required"
                  label="Subject"
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                  inputProps={{
                    style: {
                      textTransform: "capitalize",
                    },
                  }}
                />
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={1.2}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  required
                  type="text"
                  inputProps={{
                    style: {
                      textTransform: "capitalize",
                    },
                    maxLength: 3,
                  }}
                  id="outlined-required"
                  label="Marks Obtained"
                  onChange={(e) =>
                    setData({ ...data, marks_obtained: e.target.value })
                  }
                />
                <TextField
                  InputLabelProps={{ shrink: true }}
                  required
                  type="text"
                  inputProps={{
                    style: {
                      textTransform: "capitalize",
                    },
                    maxLength: 3,
                  }}
                  id="outlined-required"
                  label="Total Marks"
                  onChange={(e) =>
                    setData({ ...data, total_marks: e.target.value })
                  }
                />
              </Box>
              <Box>
                <TextField
                  className="subject-term-textfield"
                  InputLabelProps={{ shrink: true }}
                  required
                  fullWidth
                  type="text"
                  id="outlined-required"
                  label="Grade"
                  onChange={(e) => setData({ ...data, grade: e.target.value })}
                  inputProps={{
                    style: {
                      textTransform: "capitalize",
                    },
                    maxLength: 2,
                  }}
                />
              </Box>
            </Box>
          </form>
        </Model>
      </Box>
    </Box>
  );
}

export default SetResult;
