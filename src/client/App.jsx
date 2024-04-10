import { useState, useEffect } from "react";
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
import UserBookings from "./Components/Booking/UserBookings.jsx";
import ExpectedVisitors from "./Components/Team/Dashboard.jsx";
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
  const [locations, setLocations] = useState();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bookings, setBookings] = useState(0);
  const [numOfBookings, setNumOfBookings] = useState(0);
  const [toggleEye, setToggleEye] = useState(true);
  const [staffInfo, setStaffInfo] = useState(null);

  const toggle = () => {
    setToggleEye(!toggleEye);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setLoggedInUser(decodedToken);
    }
  }, []);

  return (
    <formContext.Provider
      value={{
        formInputs,
        setFormInputs,
        loggedInUser,
        setLoggedInUser,
        locations,
        setLocations,
        selectedLocation,
        setSelectedLocation,
        bookings,
        setBookings,
        numOfBookings,
        setNumOfBookings,
        toggleEye,
        toggle,
        staffInfo,
        setStaffInfo,
      }}
    >
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/LoginOrSignUp/*" element={<Register />}></Route>
        <Route path="/Team/*" element={<Staff />}></Route>
        <Route path="/TeamLogin/*" element={<TeamLogin />}></Route>
        <Route path="/location/:name" element={<EachLocation />} />
        <Route path="booking/:userId" element={<UserBookings />} />
        <Route path="/staff/:locationId" element={<ExpectedVisitors />} />
      </Routes>
    </formContext.Provider>
  );
}

export { App, formContext };
