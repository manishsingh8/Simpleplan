import React from "react";
import "./body.scss";
import img from "../../images/image1.png";

const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 colm-1">
          <h3>Hobbies ❤️ Happiness ❤️ Home</h3>
          <p>
            A Nordic Startup which brings incredibly <br /> intresting hobbies
            from around the world to <br />
            people of all ages.
          </p>
          <div className="body-btn">
            <input
              type="text"
              placeholder="Enter your email"
              className="email"
            />
            <button className="body-btn">START EXPLORING <i class="fa-solid fa-circle-arrow-right fa-fade" /></button>
          </div>
        </div>
        <div className="col-sm-6 colm-2">
          <div className="body-img">
            <img src={img} alt="image..." className="body-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
