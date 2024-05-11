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
import Todo from "./pages/Todo";
import Syllabus from "./pages/Syllabus";
import Homework from "./pages/Homework";
import StudentLeave from "./pages/StudentLeave";
import PrivateRoute from "./components/PrivateRoute";

import ExamResult from "./pages/ExamResult";
import ViewResult from "./pages/ViewResult";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PrivateRoute component={Home} />} />
        <Route path="/map" element={<PrivateRoute component={Map} />} />
        <Route
          path="/students"
          element={<PrivateRoute component={Students} />}
        />
        <Route path="/class" element={<PrivateRoute component={Class} />} />
        <Route
          path="/division"
          element={<PrivateRoute component={Division} />}
        />
        <Route
          path="/teachers"
          element={<PrivateRoute component={Teachers} />}
        />
        <Route
          path="/attendance"
          element={<PrivateRoute component={Attendance} />}
        />
        <Route path="/message" element={<PrivateRoute component={Message} />} />
        <Route path="/digest" element={<PrivateRoute component={Digest} />} />
        <Route
          path="/help-support"
          element={<PrivateRoute component={HelpSupport} />}
        />
        <Route
          path="/notification"
          element={<PrivateRoute component={Notification} />}
        />
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
        <Route
          path="/school-gallery"
          element={<PrivateRoute component={SchoolGallery} />}
        />
        <Route
          path="/exam-time-table"
          element={<PrivateRoute component={ExamTimeTable} />}
        />
        <Route
          path="/time-table"
          element={<PrivateRoute component={TimeTable} />}
        />
        <Route path="/drivers" element={<PrivateRoute component={Drivers} />} />
        <Route path="/todo" element={<PrivateRoute component={Todo} />} />
        <Route
          path="/syllabus"
          element={<PrivateRoute component={Syllabus} />}
        />
        <Route
          path="/homework"
          element={<PrivateRoute component={Homework} />}
        />
        <Route
          path="/student-leave"
          element={<PrivateRoute component={StudentLeave} />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/student-leave" element={<StudentLeave />} />
        <Route path="/exam-result" element={<ExamResult />} />
        <Route path="/view-result" element={<ViewResult />} />
      </Routes>
    </>
  );
}

export default App;
