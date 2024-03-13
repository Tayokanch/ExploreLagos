import React, { useState, useEffect, useContext } from "react";
import "./Booking.css";
import { formContext } from "../../App";

function Book() {
  const [price, setPrice] = useState(0);
  const [bookingFor, setBookingFor] = useState("");

  const { locations, loggedInUser, setLoggedInUser } = useContext(formContext);

  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const userId = user.userId;

  const [booking, setBooking] = useState({
    printName: "",
    locationId: "",
    userId: userId,
    bookingfor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking({
      printName: "",
      locationId: "",
      userId: userId,
    });
    console.log(booking);
  };

  const handleBooking = (e) => {
    const { value, name } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setBooking({
      ...booking,
      locationId: value,
      bookingfor: "",
    });
  };

  const handleBookingForChange = (bookingType) => {
    setBooking({
      ...booking,
      bookingfor: bookingType,
    });
  };

  return (
    <div className="booking_container">
      <form className="popup" id="popup-box" onSubmit={handleSubmit}>
        <h2>Your Destination</h2>
        <div>
          <select value={booking.locationId} onChange={handleSelectChange}>
            <option value="">Select Destination</option>
            {locations &&
              locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <p
            className="clicked"
            onClick={() => handleBookingForChange("Adult")}
          >
            Adult
          </p>
          <p onClick={() => handleBookingForChange("Teenager")}>Teenager</p>
          <p onClick={() => handleBookingForChange("Children")}>Children</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Print Name"
            name="printName"
            value={booking.printName}
            onChange={handleBooking}
          />
        </div>
        <div>
          <p>{`£${price}.00`}</p>
        </div>
        <div>
          <button type="submit" id="close-popup">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Book;
