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

const Drivers = ({ selected, setSelected }) => {
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
    createData("Frozen yoghurt", 159),
    createData("Ice cream sandwich", 237),
    createData("Eclair", 262),
    createData("Cupcake", 305),
    createData("Gingerbread", 356),
    createData("Frozen yoghurt", 159),
    createData("Ice cream sandwich", 237),
    createData("Eclair", 262),
    createData("Cupcake", 305),
    createData("Gingerbread", 356),
  ];
  return (
    <Layout
      isBack
      title={"Bus Drivers"}
      isBottomNavbar
      selected={selected}
      setSelected={setSelected}
    >
      <Box mt={10} width={"100%"} mb={9}>
        <Box
          width={"95%"}
          m={"auto"}
          mb={"-6px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button variant="outlined" size="small">
            No of Drivers : 102
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setOpenAddStudents(true);
            }}
          >
            Add Driver
          </Button>
          <Model
            open={openAddStudents}
            setOpen={setOpenAddStudents}
            headerText={"Add Driver"}
            submitText={"Submit"}
            subHeaderText={"Fill the Driver Details"}
            onSubmit={() => {
              setOpenAddStudents(false);
            }}
          >
            <Box display={"flex"} justifyContent={"center"} mt={2} mb={1.3}>
              <Tooltip title="Add Driver's Photo" placement="top" arrow>
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
                  label="Driver Name"
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Bus No."
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Driver Phone/Email"
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
          <TableContainer
            sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: "25px" }}>Name</TableCell>
                  <TableCell align="left">Bus No</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <img
                          width={"50px"}
                          src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png"
                          alt=""
                        />
                        {row.name}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>

                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "11px" }}
                        onClick={() => navigate("/profile")}
                      >
                        View Details
                      </Button>
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

export default Drivers;
