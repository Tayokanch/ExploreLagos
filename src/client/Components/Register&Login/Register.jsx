import React from "react";
import Navbar from "../HeaderComponent/Navbar";
import bg1 from "../../../../assets/background/lagosnight.jpeg";
import RegisterCss from "./Register.module.css";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "../Register&Login/Reg.jsx";
import LogComponent from "../Register&Login/Log.jsx";

function Register() {
  return (
    <section
      className={RegisterCss.container}
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <Navbar />
      <div className={RegisterCss.register_box}>
        <div>"Enjoy LasGidi to the fullest"</div>
        <div>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
          <LogComponent />


          {/*           <Routes>
            <Route path="/Login" element={<LogComponent />}></Route>
            <Route path="/Register" element={<RegisterComponent />}></Route>
          </Routes> */}
        </div>
      </div>
    </section>
  );
}

export default Register;
