import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import Layout from "../components/Layout";
import EditIcon from "@mui/icons-material/Edit";
import Model from "../components/Model";

function Syllabus() {
  const [openEditSyllabus, setOpenEditSyllabus] = React.useState(false);
  const subject = [
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

  const term = [
    { value: "1st Term" },
    { value: "2nd Term" },
    { value: "3rd Term" },
    { value: "4th Term" },
  ];

  const [editSyllabus, setEditSyllabus] = useState(
    JSON.parse(localStorage.getItem("syllabus")) || []
  );

  const [data, setData] = useState({
    chapter: "",
    weightage_marks: "",
  });

  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited

  useEffect(() => {
    const storedData = localStorage.getItem("syllabus");
    if (storedData) {
      setEditSyllabus(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("editSyllabus", JSON.stringify(editSyllabus));
  }, [editSyllabus]);

  const handleEdit = (index) => {
    const { chapter, weightage_marks } = editSyllabus[index]; // Get the data of the row being edited
    setData({ chapter, weightage_marks }); // Populate the form fields with the data
    setEditIndex(index); // Set the index of the row being edited
    setOpenEditSyllabus(true); // Open the edit modal
  };
  return (
    <Layout isBack title={"Syllabus"}>
      <Box
        mt={10.5}
        className={"syllabus-main"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box className={"selector-main"}>
          <Box className={"subject-term-selector"}>
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
            <TextField
              className="subject-term-textfield"
              id="select-gender"
              select
              label="Choose Term"
            >
              {term.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        <Box
          className="syllabus-table-main"
          width={"75%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={3}
        >
          <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: "10px" }}>Sr.No</TableCell>
                  <TableCell align="left">Chapter</TableCell>
                  <TableCell align="center">Weightage</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editSyllabus.map((syb, i) => (
                  <TableRow key={syb.sr}>
                    <TableCell>
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {i + 1 + "."}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{syb.chapter}</TableCell>
                    <TableCell align="center">
                      {syb.weightage_marks + " marks"}
                    </TableCell>
                    <TableCell align="center" className="table-name">
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(i)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box className="login-submit">
            <Button
              type="submit"
              variant="outlined"
              size="small"
              onClick={() => {
                setEditIndex(null);
                setData({chapter: "", weightage_marks: ""})
                setOpenEditSyllabus(true);
              }}
            >
              Add
            </Button>
          </Box>
          <Model
            open={openEditSyllabus}
            setOpen={setOpenEditSyllabus}
            headerText={"Syllabus Details"}
            submitText={editIndex !== null ? "Update" : "Add"}
            subHeaderText={
              editIndex !== null
                ? "Edit Chapter and Weightage"
                : "Add Chapter and Weightage"
            }
            onSubmit={() => {
              if (editIndex !== null) {
                const updatedSyllabus = [...editSyllabus];
                updatedSyllabus[editIndex] = data; // Update the data of the edited row
                setEditSyllabus(updatedSyllabus);
              } else {
                setEditSyllabus([...editSyllabus, data]);
              }
              setOpenEditSyllabus(false);
              setEditIndex(null);
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1.2}
              
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
                    required
                    type="text"
                    id="outlined-required"
                    label="Chapter Name"
                    multiline
                    maxRows={2}
                    value={data.chapter}
                    onChange={(e) =>
                      setData({ ...data, chapter: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    className="subject-term-textfield"
                    required
                    type="number"
                    id="outlined-required"
                    label="Weightage"
                    value={data.weightage_marks}
                    onChange={(e) =>
                      setData({
                        ...data,
                        weightage_marks: e.target.value,
                      })
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Model>
        </Box>
      </Box>
    </Layout>
  );
}

export default Syllabus;
