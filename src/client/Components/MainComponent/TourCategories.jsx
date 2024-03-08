import React, { useState, useEffect } from "react";
import   "./TourCategories.css";
import getImagePath from "./imagePath.js";

function TourCategories({ setLocations, locations }) {
  const [category, setCategory] = useState('All');
  const [originalLocations, setOriginalLocations] = useState([]);

  useEffect(() => {
    if (locations) {
      setOriginalLocations(locations);
    }
    console.log("this is the original Locations", originalLocations);
  }, []);

  useEffect(() => {
    getLocationByCategories();
  }, [category]);

  const getLocationByCategories = () => {
    if (category === "All") {
      setLocations(originalLocations);
    } else {
      const result = locations?.filter(
        (location) => location.category.toLowerCase() === category.toLowerCase()
      );
      setLocations(result);
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <section className='category_container'>
      <h3>Tour Categories</h3>
      <ul>
        <li
          onClick={() => handleCategoryClick("All")}
          className={category === "All" ? "selected" : ""}
        >
          All
        </li>
        <li
          onClick={() => handleCategoryClick("Recreational Centre")}
          className={category === "Recreational Centre" ? "selected" : ""}
        >
          Recreational Centre
        </li>
        <li
          onClick={() => handleCategoryClick("Art")}
          className={category === "Art" ? "selected" : ""}
        >
          Art Galleries
        </li>
        <li
          onClick={() => handleCategoryClick("Resort")}
          className={category === "Resort" ? "selected" : ""}
        >
          Beaches
        </li>
      </ul>
    </section>
  );
}

export default TourCategories;
