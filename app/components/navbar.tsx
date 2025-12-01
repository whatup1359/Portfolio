"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// ฟังก์ชันสำหรับเลื่อนหน้าไปยังตำแหน่งที่กำหนด
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

            <motion.div
              className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              <Link
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
            </motion.div>

            <motion.div
              className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              <p className="cursor-pointer font-semibold bg-white rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center">
                Resume
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-x-4 items-center"
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          >
            <motion.p
              onClick={() => scrollToPosition(500)}
              className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              About
            </motion.p>

            <span className="text-xl">/</span>

            <motion.p
              onClick={() => scrollToPosition(800)}
              className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              Education
            </motion.p>

            <span className="text-xl">/</span>

            <motion.p
              onClick={() => scrollToPosition(1200)}
              className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              Skill
            </motion.p>

            <span className="text-xl">/</span>

            <motion.p
              onClick={() => scrollToPosition(1700)}
              className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300"
              variants={itemVariants}
            >
              Portfolio
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default Navbar;
