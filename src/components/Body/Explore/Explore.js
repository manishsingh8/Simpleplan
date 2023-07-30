import React from "react";
import "./explore.scss";
import img1 from "../../../images/fee4.png";
import img2 from "../../../images/lern3.jpg";
import img3 from "../../../images/learn.webp";
import img4 from "../../../images/teacher4.webp";

const Explore = () => {
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
        <div className="exp-img">
          <div>
            <img src={img1} alt="" />
          </div>
          <h6>Pay as you go</h6>
          <p>
            Explore your passion and go beyond the physical and mental
            boundaries of time, age, gender or geography.
          </p>
        </div>
        <div className="exp-img">
          <div>
            <img src={img2} alt="" />
          </div>
          <h6>Take classes anytime, anywhere</h6>
          <p>
            We offers Interactive classes by experts who are qualified and
            trusted.
          </p>
        </div>
        <div className="exp-img">
          <div>
            <img src={img3} alt="" />
          </div>
          <h6>Learn something new</h6>
          <p>
            Join sessions at your own convenience and pace, from the comforts of
            your home.
          </p>
        </div>
        <div className="exp-img">
          <div>
            <img src={img4} alt="" />
          </div>
          <h6>Skilled & Passionate Teachers</h6>
          <p>
            No enrollment fee for our classes. You only pay for the classes that
            you take. Your payment is Safe and secure with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
