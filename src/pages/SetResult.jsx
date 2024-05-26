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
import { useExamResultContext } from "../contexts/ExamResultContextProvider";
function SetResult() {
  const navigate = useNavigate();
  const { selectedStudent, resultsData, setResultsData, setSelectedStudent } =
    useExamResultContext();
  const [openEditExamTT, setOpenEditExamTT] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const [data, setData] = useState({
    subject: "",
    markObt: "",
    markTotal: "",
    grade: "",
  });

  const handleDelete = (index) => {
    const subjects = Object.keys(selectedStudent?.marks);
    let updatedObj = selectedStudent;
    delete selectedStudent?.marks[subjects[index]];

    setResultsData({ ...resultsData, [selectedStudent.name]: updatedObj });
    setSelectedStudent(updatedObj);
    setData({
      subject: "",
      markObt: "",
      markTotal: "",
      grade: "",
    });
  };

  const handleEdit = ({ index, editData } = {}) => {
    if (isEditOpen) {
      console.log(editData);
      let updatedObj = {
        ...selectedStudent,
        marks: { ...selectedStudent.marks, [editData.subject]: editData },
      };
      setIsEditOpen(false);
      setSelectedStudent(updatedObj);
      setResultsData({ ...resultsData, [selectedStudent.name]: updatedObj });
      setOpenEditExamTT(false);
    } else {
      const subjects = Object.keys(selectedStudent?.marks);
      setData(selectedStudent?.marks[subjects[index]]);
      setIsEditOpen(true);
      setOpenEditExamTT(true);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    localStorage.setItem("selectedTerm", event.target.value);
  };

  const handleAddResult = () => {
    let student = {
      ...selectedStudent,
      marks: { ...selectedStudent?.marks, [data.subject]: data },
    };

    setResultsData({ ...resultsData, [student.name]: student });
    setSelectedStudent(student);
    setData({
      subject: "",
      markObt: "",
      markTotal: "",
      grade: "",
    });
    setOpenEditExamTT(false);
  };

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
            Name : {selectedStudent?.name}
          </Typography>
          <Typography color={"gray"} fontSize={14}>
            Class : {selectedStudent?.class}
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
                  <MenuItem value={3}>4th Term</MenuItem>
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
              {selectedStudent?.marks &&
              Object.keys(selectedStudent?.marks).length > 0 ? (
                Object.keys(selectedStudent?.marks).map((sub, i) => (
                  <TableRow key={i} sx={{ fontSize: "10px" }}>
                    <TableCell
                      className="result-inside-text"
                      sx={{ pl: "20px", cursor: "pointer" }}
                    >
                      <TripleDotMenu
                        menuItems={["Edit", "Delete"]}
                        handleActions={({ open, setOpen, option }) => {
                          setOpen(false);
                          if (option === "Edit") {
                            handleEdit({ index: i });
                          } else if (option === "Delete") {
                            handleDelete(i);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell
                      className="result-inside-text"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedStudent?.marks[sub].subject}
                    </TableCell>
                    <TableCell
                      className="result-inside-text"
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedStudent?.marks[sub].markObt || 0}
                    </TableCell>
                    <TableCell
                      className="result-inside-text"
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedStudent?.marks[sub].markTotal || 0}
                    </TableCell>
                    <TableCell
                      className="result-inside-text"
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedStudent?.marks[sub].grade || 0}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Click on Add button to set result
                  </TableCell>
                </TableRow>
              )}
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
              setIsEditOpen(false);
              setOpenEditExamTT(true);
            }}
          >
            Add
          </Button>
        </Box>
        <Model
          open={openEditExamTT}
          setOpen={() => {
            setOpenEditExamTT(false);
            setIsEditOpen(false);
          }}
          headerText={"Exam Time Table"}
          submitText={"Save"}
          subHeaderText={"Update Exam Time Table"}
          onSubmit={() => {
            if (isEditOpen) {
              handleEdit({ editData: data });
            } else {
              handleAddResult();
            }
          }}
        >
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
                value={data.subject}
                fullWidth
                type="text"
                id="outlined-required"
                label="Subject"
                disabled={isEditOpen}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
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
                type="number"
                id="outlined-required"
                label="Marks Obtained"
                value={data.markObt}
                onChange={(e) => {
                  const value = e.target.value;
                  const numberValue = Number(value);
                  if (value.length <= 3 && numberValue <= 100) {
                    setData({ ...data, markObt: value });
                  }
                }}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                required
                type="number"
                id="outlined-required"
                label="Total Marks"
                value={data.markTotal}
                onChange={(e) => {
                  const value = e.target.value;
                  const numberValue = Number(value);
                  if (value.length <= 3 && numberValue <= 100) {
                    setData({ ...data, markTotal: value });
                  }
                }}
              />
            </Box>
            <Box>
              <TextField
                className="subject-term-textfield"
                InputLabelProps={{ shrink: true }}
                fullWidth
                // type="text"
                id="outlined-required"
                label="Grade"
                value={data.grade}
                inputProps={{
                  style: {
                    textTransform: "capitalize",
                  },
                  maxLength: 2,
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only alphabetic characters and the "+" symbol, limit length to 2
                  if (/^[A-Za-z+-]{0,2}$/.test(value)) {
                    setData({ ...data, grade: value });
                  }
                }}
              />
            </Box>
          </Box>
        </Model>
      </Box>
    </Box>
  );
}

export default SetResult;
