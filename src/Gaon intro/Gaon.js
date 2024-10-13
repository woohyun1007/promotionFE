import "./Gaon.css";
import React from "react";

function Gaon() {
  return (
    <>
      <div className="Gaon">
        <h3>우리가 바라던 그 순간을 향해</h3>
        <h1 style={{ fontSize: "100px" }}>다시, ON</h1>
        <p style={{ fontSize: "30px" }}>가온제 소개</p>
        <img alt="home" src={require("../image/home.jpg")} />
        <p style={{ fontSize: "30px" }}>강원대학교 미디어커뮤니케이션학과 36번째 학술제 다시, ON은 ...</p>
        <p style={{ fontSize: "30px" }}>(설명 추가 예정)</p>
      </div>
    </>
  );
}

export default Gaon;
