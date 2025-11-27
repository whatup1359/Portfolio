"use client";

import { motion } from "framer-motion";
import { Library } from "lucide-react";
import Image from "next/image";

const techStack = [
  {
    id: 1,
    name: "HTML",
    src: "/icons/frontend/HTML.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    src: "/icons/frontend/JavaScript.svg",
  },
  {
    id: 3,
    name: "React",
    src: "/icons/frontend/React-Dark.svg",
  },
  {
    id: 4,
    name: "NextJS",
    src: "/icons/frontend/NextJS-Dark.svg",
  },
  {
    id: 5,
    name: "TailwindCSS",
    src: "/icons/frontend/TailwindCSS-Dark.svg",
  },
  {
    id: 6,
    name: "NodeJS",
    src: "/icons/backend/NodeJS-Dark.svg",
  },
  {
    id: 7,
    name: "ExpressJS",
    src: "/icons/backend/ExpressJS-Dark.svg",
  },
  {
    id: 8,
    name: "GoLang",
    src: "/icons/backend/GoLang.svg",
  },
  {
    id: 9,
    name: "Postman",
    src: "/icons/backend/Postman.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    src: "/icons/database&cloud/MongoDB.svg",
  },
  {
    id: 11,
    name: "PostgreSQL",
    src: "/icons/database&cloud/PostgreSQL-Dark.svg",
  },
  {
    id: 12,
    name: "Supabase",
    src: "/icons/database&cloud/Supabase-Dark.svg",
  },
  {
    id: 13,
    name: "Vercel",
    src: "/icons/database&cloud/Vercel-Dark.svg",
  },
];

const Skill = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className="text-4xl flex items-center justify-center">
          <p>Skill</p>
          <Library size={45} className="ml-4" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center text-3xl gap-10 overflow-hidden mt-10 w-full"
        >
          {techStack.map((tech, index) => (
            <motion.div
              animate={{ x: ["200%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
              }}
              key={index}
              className="flex items-center justify-center"
            >
              <Image src={tech.src} alt={tech.name} width={60} height={60} />
              <span></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default Skill;
