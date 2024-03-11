import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/MainComponent/Main";
import Header from "./Components/HeaderComponent/Header";
import Register from "./Components/Register&Login/Register.jsx";
import Body from "./Components/Body/Body";
import Staff from "./Components/Team/Team.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/LoginOrSignUp/*" element={<Register />}></Route>
        <Route path="/Staff/*" element={<Staff />}></Route>
      </Routes>
    </>
  );
}

export default App;
