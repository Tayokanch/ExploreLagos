import React from "react";
import BookingCss from "./BookingNav.module.css";
import { useContext } from "react";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";

function BookingNav() {
  const { numOfBookings, loggedInUser } = useContext(formContext);
  const navigate = useNavigate();
  const userId = loggedInUser?.userId;

  const handleNavigate = () => {
    navigate(`/booking/${userId}`);
  };

  return (
    <>
      {
        <li className={BookingCss.bookings} onClick={handleNavigate}>
          My Bookings
          <div className={BookingCss.tickets}>
            <p>{numOfBookings && numOfBookings.length}</p>
          </div>
        </li>
      }
    </>
  );
}

export default BookingNav;
