import React from "react";
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

const Attendance = ({ selected, setSelected }) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <Box mt={9} width={"100%"} mb={9}>
        <Box>
          <Typography ml={6} variant="h5">
            Attendance
          </Typography>
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
                  <TableCell sx={{ pl: "25px" }}>
                    {" "}
                    <Typography variant="h6">Name</Typography>
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Typography variant="h6"> Roll No </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Typography variant="h6"> Attendance </Typography>
                  </TableCell>
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
                        <Typography fontSize={"20px"}> {row.name} </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="center">
                      <Checkbox size="large" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        <Box
          display={"flex"}
          mt={3}
          mb={11}
          width="95%"
          justifyContent={"right"}
        >
          <Button variant="contained" size="large">Submit</Button>
        </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Attendance;
