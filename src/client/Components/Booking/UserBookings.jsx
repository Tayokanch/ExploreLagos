import React from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import LogOut from "../HeaderComponent/LogOut";
import BookingNav from "../HeaderComponent/BookingNav";
import UserBookingCss from "./UserBooking.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function UserBookings() {
  const { loggedInUser } = useContext(formContext);
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const userId = user.userId;
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
        <LogOut />
      </div>
      <div className={UserBookingCss.main}>body</div>
    </section>
  );
}

export default UserBookings;
