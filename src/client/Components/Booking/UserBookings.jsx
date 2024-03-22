import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import LogOut from "../HeaderComponent/LogOut";
import BookingNav from "../HeaderComponent/BookingNav";
import UserBookingCss from "./UserBooking.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import getImagePath from "../MainComponent/imagePath.js";

function UserBookings() {
  const { numOfBookings, setNumOfbookings } = useContext(formContext);
  const navigate = useNavigate();

  const checkStatus = (status) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    //console.log("current date", currentDate);
    const visitingDate = new Date(status);
    visitingDate.setHours(0, 0, 0, 0);
    //console.log("visiting date", visitingDate);

    if (visitingDate <= currentDate) {
      return "Valid";
    } else {
      return "Expired";
    }
  };

  const formDate = (bookings) => {
    const date = new Date(bookings.visitingDate);
    const formattedDate = date.toLocaleDateString("en-UK", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };


  return (
    <section className={UserBookingCss.container}>
      <div className={UserBookingCss.header}>
        <div className={UserBookingCss.home} onClick={() => navigate("/")}>
          {" "}
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className={UserBookingCss.user_initial}>
          <p>TY</p>
        </div>
        <BookingNav />
        <LogOut />{" "}
      </div>
      <div className={UserBookingCss.main}>
        {numOfBookings?.map((booking) => (
          <div className={UserBookingCss.tickets}>
            {
              <img
                src={`../${getImagePath(booking.locationId)[0]}`}
                alt={booking.locationId}
              />
            }
            <div>
              <h2>{booking.locationName}</h2>
              <div className={UserBookingCss.ticket_circle}>
                <p>Explore Ticket</p>
                <p>{formDate(booking)}</p>
              </div>
              <p>{booking.printName}</p>

              <p>Status: {checkStatus(new Date(booking.visitingDate))}</p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserBookings;
