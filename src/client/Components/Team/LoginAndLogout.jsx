import React, { useState } from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../App";
import { LogOut } from "lucide-react";

function LoginAndLogout({ staffInfo, setStaffInfo }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/TeamLogin/*");
  };

  const navigateTeamLogin = () => {
    staffInfo
      ? navigate(`/staff/${staffInfo?.locationId}`)
      : navigate("/Team/");
  };

  return (
    <div>
      {staffInfo ? (
        <p onClick={() => navigateTeamLogin()} className="staff_login">
          {" "}
          Login{" "}
        </p>
      ) : (
        <LogOut onClick={() => handleLogout()} />
      )}
    </div>
  );
}

export default LoginAndLogout;
