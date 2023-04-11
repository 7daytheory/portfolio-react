import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <motion.div 
    variants={fadeIn("right", "tween", 0.2, 2)}
>
      <footer
      className="flex justify-center mb-0"
      style={{position: 'absolute', width: '100%', height: '75px', background: '#915eff', color: '#FFF', fontWeight: 'bold', letterSpacing: '1px'}}
      >
        <p style={{marginTop: '25px'}}>Matthew Lowe Portfolio {year}</p>
      </footer>
    </motion.div>
    </>
  )
}

export default Footer;