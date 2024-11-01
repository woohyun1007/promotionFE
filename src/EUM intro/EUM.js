// EUM.js
import "./EUM.css";
import React from "react";
import slogan from '../image/2024 가온제 우리가 바라던~.png';
import logo from "../image/2024 가온제 로고.png"; // Example logo
import eum1 from "../image/가온제 홈페이지 학생회 소개 1-05.png"; // eum1
import eum2 from "../image/가온제 홈페이지 학생회 소개 2_대지 1.png"; // eum2
import eum3 from "../image/가온제 홈페이지 학생회 소개 3-02.png"; // eum3
import eum4 from "../image/가온제 홈페이지 학생회 소개 4-03.png"; // eum4
import eum5 from "../image/가온제 홈페이지 학생회 소개 5-04.png"; // eum5

import { motion,} from 'framer-motion';


function EUM() {
  return (
    
    <div
      className="eum-container">
       

      {/* Title and Subtitle */}
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p></p>
      {/* Logo Image */}
      <img src={logo} alt="EUM Event" className="eum-image" />
      
      <motion.div
            initial={{ opacity: 0, y: 10,x: 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}
        >
            <div>
             <img src={eum1} alt="EUM 1" className="eum-sub-image eum-image-1"/>
             <img src={eum2} alt="EUM 2" className="eum-sub-image eum-image-2" />
             <img  src={eum3} alt="EUM 3" className="eum-sub-image eum-image-3"/>
             <img  src={eum4} alt="EUM 4" className="eum-sub-image eum-image-4"/>
             <img src={eum5} alt="EUM 5" className="eum-sub-image eum-image-5" />
            </div>
        </motion.div>
        

 
      </div>
    
  );
}

export default EUM;
