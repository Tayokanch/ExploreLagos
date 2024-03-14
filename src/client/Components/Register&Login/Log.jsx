import React, { useContext, useEffect, useState } from "react";
import "./Log.css";
import { formContext } from "../../App";
import { initialForm } from "../../App";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3030";

function Log() {
  const {
    formInputs,
    setFormInputs,
    loggedInUser,
    setLoggedInUser,
    selectedLocation,
  } = useContext(formContext);
  const navigate = useNavigate();

  const [loginResponse, setLoginResponse] = useState("");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(formInputs),
  };

  const touristLogin = async (e) => {
    e.preventDefault();

    try {
      const verifyLogin = await fetch(`${url}/tourist/login`, options);
      if (!verifyLogin.ok) {
        setLoginResponse("Invalid email or password");
        throw new Error("Failed to login");
      }
      setLoginResponse("");
      const loginToken = await verifyLogin.json();
      if (loginToken) {
        const decodeToken = jwtDecode(loginToken.data);

        setLoggedInUser(decodeToken);

        localStorage.setItem("decoded", JSON.stringify(decodeToken));

        console.log("here is the decoded token", decodeToken);

        localStorage.setItem("token", JSON.stringify(loginToken.data));

        if (loggedInUser && selectedLocation) {
          navigate(`location/${selectedLocation?.name}`);
          console.log("this is the logged in user", loggedInUser);
          console.log("this is the selected Location", selectedLocation);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
    }

    setFormInputs(initialForm);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={touristLogin}>
      <p className="heading">Welcome to Explore Lagos</p>
      <h3>Login with</h3>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formInputs.email}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formInputs.password}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="forget_password">Forget Password?</p>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      {loginResponse !== "" && (
        <p className="login_response">{loginResponse}</p>
      )}
    </form>
  );
}

export default Log;
