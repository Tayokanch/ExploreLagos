import React from "react";
import { FaCircle, FaTimes } from "react-icons/fa";

import "./Reviews.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import { initialForm } from "../../App";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Reviews({ selectedLocation }) {
  const [reviews, setReviews] = useState([]);
  const [displayReviewBox, setDisplayReviewBox] = useState(false);
  const { setFormInputs, formInputs } = useContext(formContext);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
      locationId: selectedLocation?.id,
      userId: 10,
    }));
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formInputs),
  };

  const postReviews = async (e) => {
    console.log("this is formInputs", formInputs);
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3030/reviews`, options);
      const data = await response.json();
    } catch (err) {
      console.error("this is the error", err);
      setError(err.error);
    }

    setFormInputs(initialForm);
    setDisplayReviewBox(false);
  };

  useEffect(() => {
    console.log(displayReviewBox);
  }, [displayReviewBox]);

  const fetchReviews = async () => {
    if (!selectedLocation) {
      console.log("selectedLocation is not available");
      return;
    }
    const url = `https://famous-jellyfish-production.up.railway.app/reviews/${selectedLocation?.id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("this is data", data.reviews.reverse());
    setReviews(data);
    return data;
  };

  useEffect(() => {
    fetchReviews();
  }, [selectedLocation || reviews]);


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
            <p onClick={() => setDisplayReviewBox(!displayReviewBox)}>
              Write a review
            </p>
            <div
              className="form_container"
              id={`${displayReviewBox ? "showform" : ""}`}
            >
              <form onSubmit={postReviews} style={{ position: "relative" }}>
                <div>
                  <textarea
                    name="content"
                    cols="50"
                    rows="10"
                    placeholder="Type Review"
                    value={formInputs.content}
                    onChange={handleChange}
                    required
                  ></textarea>{" "}
                </div>
                <button>Submit</button>
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-8px",
                    color: "red",
                  }}
                  onClick={() => setDisplayReviewBox(false)}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{ fontSize: "2rem" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="reviews">
          <Slider {...settings}>
            {reviews &&
              reviews.reviews &&
              reviews.reviews.reverse().map((review) => (
                <div className="slide-content" key={review.id}>
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
