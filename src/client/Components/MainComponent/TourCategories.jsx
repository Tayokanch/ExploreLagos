import React, { useState, useEffect } from "react";
import "./TourCategories.css";
import getImagePath from "./imagePath.js";

function TourCategories({ setLocations, locations, category, setCategory }) {
  const [mycategory, setMycategory] = useState(null);

  const getLocationByCategories = () => {
    if (mycategory === "All") {
      setCategory(locations);
    } else {
      const result = locations?.filter(
        (location) =>
          location.category.toLowerCase() === mycategory.toLowerCase()
      );
      setCategory(result);
    }
  };

  useEffect(() => {
    if (mycategory) {
      getLocationByCategories();
    }
  }, [mycategory]);

  const handleCategoryClick = (selectedCategory) => {
    if (locations) {
      setMycategory(selectedCategory);
    }
  };

  return (
    <section className="category_container">
      <h3>Location Categories</h3>
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
