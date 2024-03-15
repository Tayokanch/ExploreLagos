import React from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import LogOutCss from "./LogOut.module.css";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const { setLoggedInUser, setSelectedLocation } = useContext(formContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.clear();
    navigate("/");
    setSelectedLocation("");
  };
  return (
    <>
      <li className={LogOutCss.li} onClick={() => handleLogout()}>
        Log out
      </li>
    </>
  );
}

export default LogOut;
