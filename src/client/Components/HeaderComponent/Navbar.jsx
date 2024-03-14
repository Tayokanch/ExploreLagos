import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import Logo from "./Logo.jsx";
import { formContext } from "../../App.jsx";


function Navbar() {
  const navigate = useNavigate();
  const [ticketNumbers, setTicketNumbers] = useState(0);

  const { loggedInUser, setLoggedInUser, setSelectedLocation } =
    useContext(formContext);
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.clear();
    navigate("/");
    setSelectedLocation("");
  };

  useEffect(() => {
    setTicketNumbers(0);
  }, []);

  return (
    <div className={NavCSS.nav_Container}>
      <div className={NavCSS.logo}>
        <Logo />
      </div>
      <div className={NavCSS.navbar}>
        <li>History</li>
        <li>Contact</li>
        <li onClick={() => handleNavigation("/Team")}>Team</li>

        {loggedInUser ? (
          <>
            <li>{`Hi, ${loggedInUser?.firstName}!`}</li>
            <li className={NavCSS.bookings}>
              Bookings
              <div className={NavCSS.tickets}>
                <p>{ticketNumbers}</p>
              </div>
            </li>
            <li onClick={() => handleLogout()}>Log out</li>
          </>
        ) : (
          <li onClick={() => handleNavigation("/LoginOrSignUp")}>Sign up/in</li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
