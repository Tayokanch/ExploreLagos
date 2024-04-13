import React from "react";
import { useState, useEffect } from "react";
import LocationsCss from "../MainComponent/Locations.module.css";
import getImagePath from "./imagePath.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootSrap from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Locations({ setLocations, locations }) {
  const { loggedInUser, selectedLocation, setSelectedLocation } =
    useContext(formContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const fetchLocation = async () => {
    const url = "https://explorelagos.onrender.com/location";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setLocations(data);
    setLoading(true);
    return data;
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const handleLocation = (locationSelected) => {
    if (loggedInUser) {
      setSelectedLocation(locationSelected);
      navigate(`location/${locationSelected.name}`, {
        state: { result: locationSelected },
      });
    } else {
      navigate("/LoginOrSignUp");
      setSelectedLocation(locationSelected);
    }
  };

  return (
    <>
      {!loading ? (
        <section>
          <Button variant="secondary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Locations Loading...
          </Button>
        </section>
      ) : (
        <section className={LocationsCss.image_container}>
          {locations?.map((location) => (
            <figure key={location.id} onClick={() => handleLocation(location)}>
              <figcaption>{location.name}</figcaption>
              <p>
                {location.about.substring(0, 200).concat("...")}
                <span>read more</span>
              </p>

              {getImagePath(location.id)[0] && (
                <img
                  src={`/${getImagePath(location?.id)[0]}`}
                  alt={`Location ${location?.id} Image 0`}
                />
              )}
            </figure>
          ))}
        </section>
      )}
    </>
  );
}

export { Locations, getImagePath };
