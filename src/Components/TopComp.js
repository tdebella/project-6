import React from "react";
import "./TopComp.css";

function TopComp() {
  return (
    <div className="top-wrapper">
      <h1 className="title"> Our Pricing</h1>
      <div className="pricing">
        <p>Annually</p>
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
        </label>
        <p>Monthly</p>
      </div>
    </div>
  );
}

export default TopComp;
