import React from "react";
import "./BottomComp.css";

function BottomComp() {
  return (
    <div className=" pricing-main">
      <div className=" pricing-box">
        <p className="box-title">Basic</p>
        <p className="price-annually">
          $ <span className="price">199.99</span>
        </p>
        <p className="price-monthly">
          $ <span className="price">19.99</span>
        </p>
        <ul>
          <li>500 GB Storage</li>
          <li>2 Users Allowed</li>
          <li>Send up to 3 GB</li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
      <div className="pricing-box featured">
        <p className="box-title">Professional</p>
        <p className="price-annually">
          $<span className="price">249.99</span>
        </p>
        <p className="price-monthly">
          $ <span className="price">24.99</span>
        </p>
        <ul>
          <li>1 TB Storage</li>
          <li>5 Users Allowed</li>
          <li>Send up to 10 GB</li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
      <div className="pricing-box">
        <p className="box-title">Master</p>
        <p className="price-annually">
          $<span className="price">399.99</span>
        </p>
        <p className="price-monthly">
          $<span className="price">39.99</span>
        </p>
        <ul>
          <li>2 TB Storage</li>
          <li>10 Users Allowed</li>
          <li>Send up to 20 GB</li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
}

export default BottomComp;
