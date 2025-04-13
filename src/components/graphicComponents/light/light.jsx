import React from "react";
import "./Light.css";

const Light = () => {
  return (
    // <!-- Contêiner principal da cena -->
    <div id="light">
        {/* <!-- Efeito de brilho ao redor do farol --> */}
        <div className="dentro" id="glow" data-depth="0.01"></div>

        {/* <!-- Contêiner das luzes brilhantes do farol --> */}
        <div className="dentro" id="shining-lights-container">
            <div className="shining-light" id="shining-light-left"></div>
            <div className="shining-light" id="shining-light-right"></div>
        </div>

        <div className="dentro">
                {/* <!-- Brilho ao redor do farol --> */}
            <div id="glow-shine-container" data-depth="0.1">
                <div className="glow-shine" id="glow-shine-5"></div>
                <div className="glow-shine" id="glow-shine-4"></div>
                <div className="glow-shine" id="glow-shine-3"></div>
                <div className="glow-shine" id="glow-shine-1"></div>
                <div className="glow-shine" id="glow-shine-2"></div>
            </div>
        </div>
            
    </div>
  )
}

export default Light