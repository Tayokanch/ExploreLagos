import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EachLocation.css";
import getImagePath from "./imagePath";
import Book from "../Booking/Book";
import { useContext } from "react";
import { formContext } from "../../App";

function EachLocation() {
  const { selectedLocation, setSelectedLocation } = useContext(formContext);
  const [imageUrls, setImageUrls] = useState([]);
  const [sliderData, setSliderData] = useState();
  const location = useLocation();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    if (location.state && location.state.result) {
      setSelectedLocation(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    if (selectedLocation) {
      setImageUrls(getImagePath(selectedLocation.id));
      console.log(selectedLocation);
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
    console.log("this is the slider", slider);
  };

  const displayBooking = () => {
    setPopUp(true);
    console.log("popUp is", popUp);
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
        <div className="image_slider">
          {imageUrls.map((image, index) => (
            <div
              className={`thumbnail ${
                sliderData === `../${image}` ? "clicked" : ""
              }`}
              key={index}
            >
              <img
                src={`../${image}`}
                alt={`${selectedLocation.name} Image: ${index}`}
                height="400px"
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
        <Book popUp={popUp} />
      </section>
    )
  );
}

export default EachLocation;
