import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Main from "./Components/MainComponent/Main";
import Header from "./Components/HeaderComponent/Header";
import "./App.css";

function App() {
  return (
    <>
        <Header />
        <Main />
    </>
  );
}

export default App;
