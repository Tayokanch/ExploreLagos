import React from "react";

function Reg() {
  return (
    <form className="form">
      <p className="heading">Welcome to Explore Lagos</p>
      <h3>Sign Up</h3>
      <div>
        <label>Firstname</label>
        <input type="text" name="text" id="" required />
      </div>
      <div>
        <label>Lastname</label>
        <input type="text" name="lastname" required />
      </div>
      <div>
        <label>Email</label>ç
        <input type="email" name="lastname" required />
      </div>
      <div>
        <button>Register</button>
      </div>
    </form>
  );
}

export default Reg;
