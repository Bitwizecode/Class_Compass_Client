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
  Typography,
} from "@mui/material";
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/icon/edit.png";

const ExamResult = ({ selected, setSelected }) => {
  const fileInputRef = useRef(null);
  const handleOpenFile = () => {
    fileInputRef.current.click();
  };
  const navigate = useNavigate();

  const rows = [
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
    { name: "Ravi Gupta", class: "1-A" },
  ];
  const term = [
    { value: "1st Term" },
    { value: "2nd Term" },
    { value: "3rd Term" },
    { value: "4th Term" },
  ];

  return (
    <Layout>
      <Box m={"0 auto"} mt={9} width={"100%"} mb={9}>
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
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          mt={"20px"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TableContainer sx={{ width: "95%" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: "25px" }}>Name</TableCell>
                  <TableCell align="left">Roll No</TableCell>
                  <TableCell align="center">View Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={"10px"}
                      >
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
                        onClick={() => navigate("/view-result")}
                      >
                        View Result
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

export default ExamResult;
