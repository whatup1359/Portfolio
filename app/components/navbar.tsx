"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const scrollToPosition = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Navbar = () => {
  return (
    <>
      <motion.div
        className="absolute flex-1 z-40 w-full"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between mt-10 mx-25">
          <motion.div
            className="flex gap-x-4 items-center"
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.p className="font-semibold" variants={itemVariants}>
              wut.nattawut3218@gmail.com
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
                <Link
                  target="_blank"
                  href={"https://github.com/whatup1359"}
                  className="cursor-pointer bg-black rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center"
                >
                  <Image
                    src={"/icons/github/githubicon1.png"}
                    alt="githubicon1"
                    width={70}
                    height={100}
                    className="w-max h-max"
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
                <Link
                  href="/"
                  className="cursor-pointer font-semibold bg-white rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center"
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-x-3 items-center justify-center"
            transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
            variants={itemVariants}
          >
            <motion.div
              onClick={() => scrollToPosition(500)}
              variants={itemVariants}
              className="cursor-pointer group flex flex-col items-center justify-center px-2"
            >
              <p className="text-xl hover:scale-105 transition-all ease-in-out duration-300">
                About
              </p>

              <div className="bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full origin-center w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300" />
            </motion.div>

            <span className="text-xl">/</span>

            <motion.div
              onClick={() => scrollToPosition(800)}
              variants={itemVariants}
              className="cursor-pointer group flex flex-col items-center justify-center px-2"
            >
              <p className="text-xl hover:scale-105 transition-all ease-in-out duration-300">
                Education
              </p>

              <div className="bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full origin-center w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300" />
            </motion.div>

            <span className="text-xl">/</span>

            <motion.div
              onClick={() => scrollToPosition(1200)}
              variants={itemVariants}
              className="cursor-pointer group flex flex-col items-center justify-center px-2"
            >
              <p className="text-xl hover:scale-105 transition-all ease-in-out duration-300">
                Skill
              </p>

              <div className="bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full origin-center w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300" />
            </motion.div>

            <span className="text-xl">/</span>

            <motion.div
              onClick={() => scrollToPosition(1700)}
              variants={itemVariants}
              className="cursor-pointer group flex flex-col items-center justify-center px-2"
            >
              <p className="text-xl hover:scale-105 transition-all ease-in-out duration-300">
                Project
              </p>

              <div className="bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full origin-center w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default Navbar;
