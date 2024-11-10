// EUM.js
import "./EUM.css";
import React from "react";
import slogan from '../image/2024gaon_slogan.png';
import logo from "../image/2024gaon_logo.png"; // Example logo
import eum from "../image/2024Eum.jpeg";
import eum1 from "../image/2024Eum1.png"; // eum1
import eum2 from "../image/2024Eum2.png"; // eum2
import eum3 from "../image/2024Eum3.png"; // eum3
import eum4 from "../image/2024Eum4.png"; // eum4
import eum5 from "../image/2024Eum5.png"; // eum5

import { motion} from 'framer-motion';


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
            }}>
             <img src={eum1} alt="EUM 1" className="eum-sub-image eum-image-1"/>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10,x:0}}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
             <img src={eum} alt="EUM" className="eum-sub-image eum-image" />
             </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10,x:0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
             <img src={eum2} alt="EUM 2" className="eum-sub-image eum-image-2" />
             </motion.div>
             <motion.div
            initial={{ opacity: 0, y: 10,x:0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
             <img  src={eum3} alt="EUM 3" className="eum-sub-image eum-image-3"/>
             </motion.div>

             <motion.div
            initial={{ opacity: 0, y: 10,x:0}}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
             <img  src={eum4} alt="EUM 4" className="eum-sub-image eum-image-4"/>
             </motion.div>

             <motion.div
            initial={{ opacity: 0, y: 10,x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 0.5 },
                x: { duration: 1 }
            }}>
             <img src={eum5} alt="EUM 5" className="eum-sub-image eum-image-5" />
             </motion.div>
      </div>
    
  );
}

export default EUM;
