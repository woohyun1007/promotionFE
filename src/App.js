import "./App.css";
import Home from "./Home/Home";
import Gaon from "./Gaon intro/Gaon";
import EUM from "./EUM intro/EUM";
import ON from "./다시ON/ON";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./lib/axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  return <>{isPc && children}</>;
};

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
      <Mobile>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gaon" element={<Gaon />} />
            <Route path="/EUM" element={<EUM />} />
            <Route path="/ON" element={<ON />} />
          </Routes>
        </BrowserRouter>
      </Mobile>

      <PC>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gaon" element={<Gaon />} />
            <Route path="/EUM" element={<EUM />} />
            <Route path="/ON" element={<ON />} />
          </Routes>
        </BrowserRouter>
      </PC>
    </>

    
  );
}

export default App;
