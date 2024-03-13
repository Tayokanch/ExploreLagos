import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import "./Slider.css"; 

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  const prev = () => {
    setActiveIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  return (
    <div className="slider">
      <div className="mb-3">
        <button onClick={prev} className="prev">
          &#10094;
        </button>
        <button onClick={next} className="next">
          &#10095;
        </button>
      </div>
      <Galleria
        value={images}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        numVisible={5}
        responsiveOptions={[
          {
            breakpoint: "991px",
            numVisible: 4,
          },
          {
            breakpoint: "767px",
            numVisible: 3,
          },
          {
            breakpoint: "575px",
            numVisible: 1,
          },
        ]}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        style={{ maxWidth: "640px" }}
      />
    </div>
  );
};

export default Slider;
