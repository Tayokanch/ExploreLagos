import React from "react";
import "./Reviews.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews({ selectedLocation }) {
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    console.log("this is console.log in line 8", selectedLocation.id);
    if (!selectedLocation) {
      console.log("selectedLocation is not available");
      return;
    }
    const url = `http://localhost:3030/reviews/${selectedLocation?.id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("this is data", data);
    setReviews(data);
    return data;
  };

  useEffect(() => {
    fetchReviews();
  }, [selectedLocation]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const createdDate = (reviewDate) => {
    const date = new Date(reviewDate);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };
  return (
    selectedLocation && (
      <section className="slide_container">
        <div className="review_header">
          <h3>{selectedLocation.name} Reviews</h3>
          <div>
            <button>Write a review</button>
          </div>
        </div>

        <div className="reviews">
          <Slider {...settings}>
            {reviews &&
              reviews.reviews &&
              reviews.reviews.map((review) => (
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-initials">
                          <p>{`${review.user.firstname[0].toUpperCase()}${review.user.lastname[0].toUpperCase()}`}</p>
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">{`${review.user.firstname} ${review.user.lastname}`}</h2>
                        <p className="description">{`${review?.content}`}</p>
                        <button className="button">
                          {createdDate(review?.createdAt)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    )
  );
}

export default Reviews;
