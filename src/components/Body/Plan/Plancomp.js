import React from "react";
import img from "../../../images/book2.jpg";
import "./plancomp.scss";

const Plancomp = (props) => {
  return (
    <div className="plan-card">
      <img
        src={img}
        className="card-img-top"
        alt="..."
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />
      <p style={{ color: "#2430A0 ", paddingLeft: "4px", fontWeight: "700" }}>
        LANGUAGE
      </p>
      <h6 className="card-title">
        Class name- Lorem ipsum dolor sit amet, consectetur adipisi.
      </h6>
      <p className="card-text">
        Lorem ipsum dolor sit amet, varius consectetur varius entat consectet
        adipiscing elit. Ullamcorper...
      </p>
      <button className="enroll-btn">
        <h6>{props.price}</h6>
        <h6>Enroll now</h6>
      </button>
    </div>
  );
};

export default Plancomp;
