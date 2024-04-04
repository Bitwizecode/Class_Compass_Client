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
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/map" element={<Map />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/students" element={<Students />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
