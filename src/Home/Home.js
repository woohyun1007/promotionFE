import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import backimg from "../image/back.webp";

function Home() {
  const navigate = useNavigate();
  function moveMenu1() {
    navigate("/ON");
  }
  function moveMenu2() {
    navigate("/Gaon");
  }
  function moveMenu3() {
    navigate("/EUM");
  }
  return (
    <>
      <div style={{ backgroundImage: "url(" + backimg + ")" }}>
        <div className="Home">
          <img alt="home" src={require("../image/home.jpg")} />
          <h1 style={{ fontSize: "100px" }}>다시, ON</h1>
          <p style={{ fontSize: "30px" }}>
            강원대학교 미디어커뮤니케이션학과 36번째 학술제
          </p>
          <p style={{ fontSize: "30px" }}>(설명추가예정)</p>
        </div>

        <div className="Homemenu">
          <Button
            className="Homebtn"
            variant="outlined"
            style={{ fontSize: "30px" }}
            onClick={moveMenu1}
          >
            다시, ON
          </Button>
          <Button
            className="Homebtn"
            variant="outlined"
            style={{ fontSize: "30px" }}
            onClick={moveMenu2}
          >
            가온제 소개
          </Button>
          <Button
            className="Homebtn"
            variant="outlined"
            style={{ fontSize: "30px" }}
            onClick={moveMenu3}
          >
            E:UM 소개
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
