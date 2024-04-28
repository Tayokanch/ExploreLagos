import React from "react";
import { useState, useEffect } from "react";
import MainCSS from "../MainComponent/Main.module.css";
import { Locations } from "./Locations";
import TourCategories from "./TourCategories";
import { useContext } from "react";
import { formContext } from "../../App";
function Main() {
  const { locations, setLocations } = useContext(formContext);
  const [category, setCategory] = useState("All");

  return (
    <main className={MainCSS.main} id="places">
      <TourCategories
        setLocations={setLocations}
        locations={locations}
        category={category}
        setCategory={setCategory}
      />
      <Locations
        setLocations={setLocations}
        locations={locations}
        category={category}
        setCategory={setCategory}
      />
    </main>
  );
}

export default Main;
