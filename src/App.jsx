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
import Class from "./pages/Class";
import Teachers from "./pages/Teachers";
import Division from "./pages/Division";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Message from "./pages/Message";
import Attendance from "./pages/Attendance";
import SchoolGallery from "./pages/SchoolGallery";
import ExamTimeTable from "./pages/ExamTimeTable";
import TimeTable from "./pages/TimeTable";
import Drivers from "./pages/Drivers";
import Loader from "./components/Loader";
import Todo from "./pages/Todo";
import Syllabus from "./pages/Syllabus";
function App() {
  const [selected, setSelected] = useState("/");
  return (
    <>
      {/* {true && <Loader />} */}

      <Routes>
        <Route
          path="*"
          element={<Home selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/map"
          element={<Map selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/students"
          element={<Students selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/class"
          element={<Class selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/division"
          element={<Division selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/teachers"
          element={<Teachers selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/attendance"
          element={<Attendance selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/message"
          element={<Message selected={selected} setSelected={setSelected} />}
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
          path="/notification"
          element={
            <Notification selected={selected} setSelected={setSelected} />
          }
        />
        <Route
          path="/profile"
          element={<Profile selected={selected} setSelected={setSelected} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/school-gallery" element={<SchoolGallery />} />
        <Route path="/exam-time-table" element={<ExamTimeTable />} />
        <Route path="/time-table" element={<TimeTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </>
  );
}

export default App;
