"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getScrollPos = (pos: {
    sm: number;
    md?: number;
    lg?: number;
    xl?: number;
  }) => {
    const width = window.innerWidth;
    if (width < 640) return pos.sm;
    if (width < 768) return pos.md ?? pos.sm;
    if (width < 1024) return pos.lg ?? pos.md ?? pos.sm;
    return pos.xl ?? pos.lg ?? pos.md ?? pos.sm;
  };

  const navLinks = [
    { name: "About", pos: { lg: 500, md: 500, sm: 500 } },
    { name: "Education", pos: { lg: 800, md: 950, sm: 1000 } },
    { name: "Skill", pos: { lg: 1200, md: 1400, sm: 1500 } },
    { name: "Project", pos: { lg: 1700, md: 1950, sm: 2000 } },
  ];

  return (
    <>
      <motion.div
        className="absolute flex z-40 w-full"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex items-center justify-between px-10 py-10 xl:px-25 lg:px-12 md:px-6">
          <motion.div
            className="flex gap-x-4 items-center"
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.p
              className="font-semibold hidden xl:block"
              variants={itemVariants}
            >
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
                  target="_blank"
                  href="https://drive.google.com/file/d/1r2IXvDEwviSAFYJQDzVvdpMaRBghGyCl/view?usp=sharing"
                  className="cursor-pointer font-semibold bg-neutral-100 text-neutral-900 rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center"
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
            <div className="hidden xl:flex lg:flex items-center justify-center space-x-6">
              {navLinks.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <motion.div
                    variants={itemVariants}
                    onClick={() => scrollToPosition(getScrollPos(item.pos))}
                    className="cursor-pointer group flex flex-col items-center"
                  >
                    <p className="text-xl text-neutral-900 group-hover:scale-105 transition-all ease-in-out duration-300">
                      {item.name}
                    </p>
                    <div className="bg-linear-to-r from-neutral-900 via-neutral-400 to-neutral-900 rounded-full origin-center w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300" />
                  </motion.div>
                  {index !== navLinks.length - 1 && (
                    <span className="text-neutral-900 ml-6 text-xl">/</span>
                  )}
                </div>
              ))}
            </div>

            {/* -----------------Menu----------------- */}
            <div className="relative xl:hidden lg:hidden md:block sm:flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center p-2 rounded-full hover:scale-105 transition-all duration-300"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-2 w-[150px] bg-neutral-100 rounded-2xl shadow-xl border border-neutral-100 overflow-hidden flex flex-col py-2 px-2"
                  >
                    <div>
                      {navLinks.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          onClick={() => {
                            scrollToPosition(getScrollPos(item.pos));
                            setIsOpen(false);
                          }}
                          className="text-xl text-neutral-900 hover:bg-neutral-200/50 hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-xl px-2 py-1 font-medium border-b border-neutral-200 pb-2 cursor-pointer "
                        >
                          {item.name}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default Navbar;
