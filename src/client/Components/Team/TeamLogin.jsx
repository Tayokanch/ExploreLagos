import React, { useState, useEffect, useContext } from "react";
import TeamHeader from "./TeamHeader";
import { jwtDecode } from "jwt-decode";
import "./TeamLogin.css";
import "../Register&Login/Log.css";
import { formContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ExpectedVisitors from "./ExpectedVisitors";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3030";

function TeamLogin() {
  const [staffInfo, setStaffInfo] = useState();

  const { toggle, toggleEye } = useContext(formContext);

  const [staffLoginInput, setStaffLoginInput] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedStaffInfo = sessionStorage.getItem("staffInfo");
    if (storedStaffInfo) {
      setStaffInfo(JSON.parse(storedStaffInfo));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStaffLoginInput({
      ...staffLoginInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staffLoginInput),
    };

    e.preventDefault();

    try {
      const staffLogin = await fetch(`${url}/staff/login`, options);
      console.log(staffLoginInput);
      if (!staffLogin.ok) {
        throw new Error("Failed to login");
      }
      const staffToken = await staffLogin.json();
      if (staffToken) {
        const decodedToken = jwtDecode(staffToken.token);
        sessionStorage.setItem("staffInfo", JSON.stringify(decodedToken));
        setStaffInfo(decodedToken);
        const locationId = decodedToken.locationId;
        if (locationId) {
          navigate(`/staff/${locationId}`);
        }
      }
    } catch (err) {
      console.error(err);
    }

    setStaffLoginInput({
      username: "",
      password: "",
    });
  };

  return (
    <section className="team_login">
      <TeamHeader className="team_header" staffInfo={staffInfo} />
      <div className="team_form">
        <form className="form" onSubmit={handleSubmit}>
          <p className="heading">Login as a Member</p>
          <h3>Login with</h3>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={staffLoginInput.username}
              required
              onChange={handleChange}
              autoComplete="username"
            />
          </div>
          <div className="password_container">
            <label>Password</label>
            <div className="password_box">
              <input
                type={toggleEye ? "password" : "text"}
                name="password"
                value={staffLoginInput.password}
                required
                onChange={handleChange}
                autoComplete="password"
              />
              <FontAwesomeIcon
                icon={toggleEye ? faEye : faEyeSlash}
                onClick={toggle}
                className="password_eye"
              />
            </div>
          </div>
          <div>
            <p className="forget_password">Forget Password?</p>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TeamLogin;
