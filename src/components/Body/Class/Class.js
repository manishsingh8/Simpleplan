import React from "react";
import './class.scss';

import img1 from "../../../images/earth.webp";
import img2 from "../../../images/fee2.jpg";
import img3 from "../../../images/pc1.avif";
import img4 from "../../../images/pc2.jpg";
import img5 from "../../../images/teacher.jpg";
import img6 from "../../../images/tradi.jpg";
import LoveCon from "./LoveContainer/LoveCon";


const Class = () => {
  const images = [
    { image: img1, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
    { image: img2, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
    { image: img3, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
    { image: img4, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
    { image: img5, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
    { image: img6, name: "Lorem ipsum dolor sit  amet consectetur adipisicing elit Beatae" },
  ];
  
  return (
      <div className="class-mainbody">
      <h3>Six reason to choose our class</h3>
      <div className="class-container">
      <div className="class-row">
        {images.map((imageName, index) => (
            <div className="class-card flex-fill col-4" key={index}>
              <img
                src={imageName.image}
                className="card-img"
                alt={`Image ${index + 1}`}
              />
              <p>{imageName.name}</p>
            </div>
        ))}
      </div>
    </div>
    <LoveCon />
    </div>
   
  );
};

export default Class;
