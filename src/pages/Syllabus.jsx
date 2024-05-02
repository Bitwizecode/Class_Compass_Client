import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Tooltip,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Layout from "../components/Layout";
import EditIcon from "@mui/icons-material/Edit";
import Model from "../components/Model";

function Syllabus() {
  const [state, setState] = useState(false);
  const [chapter, setChapter] = useState("");
  const [weightage, setWeightage] = useState("");
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

  const rows = [
    {
      sr: "1",
      chapter:
        "Law Of Gravity jhygfcvghujikjh huyghjhgtfrghjinb huygtfrtghjihuygftr",
      weightage: "20",
    },
    { sr: "2", chapter: "Law Of Gravity", weightage: "20" },
    { sr: "3", chapter: "Law Of Gravity", weightage: "20" },
    { sr: "4", chapter: "Law Of Gravity", weightage: "20" },
    { sr: "5", chapter: "Law Of Gravity", weightage: "20" },
  ];
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
          // mt={"0px"}
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
                {rows.map((row) => (
                  <TableRow key={row.sr}>
                    <TableCell>
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {row.sr}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.chapter}</TableCell>

                    <TableCell align="center">
                      {row.weightage + " marks"}
                    </TableCell>
                    <TableCell align="center" className="table-name">
                      <Button
                        onClick={() => {
                          setWeightage(row.weightage);
                          setChapter(row.chapter);
                          setOpenEditSyllabus(true);
                        }}
                        size="small"
                        variant="contained"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <Model
                      open={openEditSyllabus}
                      setOpen={setOpenEditSyllabus}
                      headerText={"Syllabus Details"}
                      submitText={"Add"}
                      subHeaderText={"Add Chapter and Weightage"}
                      onSubmit={() => {
                        setOpenEditSyllabus(false);
                      }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={1.2}
                        // height={"230px"}
                        // overflow={"auto"}
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
                              value={chapter}
                              onChange={(e) => setChapter(e.target.value)}
                            />
                          </Box>
                          <Box>
                            <TextField
                              className="subject-term-textfield"
                              required
                              type="number"
                              id="outlined-required"
                              label="Weightage"
                              value={weightage}
                              onChange={(e) => setWeightage(e.target.value)}
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
          <Box className="login-submit">
            <Button
              type="submit"
              variant="outlined"
              size="small"
              onClick={() => {
                setOpenEditSyllabus(true);
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Syllabus;
