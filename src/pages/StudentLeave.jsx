import React from "react";
import Layout from "../components/Layout";
import Model from "../components/Model";
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
  TextField,
} from "@mui/material";
function StudentLeave() {
  function createData( name, roll, std) {
    return { name, roll, std };
  }
  const [openStudentLeave, setOpenStudentLeave] = React.useState(false);
  const rows = [
    createData("Rohit Gupta", 21, 6.0),
    createData("Raj Gupta", 19, 9.0),
    createData("Rahul Gupta", 46, 16.0),
    createData( "Ravi Gupta", 12, 3.7),
  ];
  return (
    <Layout isBack title={"Student Leave"}>
      <Box mt={12} width={"100%"} mb={9}>
        <Box className="student-leave-curr-date"m={"auto"}>
          <Typography
          
            variant="h5"
            sx={{ fontWeight: 550, mb: "-5px", color: "#1976d2" }}
          >
            Monday,{" "}
            <span style={{ fontSize: "13px", color: "black", fontWeight: 450 }}>
              1<sup>st</sup> July 2024
            </span>
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
          className="student-leave-table"
            sx={{
              boxShadow: " rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "whitesmoke" }}>
                  <TableCell sx={{ pl: "25px" }}>Message From</TableCell>
                  <TableCell align="left">Roll No</TableCell>
                  <TableCell align="center">View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                       {index+1+ ". "} {row.name}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.roll}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          setOpenStudentLeave(true);
                        }}
                      >
                        View
                      </Button>
                      <Model
                        open={openStudentLeave}
                        setOpen={setOpenStudentLeave}
                        headerText={"Leave application"}
                        submitText={"Approve"}
                        subHeaderText={"Application from " + row.name + " on " + new Date().toLocaleDateString()}
                        onSubmit={() => {
                          setOpenEdit(false);
                        }}
                      >
                        <Box
                          sx={{
                            borderRadius: 3,
                            padding: 2,
                            backgroundColor: "whitesmoke",
                            boxShadow:
                              "   rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
                          }}
                        >
                          <Typography mb={1} fontWeight={450}>
                            Sir/Mam,
                          </Typography>
                          <Typography fontSize={"14px"}>
                            I would like to bring to your notice that I, Ravi
                            Gupta of class 10th-C will not be able to attend
                            school for the coming 3 days as I have to go out of
                            the station to attend my cousin’s wedding in
                            Dehradun. I would kindly request you grant me leave
                            for the 12th, 13th, and 14th of April 2024. I will
                            be highly obliged.
                          </Typography>
                        </Box>
                      </Model>
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

export default StudentLeave;
