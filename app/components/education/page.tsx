"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, variants1, variants2 } from "../motion";

const Education = () => {
  return (
    <>
      <motion.div
        id="education"
        className="mt-20 w-full text-neutral-900"
      >
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
          <div className="flex justify-between px-150 mt-15 mb-5">
            <span>2015-2018</span>
            <span>2019-2022</span>
          </div>

          <div className="px-140">
            <div className="h-[1.5px] bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full" />
          </div>

          <div>
            <div className="flex justify-between px-130 mt-5">
              <div className="space-y-1">
                <ul className="text-3xl mb-4">High School</ul>
                <li>Suankularb Wittayalai Thonburi School</li>
                <li>English & Japanese Program</li>
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
