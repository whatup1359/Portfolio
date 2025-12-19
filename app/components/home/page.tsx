"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants1, variants2 } from "../motion";

const scrollToPosition = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <>
      <div className="relative z-10 -mt-[550px] space-y-10 flex flex-col items-center justify-center">
        <motion.div
          variants={variants1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-50 h-50 rounded-full"
        >
          <Image
            src={"/profile.jpg"}
            alt="profile"
            width={150}
            height={150}
            className="rounded-full flex items-center justify-center w-full h-full border-6 border-neutral-100"
          />
        </motion.div>

        <motion.div
          variants={variants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center justify-center space-y-10"
        >
          <div>
            <h1 className="text-5xl font-semibold">Nattawut Chanput</h1>
          </div>
          <button
            onClick={() => scrollToPosition(500)}
            className="cursor-pointer bg-neutral-900 text-neutral-100 px-10 py-3 rounded-full flex items-center justify-center hover:scale-105 transition-all ease-in-out duration-300"
          >
            <ChevronDown className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </>
  );
};
export default Home;
