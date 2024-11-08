// Gaon.js
import "./Gaon.css";
import React from "react";
import logo from "../image/2024 가온제 로고.png"; // Example logo
import slogan from '../image/2024 가온제 우리가 바라던~.png';
import intro from '../image/가온제 소개페이지 소개글.png';
function Gaon() {
  return (
    <div
      className="gaon-container ">
      {/* Title and Subtitle */}
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p></p>
      {/* Logo Image */}
      <img src={logo} alt="Gaon Event" className="title-image" />
      
      {/* Additional Information */}
      <img src={intro} alt="Intro" className='intro-image'/>



        
  
    </div>
  );
}

export default Gaon;
