import React from "react";
import './class.scss';

import img1 from "../../../images/earth.webp";
import img2 from "../../../images/fee2.jpg";
import img3 from "../../../images/pc1.avif";
import img4 from "../../../images/pc2.jpg";
import img5 from "../../../images/teacher.jpg";
import img6 from "../../../images/tradi.jpg";
import LoveCon from "./LoveCommunity/LoveCon";


const Class = () => {
  const images = [
    { image: img1, name: "Cross country sharing of interesting and unique hobbies from across the world" },
    { image: img2, name: "Transparent and structured fee payment options" },
    { image: img3, name: "Interactive live online classes at your convenient time slots" },
    { image: img4, name: "Age no bar for enroling into your cherished hobby or activity classes" },
    { image: img5, name: "Learning from passionate, talented and trusted teachers" },
    { image: img6, name: "Age no bar for enroling into your cherished hobby or activity classes" },
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
