import React from "react";
import Logo from "../HeaderComponent/Logo";
import NavCss from "../HeaderComponent/Navbar.module.css";
import { useNavigate } from "react-router-dom";

function TeamHeader() {
  const navigate = useNavigate();
  const navigateTeamLogin = (path) => {
    navigate(path);
  };
  return (
    <div className="staff_header">
      <div className={NavCss.logo}>
        <Logo className />
      </div>
      <p onClick={() => navigateTeamLogin("/TeamLogin/*")}>Staff Login in</p>
    </div>
  );
}

export default TeamHeader;
