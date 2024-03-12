import React from "react";
import { useState, useEffect } from "react";
import LocationsCss from "../MainComponent/Locations.module.css";
import getImagePath from "./imagePath.js";
import { useNavigate } from "react-router-dom";

function Locations({ setLocations, locations }) {
  useEffect(() => {
    fetchLocation();
  }, []);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const fetchLocation = async () => {
    const url = "http://localhost:3030/location";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setLocations(data);
    return data;
  };

  const getImageElements = (locationId) => {
    const imagePathArray = getImagePath(locationId);
    return imagePathArray.map((imagePath, index) => (
      <img
        key={index}
        src={imagePath}
        alt={`Location ${locationId} Image ${index}`}
      />
    ));
  };

  const handleLocation = (locationSelected) => {
    navigate(`location/${locationSelected.name}`, {
      state: { result: locationSelected },
    });
  };

  return (
    <>
      <section className={LocationsCss.image_container}>
        {locations?.map((location) => (
          <figure key={location.id} onClick={() => handleLocation(location)}>
            <figcaption>{location.name}</figcaption>
            <p>
              {location.about.substring(0, 200).concat("...")}
              <span onClick={() => handleNavigation("/LoginOrSignUp/*")}>
                read more
              </span>
            </p>

            {getImagePath(location.id)[0] && (
              <img
                src={getImagePath(location?.id)[0]}
                alt={`Location ${location?.id} Image 0`}
              />
            )}
          </figure>
        ))}
      </section>
    </>
  );
}

export { Locations, getImagePath };
