import React, { useState } from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import { initialForm } from "../../App";
const url = "https://explorelagos.onrender.com";

function Reg() {
  const { formInputs, setFormInputs } = useContext(formContext);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formInputs),
  };

  const [registerResponse, setRegisterResponse] = useState(""); // For successful registration message
  const [error, setError] = useState(""); // For error message

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const TouristReg = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/user/register`, options);
      const data = await response.json();
      setRegisterResponse(
        `Successfully registered: ${data.formInputs.firstname}`
      );
    } catch (err) {
      setError(err.error);
      console.error("this is the error", err);
    }

    setFormInputs(initialForm);
  };

  return (
    <form className="form" onSubmit={TouristReg}>
      <p className="heading">Welcome to Explore Lagos</p>
      <h3>Sign Up</h3>
      <div>
        <label>Firstname</label>
        <input
          type="text"
          name="firstname"
          value={formInputs.firstname}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Lastname</label>
        <input
          type="text"
          name="lastname"
          value={formInputs.lastname}
          required
          onChange={handleChange}
        />
      </div>
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
        <button>Register</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {registerResponse && <p>{registerResponse}</p>}
    </form>
  );
}

export default Reg;
