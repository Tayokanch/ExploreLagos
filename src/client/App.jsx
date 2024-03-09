import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/MainComponent/Main";
import Header from "./Components/HeaderComponent/Header";
import Register from "./Components/Register";
import Body from "./Components/Body/Body";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
