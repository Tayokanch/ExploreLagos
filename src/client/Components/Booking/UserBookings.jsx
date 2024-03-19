import React from "react";
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
          <div key={booking.id}>
            <p>{booking.printName}</p>
            <img
              src={`../${getImagePath(booking.locationId)[0]}`}
              alt={booking.locationId}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserBookings;
