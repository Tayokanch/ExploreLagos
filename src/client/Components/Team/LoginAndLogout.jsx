import React, { useState } from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../App";
import { LogOut } from "lucide-react";

function LoginAndLogout({ staffInfo, setStaffInfo }) {
  const navigate = useNavigate();

  const navigateTeamLogin = () => {
    navigate("/TeamLogin/*");
  };

  return (
    <div>
      <p onClick={() => navigateTeamLogin()} className="staff_login">
        Login
      </p>
    </div>
  );
}

export default LoginAndLogout;
