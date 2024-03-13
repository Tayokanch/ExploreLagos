import React from "react";
import { useState, useEffect } from "react";
import MainCSS from "../MainComponent/Main.module.css";
import { Locations } from "./Locations";
import TourCategories from "./TourCategories";
import { useContext } from "react";
import { formContext } from "../../App";
function Main() {
  const { locations, setLocations } = useContext(formContext);

  return (
    <main className={MainCSS.main} id="places">
      <TourCategories setLocations={setLocations} locations={locations} />
      <Locations setLocations={setLocations} locations={locations} />
    </main>
  );
}

export default Main;
