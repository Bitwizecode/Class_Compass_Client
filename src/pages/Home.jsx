import { useState } from "react";
import Layout from "../components/Layout";


const Home = ({selected, setSelected}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
    <Layout selected={selected} setSelected={setSelected}></Layout>
    </>
  );
};

export default Home;
