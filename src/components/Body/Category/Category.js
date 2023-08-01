import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../images/Languages.png";
import img2 from "../../../images/art.webp";
import img3 from "../../../images/chess.jpg";
import img4 from "../../../images/funteresting.png";
import img5 from "../../../images/music.jpg";
import img6 from "../../../images/root.jpg";
import img7 from "../../../images/woman-cooking.jpg";
import img8 from "../../../images/yoga.jpg";
import "./category.scss";

const Category = () => {
  const images = [
    { image: img1, name: "Language" },
    { image: img2, name: "Art & Craft" },
    { image: img3, name: "Academic" },
    { image: img4, name: "Study" },
    { image: img5, name: "Music" },
    { image: img6, name: "Back to Roots" },
    { image: img7, name: "Cooking" },
    { image: img8, name: "Yoga" },
  ];

  return (
    <div className="cate-container">
      <h3>Browse by Category</h3>
      <div className="container">
        <div className="row">
          {images.map((imageName, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="card flex-fill img-card">
                <img
                  src={imageName.image}
                  className="card-img-top cate-cards"
                  alt={`Image ${index + 1}`}
                />
                <button>{imageName.name}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
