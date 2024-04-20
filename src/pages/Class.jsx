import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
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
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/icon/edit.png";

const Class = ({ selected, setSelected }) => {
  const fileInputRef = useRef(null);
  const handleOpenFile = () => {
    fileInputRef.current.click();
  };
  const [openAddStudents, setOpenAddStudents] = React.useState(false);
  const navigate = useNavigate();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    "Nursary",
    "Jr Kg",
    "Sr Kg",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={9} width={"100%"} mb={9}>
        <Box
          width={"95%"}
          m={"auto"}
          mb={"-6px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Model
            open={openAddStudents}
            setOpen={setOpenAddStudents}
            headerText={"Add Student"}
            submitText={"Submit"}
            subHeaderText={"Fill the Student Details"}
            onSubmit={() => {
              setOpenAddStudents(false);
            }}
          >
            <Box display={"flex"} justifyContent={"center"} mt={2} mb={1.3}>
              <Tooltip title="Add Student Photo" placement="top" arrow>
                <img
                  className="students-profile-pic-add"
                  src={Edit}
                  alt=""
                  onClick={handleOpenFile}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={() => {}}
                />
              </Tooltip>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1.2} mb={2}>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Student Name"
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Roll No"
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Student Phone/Email"
                  fullWidth
                />
              </Box>
            </Box>
          </Model>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          mt={"20px"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box width={"95%"}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 550, color: "#1976d2", ml: "10px", mb: "10px" }}
            >
              Class
            </Typography>
          </Box>
          <TableContainer
            sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead></TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row}
                    onClick={() => {
                      navigate("/division");
                    }}
                  >
                    <TableCell className="clickable-cell">
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Typography variant="h6">{row}</Typography>
                      </Box>
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
};

export default Class;
