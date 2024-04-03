import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EachLocation.css";
import getImagePath from "./imagePath";
import Book from "../Booking/BookingForm";
import { useContext } from "react";
import { formContext } from "../../App";

function EachLocation() {
  const { selectedLocation, setSelectedLocation } = useContext(formContext);
  const [imageUrls, setImageUrls] = useState([]);
  const [sliderData, setSliderData] = useState();
  const location = useLocation();
  const [popUp, setPopUp] = useState(false);
  const [cancelBookingForm, setCancelBookingForm] = useState(false);

  useEffect(() => {
    if (location.state && location.state.result) {
      setSelectedLocation(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    if (selectedLocation) {
      setImageUrls(getImagePath(selectedLocation.id));
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setSliderData(`../${imageUrls[0]}`);
    }
  }, [imageUrls]);

  const handleClick = (index) => {
    const slider = selectedLocation ? `../${imageUrls[index]}` : null;
    setSliderData(slider);
  };

  const displayBooking = () => {
    setPopUp(true);
  };
  return (
    selectedLocation && (
      <section className="slider_container">
        <div>
          <h1>{`Welcome to ${selectedLocation?.name}`}</h1>
          <div className="slider_header">
            <div>
              <img src={`../${sliderData}`} />
            </div>
            <div>
              <p>{selectedLocation?.about}</p>
              <h2>Activies</h2>
              {selectedLocation?.highlights.map((highlight, index) => (
                <li key={index}>{highlight.topic}</li>
              ))}
              <div>
                <p onClick={displayBooking}>Book a Ticket to Visit</p>
              </div>
            </div>
          </div>
        </div>
        <Book
          popUp={popUp}
          setPopUp={setPopUp}
          cancelBookingForm={cancelBookingForm}
          setCancelBookingForm={setCancelBookingForm}
        />
      </section>
    )
  );
}

export default EachLocation;
