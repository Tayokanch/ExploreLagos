import React from "react";
import { useState, useEffect } from "react";
import NavCss from "../HeaderComponent/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./TeamHeader.css";
import LoginAndLogout from "./LoginAndLogout";
import { Home } from "lucide-react";

function DashboardHead({ staffInfo, setStaffInfo }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("staffInfo");
    setStaffInfo(null);
    navigate("/TeamLogin/");
  };

  return (
    <div className="dasboard_header dasboardHeader">
      <div className>
        <Home onClick={() => navigate("/")} className="HomeLogo" />
      </div>
      {staffInfo && <LogOut onClick={() => handleLogOut()} />}
    </div>
  );
}

export default DashboardHead;
