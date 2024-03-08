import React from "react";
import { useState, useEffect } from "react";
import LocationsCss from "../MainComponent/Locations.module.css";
import getImagePath from "./imagePath.js";


function Locations({setLocations, locations}) {
  useEffect(() => {
    fetchLocation();

  }, []);
  
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

  return (
    <>
      <section className={LocationsCss.image_container}>
        {locations?.map((location) => (
          <figure key={location.id}>
            <figcaption>{location.name}</figcaption>
            <p>{location.about}</p>
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
