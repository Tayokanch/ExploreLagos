import React, { useState, useEffect } from "react";
import TourCategoriesCss from "./TourCategories.jsx";
import getImagePath from "./imagePath.js";

function TourCategories({ setLocations, locations }) {
  const [category, setCategory] = useState(null);
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
    <section>
      <h3>Tour Categories</h3>
      <ul>
        <li onClick={() => handleCategoryClick("All")}>All</li>
        <li onClick={() => handleCategoryClick("Recreational Centre")}>
          Recreational Centre
        </li>
        <li onClick={() => handleCategoryClick("Art")}>Art Galleries</li>
        <li onClick={() => handleCategoryClick("Resort")}>Beaches</li>
      </ul>
    </section>
  );
}

export default TourCategories;
