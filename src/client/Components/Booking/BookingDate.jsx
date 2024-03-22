import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./BookingDate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

function BookingDate({ booking, setBooking }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelect = (date) => {
    setSelectedDate(date);
    console.log("this is the selected date", date);

    setBooking({
      ...booking,
      visitingDate: date ? date : "",
    });
  };

  return (
    <div>
      <label className="calender-icon-container">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <DatePicker
          placeholderText={"Visiting Date"}
          selected={selectedDate}
          onChange={(date) => handleSelect(date)}
        />
      </label>
    </div>
  );
}

export default BookingDate;
