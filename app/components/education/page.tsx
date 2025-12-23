"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { variants1, variants2 } from "../motion";

const Education = () => {
  return (
    <>
      <motion.div id="education" className="mt-20 w-full text-neutral-900">
        <motion.div
          variants={variants1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl flex items-center justify-center"
        >
          <p>Education</p>
          <GraduationCap size={50} className="ml-4" />
        </motion.div>

        <motion.div
          variants={variants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex items-center justify-center">
            <div className="mt-15 mb-5 xl:space-x-125 lg:space-x-80 md:space-x-60 sm:space-x-40">
              <span>2016-2019</span>
              <span>2020-2023</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-[1.5px] xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full" />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex mt-5 xl:space-x-70 lg:space-x-30 md:space-x-20 sm:space-x-10">
              <div className="space-y-1">
                <ul className="text-3xl mb-4">High School</ul>
                <li>Suankularb Wittayalai Thonburi</li>
                <li>Arts-Japanese Program</li>
              </div>

              <div className="space-y-1">
                <ul className="text-3xl mb-4">Bachelor's Degree</ul>
                <li>Kasetsart University Bangkhen</li>
                <li>Bachelor of Science in Geography</li>
                <li>TOEIC: 730</li>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Education;
