import React from "react";
import './class.scss';

import img1 from "../../../images/earth.webp";
import img2 from "../../../images/fee2.jpg";
import img3 from "../../../images/pc1.avif";
import img4 from "../../../images/pc2.jpg";
import img5 from "../../../images/teacher.jpg";
import img6 from "../../../images/tradi.jpg";
import w from '../../../images/w5.jpg';
import w2 from '../../../images/w2.jpg';
import w3 from '../../../images/w3.jpg';

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
    <div>
      <div className="class-mainbody">
      <h3>Six reason to choose our class</h3>
      <div className="class-container">
        <div className="class-row">
          {images.map((imageName, index) => (
            <div
              className="col-4 d-flex"
              key={index}
              style={{ flexDirection: "column" }}
            >
              <div className="class-card flex-fill img-card">
                <img
                  src={imageName.image}
                  className="card-img-top card-img"
                  alt={`Image ${index + 1}`}
                />
              <p>{imageName.name}</p>
              </div>
            </div>
          ))}
          <div className="col-3"></div>
        </div>
      </div>
    <h3>Love from community</h3>
    <div className="review">
        <div >
        <img src={w} alt="" />
        <h6>Joya</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
        <div>
        <img src={w2} alt="" />
        <h6>Kethrin</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
        <div>
        <img src={w3} alt="" />
        <h6>Rechal</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
        
    </div>
    </div>
    </div>
  );
};

export default Class;
