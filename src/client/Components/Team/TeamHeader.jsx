import React from "react";
import Logo from "../HeaderComponent/Logo";
import NavCss from "../HeaderComponent/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import ExpectedVisitors from "./ExpectedVisitors";
function TeamHeader({ staffInfo }) {
  const navigate = useNavigate();
  const navigateTeamLogin = (path) => {
    navigate(path);
  };
  return (
    <div className="staff_header">
      <div className={NavCss.logo}>
        <Logo className />
      </div>
      <div className>
        <p>My Visitors</p>
      </div>
      {staffInfo ? (
        <LogOut />
      ) : (
        <p onClick={() => navigateTeamLogin("/TeamLogin/*")}>Staff Login in</p>
      )}
    </div>
  );
}

export default TeamHeader;
