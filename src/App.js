import "./App.css";
import Home from "./Home/Home";
import Gaon from "./Gaon intro/Gaon";
import EUM from "./EUM intro/EUM";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./lib/axios";
import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/test")
      .then((res) => {
        console.log(res);
        setHello(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gaon" element={<Gaon />} />
          <Route path="/EUM" element={<EUM />} />
        </Routes>
      </BrowserRouter>
      <div>백엔드 데이터 : {hello}</div>
    </>
  );
}

export default App;
