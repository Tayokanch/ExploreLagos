import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import Logo from "./Logo.jsx";
import { formContext } from "../../App.jsx";

function Navbar() {
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser, setSelectedLocation } =
    useContext(formContext);
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("token");
    navigate("/");
    setSelectedLocation("");
  };
  return (
    <div className={NavCSS.nav_Container}>
      <div className={NavCSS.logo}>
        <Logo />
      </div>
      <div className={NavCSS.navbar}>
        <li>History</li>
        <li>Contact</li>
        <li onClick={() => handleNavigation("/Team")}>Team</li>

        {loggedInUser ? (
          <>
            <li>{`Hi, ${loggedInUser?.firstName}!`}</li>
            <li onClick={() => handleLogout()}>Log out</li>
          </>
        ) : (
          <li onClick={() => handleNavigation("/LoginOrSignUp")}>Sign up/in</li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
