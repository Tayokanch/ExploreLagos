import React, { useState, useContext } from "react";
import "./BookingForm.css";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "./NodeMailer.js";

const url = "http://localhost:3030";

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
    locationId: null,
    userId: loggedInUser?.userId,
    printName: "",
    bookingfor: "",
    locationName: "",
    price: null,
  });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this, is the new booking", booking);

    try {
      const response = await fetch(`${url}/bookings`, options);
      console.log("this is the response status", response.status);

      if (!response.ok) {
        console.error("HTTP error! Status:", response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
    } catch (err) {
      console.error("An error occurred:", err);
    }
     await sendEmail()
    setBooking({
      printName: "",
      locationId: "",
      locationName: "",
      userId: loggedInUser?.userId,
      price: null,
    });

    sendEmail()
    setSellingPrice(0);
    setLocationSelected(null);
    navigate("/");
  };

  const handleBooking = (e) => {
    const { value, name } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });

    console.log("this is bookings", booking);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    const selectedLocation = locations.find(
      (location) => Number(location.id) === Number(value)
    );
    setLocationSelected(selectedLocation);
    if (selectedLocation) {
      setLocationName(selectedLocation.name);
      console.log("this is the selected location", selectedLocation);

      setSellingPrice(selectedLocation?.price);
    }

    setBooking({
      ...booking,
      locationId: Number(value),
      locationName: selectedLocation ? selectedLocation.name : "",
      bookingfor: "",
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
      <p className="cancel" onClick={() => cancelForm()}>
        x
      </p>
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
