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
import Switch from "@mui/material/Switch";

function Syllabus() {
  const [state, setState] = useState(false);
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
      weightage: "20 marks",
    },
    { sr: "2", chapter: "Law Of Gravity", weightage: "20 marks" },
    { sr: "3", chapter: "Law Of Gravity", weightage: "20 marks" },
    { sr: "4", chapter: "Law Of Gravity", weightage: "20 marks" },
    { sr: "5", chapter: "Law Of Gravity", weightage: "20 marks" },
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
          <Box className="syllabus-toggle-button" display={"flex"} justifyContent={"right"} width={"75%"}>
            <FormGroup
              
              sx={{ position: "right" }}
            >
              <FormControlLabel
                control={<Switch onChange={() => setState(!state)} />}
                label={state ? "View" : "Edit"}
              />
            </FormGroup>
          </Box>
        <Box
          className="syllabus-table-main"
          width={"75%"}
          display={"flex"}
          // mt={"0px"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TableContainer
            sx={{ boxShadow: "none" }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: "10px" }}>Sr.No</TableCell>
                  <TableCell align="left">Chapter</TableCell>
                  <TableCell align="center">Weightage</TableCell>
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
                    <TableCell align="left">
                      {row.chapter}
                    </TableCell>

                    <TableCell align="center">{row.weightage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
}

export default Syllabus;
