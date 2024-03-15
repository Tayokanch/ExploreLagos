import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import Logo from "./Logo.jsx";
import { formContext } from "../../App.jsx";
import prisma from "../../../server/utils/prisma.js";
import LogOut from "./LogOut.jsx";
import BookingNav from "./BookingNav.jsx";

const url = "http://localhost:3030";

function Navbar() {
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const foundUserId = user && user.userId ? user.userId : null;

  console.log("this is foundUSer", foundUserId);

  const getBookings = async () => {
    try {
      const userBooking = await fetch(`${url}/bookings/${foundUserId}`);
      if (!userBooking.ok) {
        console.error(`HTTP error! Status: ${userBooking.status}`);
        return; // Exit the function if the response is not OK
      }
      const bookings = await userBooking.json();
      if (bookings) {
        console.log("Here are the user bookings", bookings);
        setBookings(bookings.Bookings.length);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const navigate = useNavigate();

  const {
    loggedInUser,
    setLoggedInUser,
    setSelectedLocation,
    bookings,
    setBookings,
  } = useContext(formContext);

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
            <BookingNav />
            <LogOut />
          </>
        ) : (
          <li onClick={() => handleNavigation("/LoginOrSignUp")}>Sign up/in</li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
