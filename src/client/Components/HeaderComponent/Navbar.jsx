import React from "react";
import { useNavigate } from "react-router-dom";
import NavCSS from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className={NavCSS.nav_Container}>
      <div className={NavCSS.logo}>
        <h3>ExploreLagos</h3>
      </div>
      <div className={NavCSS.navbar}>
        <li>History</li>
        <li>Contact</li>
        <li onClick={() => handleNavigation("/LoginOrSignUp")}>Sign up/in</li>
        <li>EN</li>
      </div>
    </div>
  );
}

export default Navbar;
