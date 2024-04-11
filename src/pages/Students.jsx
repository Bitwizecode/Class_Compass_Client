import React, { useState } from "react";
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
  Checkbox,
} from "@mui/material";
import {useNavigate} from "react-router-dom"

const Students = ({ selected, setSelected }) => {
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
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={9} width={"100%"} mb={9}>
        <Box width={"95%"} m={"auto"}>
          <Typography variant="h5" sx={{ fontWeight: 550, mb: "7px" }}>
            My Students
          </Typography>
        </Box>
        <Box width={"95%"} m={"auto"} mb={"-6px"} display={"flex"} justifyContent={"space-between"}>
          <Button variant="outlined" size="small">
            No of Students : 102
          </Button>
          <Button variant="contained" size="small">
            Add Students
          </Button>
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
                      <Button variant="contained" size="small" sx={{fontSize: "11px"}} onClick={()=>navigate("/profile")}>
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
