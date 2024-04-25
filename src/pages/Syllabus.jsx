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
} from "@mui/material";
import Layout from "../components/Layout";

function Syllabus() {
  const gender = [
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
    { value: "4th Term" }
  ]

  const rows = [
    { sr: "1", chapter: "Law Of Gravity", weightage: "20 marks" },
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
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <TextField
            id="select-gender"
            select
            label="Choose Subjects"
            sx={{ minWidth: "300px" }}
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-gender"
            select
            label="Choose Term"
            sx={{ minWidth: "376px" }}
          >
            {term.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box
        width={"95%"}
        display={"flex"}
        mt={"20px"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <TableContainer
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
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
                  <TableCell contentEditable align="left">
                    {row.chapter}
                  </TableCell>

                  <TableCell align="center">
                    {row.weightage}
                  </TableCell>
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
