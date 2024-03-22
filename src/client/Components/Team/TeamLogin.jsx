import React from "react";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "./TeamLogin.css";
import "../Register&Login/Log.css";
const url = "http://localhost:3030";
function TeamLogin() {
  const [staffLoginInput, setStaffLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStaffLoginInput({
      ...staffLoginInput,
      [name]: value,
    });
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(staffLoginInput),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const staffLogin = await fetch(`${url}/staff/login`, options);
      if (!staffLogin.ok) {
        throw new Error("Failed to login");
      }
      const staffToken = await staffLogin.json();
      if (staffToken) {
        const decodedToken = jwtDecode(staffToken.token);
        console.log("this is the decoded staff info", decodedToken);
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
      <TeamHeader className="team_header" />
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
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={staffLoginInput.password}
              required
              onChange={handleChange}
              autoComplete="password"
            />
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
