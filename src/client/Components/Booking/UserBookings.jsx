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
import { isAfter } from "date-fns";

function UserBookings() {
  const { numOfBookings, setNumOfbookings, validTickets, setValidTickets } =
    useContext(formContext);
  const navigate = useNavigate();

  const checkStatus = (status) => {
    let tickets = 0;
    const result = isAfter(new Date(status), new Date());
    if (result) {
      tickets += 1;
      setValidTickets(tickets);
    }
    if (result) {
      return "VALID";
    } else {
      return "EXPIRED";
    }
  };

  const formDate = (bookings) => {
    const date = new Date(bookings.visitingDate);
    const formattedDate = date.toLocaleDateString("en-UK");

    return formattedDate;
  };

  return (
    <section className={UserBookingCss.container}>
      <div className={UserBookingCss.header}>
        <div className={UserBookingCss.home} onClick={() => navigate("/")}>
          {" "}
          <FontAwesomeIcon icon={faHome} />
        </div>
        <BookingNav />
        <LogOut />{" "}
      </div>
      {numOfBookings?.length === 0 ? (
        <div className={UserBookingCss.no_tickets}>
          <div>
            <span>You have Zero Bookings.</span>
            <p>Start exploring our locations by making your booking today!</p>
          </div>
        </div>
      ) : (
        <div className={UserBookingCss.main}>
          {(numOfBookings || [])
            .slice()
            .reverse()
            .map((booking) => (
              <div className={UserBookingCss.tickets} key={booking.id}>
                {
                  <img
                    src={`../${getImagePath(booking.locationId)[0]}`}
                    alt={booking.locationId}
                  />
                }
                <div>
                  <h2>{booking.locationName}</h2>
                  <div className={UserBookingCss.ticket_circle_container}>
                    <div className={UserBookingCss.ticket_circle}>
                      <p> Ticket</p>
                      <p>{formDate(booking)}</p>
                      <p>{"Open from 10:00 am"}</p>
                    </div>
                    <div className={UserBookingCss.valid_box}>
                      <p>
                        <span>NAME:</span>
                        {booking.printName.toUpperCase()}
                      </p>
                      <p>
                        <span>STATUS:</span>
                        {checkStatus(new Date(booking.visitingDate))}
                      </p>
                      <p className={UserBookingCss.reference}>
                        {" "}
                        REF: {booking.referenceNo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}

export default UserBookings;
