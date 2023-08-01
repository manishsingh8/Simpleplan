import React from "react";
import "./explore.scss";
import img1 from "../../../images/fee4.png";
import img2 from "../../../images/lern3.jpg";
import img3 from "../../../images/learn.webp";
import img4 from "../../../images/teacher4.webp";

const Explore = () => {
  const images = [
    {
      img: img1,
      heading: "Pay as you go",
      text: "Explore your passion and go beyond the physical and mental boundaries of time age gender or geography",
    },
    {
      img: img2,
      heading: "Take classes anytime, anywhere",
      text: "We offers Interactive classes by experts who are qualified and trusted.",
    },
    {
      img: img3,
      heading: "Learn something new",
      text: " Join sessions at your own convenience and pace, from the comforts of your home.",
    },
    {
      img: img4,
      heading: "Skilled & Passionate Teachers",
      text: "No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.",
    },
  ];

  return (
    <div className="explore-container">
      <div className="explore-page">
        <h3>
          Explore. Enroll. Have Fun. Repeat-
          <br />
          here hobby meets happiness
        </h3>
      </div>
      <div className="explore-card">
        {images.map((value, index) => {
          return (
            <div className="exp-img" key={index}>
              <div>
                <img src={value.img} alt="" />
              </div>
              <h6>{value.heading}</h6>
              <p> {value.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
