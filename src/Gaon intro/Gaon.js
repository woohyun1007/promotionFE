// Gaon.js
import "./Gaon.css";
import React from "react";
import logo from "../image/2024gaon_logo.png"; // Example logo
import slogan from '../image/2024gaon_slogan.png';
import intro from '../image/2024gaon_gaonSrcript.png';
import procedure from '../image/2024gaon_precedure.png';

import { motion} from 'framer-motion';

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
      <motion.div
            initial={{ opacity: 0, y: 10,x: 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
      <img src={intro} alt="Intro" className='intro-image'/>
      </motion.div>
      <motion.div
            initial={{ opacity: 0, y: 10,x: 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
      <img src={procedure} alt="Rrocedure" className='procedure-image'/>
        </motion.div>
    </div>
  );
}

export default Gaon;
