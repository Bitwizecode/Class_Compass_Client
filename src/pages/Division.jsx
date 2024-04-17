import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Box,
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
  Button,
} from "@mui/material";
import Model from "../components/Model";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/icon/edit.png";

const Division = ({ selected, setSelected }) => {
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
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
    { div: "1-A", teacher: "Raj Gupta" },
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
        ></Box>
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
              Division
            </Typography>
          </Box>
          <TableContainer
            sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "95%" }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableCell>Division</TableCell>
                <TableCell align="right">Teacher</TableCell>
                <TableCell align="right"></TableCell>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row}>
                    <TableCell className="clickable-cell">
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Typography variant="p">{row.div}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" className="clickable-cell">
                      <Typography variant="p">{row.teacher}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "11px" }}
                        onClick={() => navigate("/students")}
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

export default Division;
