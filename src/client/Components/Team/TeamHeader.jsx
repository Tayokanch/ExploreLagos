import React, { useState, useEffect } from "react";
import Logo from "../HeaderComponent/Logo";
import { jwtDecode } from "jwt-decode";
import NavCss from "../HeaderComponent/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./TeamHeader.css";
import LoginAndLogout from "./LoginAndLogout";

function TeamHeader({ staffInfo, setStaffInfo }) {
  const navigate = useNavigate();


  useEffect(() => {
    console.log("this is staff infomation in Team header", staffInfo);
  }, [staffInfo]);

  return (
    <div className="dasboard_header">
      <div className>{staffInfo ? <h2> Visitors</h2> : <h2> Our Team</h2>}</div>
      <LoginAndLogout />
    </div>
  );
}

export default TeamHeader;
