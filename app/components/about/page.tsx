"use client"

import { User } from "lucide-react";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div
          id="about"
          className="flex items-center justify-center w-full py-10"
        >
          <p className="text-4xl text-center">About</p>
          <User size={40} className="ml-4" />
        </div>
        <p className="text-center text-balance">
          A web developer passionate about learning and development, easily connects with others, adapt quickly to new environments and desire to apply skills to the development team, committed to contributing modern websites and driving technological growth within the organization.
        </p>
      </motion.div>
    </>
  );
};
export default About;
