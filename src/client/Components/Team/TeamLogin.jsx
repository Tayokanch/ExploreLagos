import React from "react";
import TeamHeader from "./TeamHeader";
import "./TeamLogin.css";
import '../Register&Login/Log.css'
function TeamLogin() {
  return (
    <section className="team_login">
      <TeamHeader className="team_header" />
      <div className="team_form">
        <form className="form">
          <p className="heading">Login as a Member</p>
          <h3>Login with</h3>
          <div>
            <label>Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <div>
            <p className="forget_password">Forget Password?</p>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TeamLogin;
