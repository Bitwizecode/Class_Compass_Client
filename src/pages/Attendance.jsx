import React from "react";
import Layout from "../components/Layout";

const Attendance = ({ selected, setSelected }) => {
  return (
    <Layout
      isBottomNavbar
      selected={selected}
      setSelected={setSelected}
    >
      <h1>Attendance</h1>
    </Layout>
  );
};

export default Attendance;
