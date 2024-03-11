import React, { useState } from "react";
import Navbar from "../HeaderComponent/Navbar";
import bg1 from "../../../../assets/background/lagosnight.jpeg";
import RegisterCss from "./Register.module.css";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "../Register&Login/Reg.jsx";
import LogComponent from "../Register&Login/Log.jsx";

function Register() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

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
            <li
              onClick={toggleLogin}
              className={`${showLogin ? RegisterCss.active : ""}`}
            >
              Login
            </li>
            <li
              onClick={toggleLogin}
              className={`${!showLogin ?  RegisterCss.active : ""}`}
            >
              Register
            </li>
          </ul>
          {showLogin ? <LogComponent /> : <RegisterComponent />}
        </div>
      </div>
    </section>
  );
}

export default Register;
