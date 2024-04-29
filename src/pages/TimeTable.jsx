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
function TimeTable({ selected, setSelected }) {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [openEditTT, setOpenEditTT] = React.useState(false);
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
        display={"flex"}
        width={"98.8%"}
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
        ></Box>

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
                          fontWeight: sub.name === "Recess" ? "550" : "inherit",
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
                    <Button
                      onClick={() => {
                        setOpenEditTT(true);
                      }}
                      startIcon={<EditIcon />}
                      size="small"
                      variant="contained"
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <Model
                    open={openEditTT}
                    setOpen={setOpenEditTT}
                    headerText={"Monday"}
                    submitText={"Update"}
                    subHeaderText={"Update Time Table"}
                    onSubmit={() => {
                      setOpenEdit(false);
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={1.2}
                      height={"400px"}
                      overflow={"auto"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                        mt={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subject"
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
                            className="tt-time-select-textfield"
                            InputLabelProps={{ shrink: true }}
                            required
                            type="time"
                            id="outlined-required"
                            label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <TextField
                          className="tt-subject-select-textfield"
                          id="select-subject"
                          select
                          label="Subjects"
                        >
                          {subject.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                        <Box>
                          <TextField
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={1.2}
                        marginInline={2}
                        mb={2}
                      >
                        <Box>
                          <TextField
                            className="tt-subject-select-textfield"
                            id="select-subject"
                            select
                            label="Subjects"
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
                             className="tt-time-select-textfield"
                             InputLabelProps={{ shrink: true }}
                             required
                             type="time"
                             id="outlined-required"
                             label="Time"
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
export default TimeTable;
