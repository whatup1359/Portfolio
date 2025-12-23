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
          <div className="hidden xl:flex lg:flex md:flex items-center justify-center">
            <div className="w-[700px] px-25 xl:px-0 lg:px-20 md:px-30 sm:px-40">
              <div className="mt-15 mb-2 flex items-center justify-between">
                <span>2016-2019</span>
                <span>2020-2023</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col mt-10 xl:mt-0 lg:mt-0 md:mt-0">
              <span className="xl:hidden lg:hidden md:hidden mb-2">2020-2023</span>
              <div className="h-[1.5px] w-[300px] xl:w-[800px] lg:w-[650px] md:w-[550px] sm:w-[400px] bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex justify-between px-6 flex-col xl:flex-row lg:flex-row md:flex-row mt-5 xl:space-x-80 lg:space-x-60 md:space-x-20 space-y-10">
              <div className="space-y-1">
                <ul className="text-3xl pb-4">High School</ul>
                <li>Suankularb Wittayalai Thonburi</li>
                <li>Arts-Japanese Program</li>
              </div>

              <div className="flex flex-col xl:hidden lg:hidden md:hidden">
                <span className="xl:hidden lg:hidden md:hidden mb-2">
                  2020-2023
                </span>
                <div className="h-[1.5px] w-[300px] xl:w-[800px] lg:w-[700px] md:w-[600px] sm:w-[400px] bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full" />
              </div>

              <div className="space-y-1">
                <ul className="text-3xl pb-4">Bachelor's Degree</ul>
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
