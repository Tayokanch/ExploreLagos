import React, { useContext, useEffect, useState } from "react";
import "./Log.css";
import { formContext } from "../../App";
import { initialForm } from "../../App";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

const url = "https://explorelagos.onrender.com";

function Log() {
  const {
    formInputs,
    setFormInputs,
    loggedInUser,
    setLoggedInUser,
    selectedLocation,
    toggle,
    toggleEye,
  } = useContext(formContext);
  const navigate = useNavigate();

  const [loginResponse, setLoginResponse] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true); 
  
    try {
      const verifyLogin = await fetch(`${url}/user/login`, options);
      if (!verifyLogin.ok) {
        setLoginResponse("Invalid email or password");
        throw new Error("Failed to login");
      }
      setLoginResponse("");
      const loginToken = await verifyLogin.json();
      if (loginToken) {
        const decodeToken = jwtDecode(loginToken.data);
        setLoggedInUser(decodeToken);
  
        localStorage.setItem("token", JSON.stringify(loginToken.data));
        localStorage.setItem("decoded", JSON.stringify(decodeToken));
  
        if (loggedInUser && selectedLocation) {
          navigate(`location/${selectedLocation?.name}`);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); 
      setFormInputs(initialForm); 
    }
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
        <div className="input_container">
          <input
            type={toggleEye ? "password" : "text"}
            name="password"
            value={formInputs.password}
            required
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={toggleEye ? faEye : faEyeSlash}
            className="password_eye"
            onClick={toggle}
          />
        </div>
      </div>
      <div>
        <p className="forget_password">Forget Password?</p>
      </div>
      {loading ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <button type="submit">Login</button>
        </div>
      )}
    </form>
  );
}

export default Log;
