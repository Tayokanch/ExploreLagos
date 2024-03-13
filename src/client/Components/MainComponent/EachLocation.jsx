import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EachLocation.css";
import getImagePath from "./imagePath";

function EachLocation() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [sliderData, setSliderData] = useState();
  const location = useLocation();

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
  return (
    selectedLocation && (
      <section className="slider_container">
        <div>
          <div>
            <img src={`../${sliderData}`} height="300" width={500} />
          </div>
          <div>
            <h3>{selectedLocation?.name}</h3>
            <p>{selectedLocation?.about}</p>
            <p>
              {selectedLocation?.highlights.map((highlight, index) => (
                <li key={index}>{highlight.topic}</li>
              ))}
            </p>
          </div>
        </div>
        <div className="image_slider">
          {imageUrls.map((image, index) => (
            <div className="thumbnail" key={index}>
              <img
                src={`../${image}`}
                alt={`${selectedLocation.name} Image: ${index}`}
                height="400px"
                width="400px"
                onClick={() => handleClick(index)}
                className={sliderData === `../${image}` ? "clicked" : ""}
              />
            </div>
          ))}
        </div>
        <p>{selectedLocation.name}</p>
      </section>
    )
  );
}

export default EachLocation;
