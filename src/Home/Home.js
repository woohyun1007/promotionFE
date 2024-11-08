// Home.js
import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/2024 가온제 로고.png"; // Example logo
import slogan from "../image/2024 가온제 우리가 바라던~.png"; //slogan
import intro from '../image/가온제 메인페이지 소개글.png';


// Import images for the buttons
import onIcon from "../image/다시on 버튼_대지 1.png"; // Replace with your actual image paths
import gaonIcon from "../image/가온제 소개 버튼-02.png";
import eumIcon from "../image/이음 소개 버튼-03.png";

function Home() {
  const navigate = useNavigate();

  // Functions to navigate to different menus
  const moveMenu1 = () => navigate("/ON");
  const moveMenu2 = () => navigate("/Gaon");
  const moveMenu3 = () => navigate("/EUM");

  return (
    <div
      className="body"> 
      
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p>  </p>
      {/* Logo Image */}
      <img src={logo} alt="Title Logo" className="title-image" />

      {/* Subtitle */}
      <img src={intro} alt="Intro" className="intro-image" />


      {/* Navigation Buttons */}
        <img
          className="button-image1"
          src={onIcon}
          alt="onIcon"
          variant="plain"
          onClick={moveMenu1}
        />

        <img
          className="button-image2"
          src={gaonIcon}
         alt="Gaon Icon"
          variant="plain"
          onClick={moveMenu2}
        />
        
        <img
          className="button-image3"
          src={eumIcon} 
          alt="E:UM Icon" 
          variant="plain"
          onClick={moveMenu3}
        />
        
    </div>
  );
}

export default Home;
