import React from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../App";


function Login({ staffInfo }) {
  const navigate = useNavigate();

  const navigateTeamLogin = () => {
    staffInfo
      ? navigate(`/staff/${staffInfo?.locationId}`)
      : navigate("/Team/");
  };

  return (
    <div>
      <p onClick={() => navigateTeamLogin()} className="staff_login">
        {" "}
        Login{" "}
      </p>
    </div>
  );
}

export default Login;
