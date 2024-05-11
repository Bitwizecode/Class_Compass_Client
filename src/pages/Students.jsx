import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/icon/edit.png";

const Students = ({ selected, setSelected }) => {
  const fileInputRef = useRef(null);
  const handleOpenFile = () => {
    fileInputRef.current.click();
  };
  const [openAddStudents, setOpenAddStudents] = React.useState(false);
  const navigate = useNavigate();

  const rows = [
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
  ];

  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
    <Box mt={9} width={"100%"} mb={9}>
      <Box width={"95%"} m={"auto"}>
        <Typography variant="h6" sx={{ fontWeight: 550, mb: "7px" }}>
          Class - 2 / B
        </Typography>
      </Box>
      <Box
        width={"95%"}
        m={"auto"}
        mb={"-6px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Button variant="outlined" size="small">
          No of Students : 102
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            setOpenAddStudents(true);
          }}
        >
          Add Students
        </Button>
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
            </Tooltip>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={() => {}}
              />
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
        <TableContainer
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ pl: "25px" }}>Name</TableCell>
                <TableCell align="left">Roll No</TableCell>
                <TableCell align="center">View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
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
                  <TableCell align="left">
                    {row.class}
                  </TableCell>

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

export default Students;


