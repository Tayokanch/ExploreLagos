import React from "react";
import BookingCss from "./BookingNav.module.css";
import { useContext } from "react";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";

function BookingNav() {
  const { bookings } = useContext(formContext);
  const navigate = useNavigate();
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const userId = user.userId;

  const handleNavigate = () => {
    navigate(`/booking/${userId}`);
  };

  return (
    <>
      {
        <li className={BookingCss.bookings} onClick={handleNavigate}>
          Bookings
          <div className={BookingCss.tickets}>
            <p>{bookings}</p>
          </div>
        </li>
      }
    </>
  );
}

export default BookingNav;
