import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function EachLocation() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.result) {
      setSelectedLocation(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    console.log("this is the selectedLocation", selectedLocation);
  }, [selectedLocation]);

  return <div>{selectedLocation && selectedLocation.name}</div>;
}

export default EachLocation;
