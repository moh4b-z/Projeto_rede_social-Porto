import React from "react";
import "./Lighthouse.css";

const Lighthouse = () => {
  return (
    <div className="lighthouse-container">
      <div className="lighthouse">
        <div className="top">
          <div className="light">
            <div className="beam"></div>
          </div>
        </div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Lighthouse;