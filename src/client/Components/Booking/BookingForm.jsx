import React, { useState, useContext } from "react";
import "./BookingForm.css";
import { formContext } from "../../App";
const url = "http://localhost:3030";

function BookingForm({ popUp,setPopUp,  }) {
  const [price, setPrice] = useState(0);
  const [bookingFor, setBookingFor] = useState("");
  const [person, setPerson] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [teenageDiscount, setTeenageDiscount] = useState(true);
  const [childrenDiscount, setChildrenDiscount] = useState(true);
  const { locations, loggedInUser } = useContext(formContext);
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const UserId = user.userId;
  let foundLocation;

  const [booking, setBooking] = useState({
    user: { connect: { id: UserId } },
    locationId: null,
    userId: UserId,
    printName: "",
    bookingfor: "",
    price: null,
  });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/bookings`, options);
      console.log("this is the response status", response.status);

      if (!response.ok) {
        console.error("HTTP error! Status:", response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
    } catch (err) {
      setError(err.message);
      console.error("An error occurred:", err);
    }

    // Reset form fields and state after handling the response
    setBooking({
      printName: "",
      locationId: "",
      userId: UserId,
      price: null,
    });

    setPrice(0);
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
      locationId: Number(value),
      bookingfor: "",
    });

    if (value) {
      foundLocation = locations?.find(
        (location) => Number(location.id) === Number(value)
      );
      console.log(foundLocation);

      setPrice(foundLocation?.price);
      setOriginalPrice(foundLocation?.price);
    }
    setChildrenDiscount(true);
    setTeenageDiscount(true);
  };

  const handleBookingForChange = (personType) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      bookingfor: personType,
      price: price,
    }));
    setPerson(personType);
    if (personType === "Adult") {
      setPrice(originalPrice);
    }
  };

  if (person === "Teenager" && teenageDiscount) {
    setPrice((prevPrice) => prevPrice - 5);
    setTeenageDiscount(false);
  }
  if (person === "Children" && childrenDiscount) {
    setPrice((prevPrice) => prevPrice - 8);
    setChildrenDiscount(false);
  }

  const cancelForm = () => {
    setPopUp(false);
  };
  return (
    <div className={`booking_container ${popUp ? "active_booking_container" : ""}`}>
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
            <p>{price && `£${price}.00`}</p>
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
