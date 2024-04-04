import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Digest from "./pages/Digest";
import HelpSupport from "./pages/HelpSupport";
import Map from "./pages/Map";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Students from "./pages/Students";

function App() {
  const [selected, setSelected] = useState("/");
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<Home selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/digest"
          element={<Digest selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/help-support"
          element={
            <HelpSupport selected={selected} setSelected={setSelected} />
          }
        />
        <Route
          path="/map"
          element={<Map selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/notification"
          element={
            <Notification selected={selected} setSelected={setSelected} />
          }
        />
        <Route
          path="/profile"
          element={<Profile selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/students"
          element={<Students selected={selected} setSelected={setSelected} />}
        />
      </Routes>
    </>
  );
}

export default App;
