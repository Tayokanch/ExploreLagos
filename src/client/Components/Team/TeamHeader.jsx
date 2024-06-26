import React, { useState, useEffect } from "react";
import Logo from "../HeaderComponent/Logo";
import { jwtDecode } from "jwt-decode";
import NavCss from "../HeaderComponent/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./TeamHeader.css";
import LoginAndLogout from "./LoginAndLogout";
import { Home } from "lucide-react";

function TeamHeader({ staffInfo, setStaffInfo }) {
  const navigate = useNavigate();
  return (
    <div className="dasboard_header dasboardHeader">
      <div className>
        <Home onClick={() => navigate("/")} className="HomeLogo" />
      </div>
      <LoginAndLogout />
    </div>
  );
}

export default TeamHeader;
