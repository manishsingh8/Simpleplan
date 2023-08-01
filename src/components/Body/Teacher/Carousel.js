import React, { useRef, useState } from "react";
import "./carousel.scss";
import T1 from "../../../images/T1.jpg";
import T2 from "../../../images/w2.jpg";
import T3 from "../../../images/T3.webp";
import T4 from "../../../images/T4.avif";
import T5 from "../../../images/T5.png";
import T6 from "../../../images/T7.jpg";
import Tooltip from "@mui/material/Tooltip";

const Slider = () => {
  // Teachers list with their images and specialties
  const images = [
    { image: T1, name: "Kally", speciality: "YOGA" },
    { image: T2, name: "Kethrin", speciality: "ARTS & CRAFT" },
    { image: T3, name: "Smith", speciality: "ACADEMICS" },
    { image: T4, name: "Seyma", speciality: "SPORTS" },
    { image: T5, name: "Rechal", speciality: "MUSIC" },
    { image: T6, name: "Porter", speciality: "DANCING" },
  ];

  // Ref to the carousel container
  const sliderRef = useRef(null);

  // Number of slides to show per page
  const slidesPerPage = 4;

  // State to keep track of the current index in the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous button click
  const handlePrev = () => {
    if (currentIndex === 0) {
      // If at the first set of slides, loop to the last set
      setCurrentIndex(images.length - slidesPerPage);
    } else {
      // Move to the previous set of slides
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Function to handle next button click
  const handleNext = () => {
    if (currentIndex === images.length - slidesPerPage) {
      // If at the last set of slides, loop to the first set
      setCurrentIndex(0);
    } else {
      // Move to the next set of slides
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="carousel-container" ref={sliderRef}>
        {/* Render the visible slides */}
        {images
          .slice(currentIndex, currentIndex + slidesPerPage)
          .map((img, index) => (
            <div className="caro-img-card" key={index}>
              {/* Display the teacher's image */}
              <img
                src={img.image}
                className="card-img-top carousel-cards"
                alt="..."
              />
              <div className="speciality">
                {/* Display the teacher's name */}
                <h6>{img.name}</h6>
                {/* Display the teacher's specialty */}
                <p>{img.speciality}</p>
              </div>
            </div>
          ))}
      </div>
      {/* Slider navigation controls */}
      <div className="slider-controls">
        <Tooltip title="Back" placement="left-start">
          <i
            className="fa-solid fa-circle-chevron-left fa-beat fa-2xl pre"
            onClick={handlePrev}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>

        <Tooltip title="Next" placement="right-start">
          <i
            className="fa-solid fa-circle-chevron-right fa-beat fa-2xl next"
            onClick={handleNext}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Slider;
