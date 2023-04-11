import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <motion.div 
    variants={fadeIn("right", "tween", 0.2, 2)}>
      <footer
      className="flex justify-center mb-0"
      style={{marginTop: '-75px'}}>
        <p>Matthew Lowe Portfolio {year}</p>
      </footer>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Footer, 'footer');