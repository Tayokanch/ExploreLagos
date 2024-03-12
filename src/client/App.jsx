import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/MainComponent/Main";
import Header from "./Components/HeaderComponent/Header";
import Register from "./Components/Register&Login/Register.jsx";
import Body from "./Components/Body/Body";
import Staff from "./Components/Team/Team.jsx";
import TeamLogin from "./Components/Team/TeamLogin.jsx";
import EachLocation from "./Components/MainComponent/EachLocation.jsx";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";
import "./App.css";

export const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const formContext = createContext();
function App() {
  const [formInputs, setFormInputs] = useState(initialForm);

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken);
    }
  }, []);

  return (
    <formContext.Provider
      value={{
        formInputs,
        setFormInputs,
        userName,
        setUserName,
      }}
    >
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/LoginOrSignUp/*" element={<Register />}></Route>
        <Route path="/Team/*" element={<Staff />}></Route>
        <Route path="/TeamLogin/*" element={<TeamLogin />}></Route>
        <Route path="/location/:name" element={<EachLocation />} />
      </Routes>
    </formContext.Provider>
  );
}

export { App, formContext };
