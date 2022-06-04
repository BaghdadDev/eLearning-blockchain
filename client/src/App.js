import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import {Login} from "./features/authentication/login/Login";
import {SignUp} from "./features/authentication/signUp/SignUp";
import Header from "./features/header/Header";
import {Routes} from "react-router";
import Courses from "./features/homeStudent/Courses/Courses";
import Profile from "./features/homeStudent/Profile/Profile";
import {
    URL_ADMIN_ADD_COURSE,
    URL_CERTIFICATE,
    URL_EMPLOYER,
    URL_QCM,
    URL_STUDENT_COURSES,
    URL_STUDENT_COURSES_COURSE,
    URL_STUDENT_PROFILE
} from "./config";
import {AddCourse} from "./features/setCourse/addCourse/AddCourse";
import Course from "./features/homeStudent/Course/Course";
import Qcm from "./features/homeStudent/Qcm/Qcm";
import HomeEmployer from "./features/homeEmployer/HomeEmployer";
import Certificate from "./features/homeStudent/certificate/Certificate";


function App() {
  return (
      <>
          <Header />
          <div className={"app"}>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path={URL_STUDENT_COURSES} element={<Courses />} />
                  <Route path={URL_STUDENT_PROFILE} element={<Profile />} />
                  <Route path={URL_ADMIN_ADD_COURSE} element={<AddCourse />} />
                  <Route path={URL_STUDENT_COURSES_COURSE + "/:idCourse"} element={<Course />} />
                  <Route path={URL_QCM} element={<Qcm />} />
                  <Route path={URL_EMPLOYER} element={<HomeEmployer />} />
                  <Route path={URL_CERTIFICATE + "/:idCourse"} element={<Certificate />} />
              </Routes>
          </div>
      </>
  );
}

export default App;