import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import Logo from "./Logo.jsx";
import { formContext } from "../../App.jsx";
import prisma from "../../../server/utils/prisma.js";
import LogOut from "./LogOut.jsx";
import BookingNav from "./BookingNav.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const url = "http://localhost:3030";

function Navbar() {
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const navigate = useNavigate();

  const {
    loggedInUser,
    setLoggedInUser,
    setSelectedLocation,
    bookings,
    setBookings,
    setNumOfBookings,
    numOfBookings,
  } = useContext(formContext);

  const foundUserId = loggedInUser ? loggedInUser.userId : null;
  const getBookings = async () => {
    try {
      const userBooking = await fetch(`${url}/bookings/${foundUserId}`);
      if (!userBooking.ok) {
        console.error(`HTTP error! Status: ${userBooking.status}`);
        return;
      }
      const { Bookings } = await userBooking.json();
      if (Bookings) {
        setNumOfBookings(Bookings);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (foundUserId) {
      getBookings();
    }
  }, [foundUserId]);

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.clear();
    navigate("/");
    setSelectedLocation("");
  };
  const [NavBar, setNavBar] = useState(true);
  const showNavBar = () => {
    setNavBar(!NavBar);
  };
  return (
    <div className={NavCSS.nav_Container}>
      <div className={NavCSS.logo}>
        <Logo />
      </div>
      <div
        className={`${NavCSS.navbar} ${NavBar ? NavCSS.responsiveNav : ""}`}
      >
        <li>Contact</li>
        <li onClick={() => handleNavigation("/Team")}>Team</li>

        {loggedInUser ? (
          <>
            <li>{`Hi, ${loggedInUser?.firstName}!`}</li>
            <BookingNav />
            <LogOut />
          </>
        ) : (
          <li onClick={() => handleNavigation("/LoginOrSignUp")}>Sign up/in</li>
        )}

        <button>
          <FaTimes onClick={showNavBar}  className={NavCSS.close}/>
        </button>
      </div>

      <button>
        <FaBars onClick={showNavBar} className={NavCSS.open} />
      </button>
    </div>
  );
}

export default Navbar;
