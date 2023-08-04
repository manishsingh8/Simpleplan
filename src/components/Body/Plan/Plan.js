import React, { useState } from "react";
import Plancomp from "./Plancomp";
import "./plan.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Plan = () => {
  const [price, setPrice] = useState("₹1999 only");

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="plan-container">
      <span>
        <h3>
          Discover Classes <a href="">SHOW ALL</a>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginTop: "11px", marginRight: "10px" }}>
           
            show prices in :{" "}
          </p>
          <ToggleButtonGroup
      color="success"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="web"
        className="btn1"
        onClick={() => {
          setPrice("₹1999 only");
        }}
        style={{
          backgroundColor: alignment === "web" ? "#2430A0" : "initial",
          color: alignment === "web" ? "white" : "initial",
        }}
      >
        INR
      </ToggleButton>
      <ToggleButton
        value="android"
        className="btn2"
        onClick={() => {
          setPrice("$25 only");
        }}
        style={{
          backgroundColor: alignment === "android" ? "#2430A0" : "initial",
          color: alignment === "android" ? "white" : "initial",
        }}
      >
        USA
      </ToggleButton>
    </ToggleButtonGroup>
        </div>
      </span>

      <p>Choose from veraity of classes from over the world</p>
      <div className="plan-comp">
        {/* PlanComponent */}
        <Plancomp price={price} />
        <Plancomp price={price} />
        <Plancomp price={price} />
        <Plancomp price={price} />
      </div>
    </div>
  );
};

export default Plan;
