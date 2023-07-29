import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import lib from "../../../images/library.jpg"; // Replace with your image URLs
import plant from "../../../images/plant.png"; // Replace with your image URLs
import write from "../../../images/writing.jpg"; // Replace with your image URLs
import "./blog.scss";

const YourComponent = () => {
  return (
    <div className="blog-container">
      <h3>
        Our blogs <a href="">SAOW ALL</a>
      </h3>

      <div className="blog-card">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={lib}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="#">Publisher name</a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={plant}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="#">Publisher name</a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={write}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="#">Publisher name</a>
          </div>
        </div>
      </div>
      <div className="blog">
      <div className="blog-foot">
        <h3>
         Start learning new skills today and<br/>pursue your passion 
        </h3>
        <p>
         join the community of global learners and start exploring today.
        </p>
        <span>
        <input type="text" placeholder="Enter your email"/>
        <button>GET STARTED</button>
        </span>
      </div>

      </div>
    </div>
  );
};

export default YourComponent;
