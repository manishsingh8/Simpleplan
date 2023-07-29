import React, { useRef, useState } from "react";
import "./carousel.scss";
import T1 from "../../../images/T1.jpg";
import T2 from "../../../images/T2.jpg";
import T3 from "../../../images/T7.jpg";
import T4 from "../../../images/T4.avif";
import T5 from "../../../images/T5.png";
import T6 from "../../../images/T7.jpg";

const Slider = () => {
  const images = [
    { image: T1, name: "Kally", speciality: "YOGA" },
    { image: T2, name: "Jhon", speciality: "ARTS & CRAFT" },
    { image: T3, name: "Lili", speciality: "ACADEMICS" },
    { image: T4, name: "Seyma", speciality: "SPORTS" },
    { image: T5, name: "Rechal", speciality: "MUSIC" },
    { image: T6, name: "Porter", speciality: "DANCING" },
    { image: T2, name: "Cheiml", speciality: "COMPUTER" },
    // Add more image URLs here
  ];

  const sliderRef = useRef(null);
  const slideWidth = 300; // Width of each slide (adjust as needed)
  const slidesPerPage = 4; // Number of slides visible at a time

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - slidesPerPage);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - slidesPerPage) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="carousel-container" ref={sliderRef}>
        {images.slice(currentIndex, currentIndex + slidesPerPage)
          .map((img, index) => (
            <div className="caro-img-card" key={index}>
              <img
                src={img.image}
                className="card-img-top carousel-cards"
                alt="..."
              />
              <div>
                <h6>{img.name}</h6>
               <p>{img.speciality}</p>
              </div>
              
            </div>
          ))}
      </div>
        <div className="slider-controls">
        <button className="pre" onClick={handlePrev}><i className="fa-solid fa-circle-chevron-left"></i></button>
        <button className="next" onClick={handleNext}><i className="fa-solid fa-circle-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Slider;
