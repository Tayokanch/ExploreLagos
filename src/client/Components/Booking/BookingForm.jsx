import React, { useState, useContext, useEffect } from "react";
import "./BookingForm.css";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "./NodeMailer.js";
import BookingDate from "./BookingDate.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const url = "https://explorelagos.onrender.com";

function BookingForm({ popUp, setPopUp }) {
  const navigate = useNavigate();
  const [sellingPrice, setSellingPrice] = useState(0);
  const [bookingFor, setBookingFor] = useState("");
  const [locationName, setLocationName] = useState("");
  const { locations, loggedInUser } = useContext(formContext);
  const [locationSelected, setLocationSelected] = useState(null);

  const bookingType = ["Adult", "Children", "Teenager"];
  const [booking, setBooking] = useState({
    user: { connect: { id: loggedInUser?.userId } },
    location: { connect: { id: null } },
    locationId: null,
    userId: loggedInUser?.userId,
    printName: "",
    bookingfor: "",
    locationName: "",
    price: null,
    visitingDate: "",
    referenceNo: "",
  });

  function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/bookings`, options);
      if (!response.ok) {
        console.error("HTTP error! Status:", response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
    } catch (err) {
      console.error("An error occurred:", err);
    }
    setBooking({
      printName: "",
      locationId: null,
      locationName: "",
      userId: loggedInUser?.userId,
      price: null,
      visitingDate: "",
      referenceNo: generateRandomString(10),
    });

    setSellingPrice(0);
    setLocationSelected(null);
    navigate("/");
  };

  const handleBooking = (e) => {
    const { value, name } = e.target;
    setBooking({
      ...booking,
      referenceNo: generateRandomString(10),
      [name]: value,
    });

  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    const selectedLocation = locations.find(
      (location) => Number(location.id) === Number(value)
    );
    setLocationSelected(selectedLocation);
    if (selectedLocation) {
      setLocationName(selectedLocation.name);

      setSellingPrice(selectedLocation?.price);
    }

    setBooking({
      ...booking,
      location: { connect: { id: Number(value) } },
      locationId: Number(value),
      locationName: selectedLocation ? selectedLocation.name : "",
    });
  };

  const handleBookingForChange = (personType) => {
    let newBookingFor = "";
    let newSellingPrice = 0;

    if (locationSelected) {
      switch (personType) {
        case "Adult":
          newSellingPrice = Number(locationSelected.price);
          newBookingFor = personType;
          break;
        case "Teenager":
          newSellingPrice = Number(locationSelected.price) - 5;
          newBookingFor = personType;
          break;
        case "Children":
          newSellingPrice = Number(locationSelected.price) - 8;
          newBookingFor = personType;
          break;
        default:
          break;
      }

      setSellingPrice(newSellingPrice);
      setBookingFor(newBookingFor);

      setBooking({
        ...booking,
        price: newSellingPrice,
        bookingfor: newBookingFor,
      });
    }
  };

  const cancelForm = () => {
    setPopUp(false);
  };

  return (
    <div
      className={`booking_container ${popUp ? "active_booking_container" : ""}`}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-8px",
          color: "red",
        }}
        className="cancel"
        onClick={() => cancelForm()}
      >
        <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: "2rem" }} />
      </div>
      <div className={`booking_box`}>
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
          <BookingDate booking={booking} setBooking={setBooking} />

          <div>
            {bookingType.map((type, index) => (
              <div key={index}>
                <p
                  className="clicked"
                  onClick={() => handleBookingForChange(type)}
                >
                  {type}
                </p>
              </div>
            ))}
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
            <p>{sellingPrice && `£${sellingPrice}.00`}</p>
          </div>
          <div>
            <button type="submit" id="close-popup">
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
