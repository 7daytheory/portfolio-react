import React from 'react';
import { motion } from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a full stack developer with nearly a decades experience working full time in the field. I have worked with front-end development, mainly javascript, as well as frameworks like React and Angular. On the back-end I have mainly used PHP as well as Laravel.
        I also have a background in design and it comes in handy doing small tweaks by not having to send every small change to a designer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About