import { React, useEffect, useState } from "react";
import BookingCss from "./BookingNav.module.css";
import { useContext } from "react";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { isAfter } from "date-fns";

function BookingNav() {
  const { numOfBookings, loggedInUser } = useContext(formContext);
  const navigate = useNavigate();
  const userId = loggedInUser?.userId;
  
  const [validTicket, setValidTicket] = useState(0);

  useEffect(() => {
    const countsValidTickets = () => {
      let count = 0; 
      numOfBookings?.forEach(ticket => {
        const valid = isAfter(new Date(ticket.visitingDate), new Date());
        if (valid) {
          count++; 
        }
      });
      setValidTicket(count); 
    };
    countsValidTickets();
  }, [numOfBookings]);

  const handleNavigate = () => {
    navigate(`/booking/${userId}`);
  };

  return (
    <>
      <li className={BookingCss.bookings} onClick={handleNavigate}>
        My Bookings
        <div className={BookingCss.ticket}>
          <p>{validTicket}</p> 
        </div>
      </li>
    </>
  );
}

export default BookingNav;
