import { useState } from "react";
import Layout from "../components/Layout";


const Home = ({selected, setSelected}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
