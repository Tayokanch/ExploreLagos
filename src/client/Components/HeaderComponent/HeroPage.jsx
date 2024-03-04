import React from "react";
import HeroCSS from "./HeroPage.module.css";
function HeroPage() {
  return (
    <div className={HeroCSS.hero_container}>
      <div className={HeroCSS.hero_content}>
        <h1>Welcome To Lagos</h1>
        <p>
          Immerse yourself in the city's rich history, indulge in delicious
          cuisine, and discover the hidden gems awaiting your exploration. Let
          Lagos be your gateway to unforgettable experiences.
        </p>
      </div>
    </div>
  );
}

export default HeroPage;
