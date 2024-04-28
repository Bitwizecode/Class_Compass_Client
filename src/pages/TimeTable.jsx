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
import EditIcon from '@mui/icons-material/Edit';
function TimeTable({ selected, setSelected }) {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const rows = [
    {
      day: "Monday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
    {
      day: "Tuesday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
    {
      day: "Wednesday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
    {
      day: "Tuesday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
    {
      day: "Friday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
    {
      day: "Saturday",
      subjects: [
        { name: "English", timing: "12.30 - 1.15" },
        { name: "Math", timing: "12.30 - 1.15" },
        { name: "Science", timing: "12.30 - 1.15" },
        { name: "Hindi", timing: "12.30 - 1.15" },
        { name: "Recess", timing: "12.30 - 1.15" },
        { name: "Marathi", timing: "12.30 - 1.15" },
        { name: "Geography", timing: "12.30 - 1.15" },
        { name: "History", timing: "12.30 - 1.15" },
        { name: "PT", timing: "12.30 - 1.15" },
      ],
    },
  ];
  return (
    <Layout isBack title={"Time Table"}>
      <Box
        // m={"0 auto"}
        display={"flex"}
        mt={"6rem"}
        mb={"2rem"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          className="toggle-main"
          width={"100%"}
          display={"flex"}
          p={2}
          justifyContent={"center"}
          position={"relative"}
          textAlign={"center"}
        >

        </Box>
        
          <TableContainer
            sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="time-table-table-head" align="left">
                    Day
                  </TableCell>
                  <TableCell className="time-table-table-head">1</TableCell>
                  <TableCell className="time-table-table-head">2</TableCell>
                  <TableCell className="time-table-table-head">3</TableCell>
                  <TableCell className="time-table-table-head">4</TableCell>
                  <TableCell className="time-table-table-head">5</TableCell>
                  <TableCell className="time-table-table-head">6</TableCell>
                  <TableCell className="time-table-table-head">7</TableCell>
                  <TableCell className="time-table-table-head">8</TableCell>
                  <TableCell className="time-table-table-head">9</TableCell>
                  <TableCell className="time-table-table-head"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" className="table-name">
                      {row.day}
                    </TableCell>
                    {row.subjects.map((sub, i) => {
                      return (
                        <TableCell
                          key={i}
                          align="center"
                          className="table-name"
                          style={{
                            color: sub.name === "Recess" ? "red" : "inherit",
                            // fontWeight: sub.name === "Recess" ? "550" : "inherit",
                          }}
                        >
                          <Box>
                            {sub.name}
                          <Typography fontSize={"11px"}>
                            {sub.timing}
                          </Typography>
                          </Box>
                        </TableCell>
                      );
                    })}
                <TableCell>
                  <Button startIcon={<EditIcon/>} size="small" variant="contained">Edit</Button>
                </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

      </Box>
    </Layout>
  );
}

export default TimeTable;
