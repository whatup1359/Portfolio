"use client";

import { motion } from "framer-motion";
import { Library } from "lucide-react";
import Image from "next/image";

const techStack = [
  { id: 1, name: "HTML", src: "/icons/frontend/HTML.svg" },
  { id: 2, name: "JavaScript", src: "/icons/frontend/JavaScript.svg" },
  { id: 3, name: "React", src: "/icons/frontend/React-Dark.svg" },
  { id: 4, name: "NextJS", src: "/icons/frontend/NextJS-Dark.svg" },
  { id: 5, name: "TailwindCSS", src: "/icons/frontend/TailwindCSS-Dark.svg" },
  { id: 6, name: "NodeJS", src: "/icons/backend/NodeJS-Dark.svg" },
  { id: 7, name: "ExpressJS", src: "/icons/backend/ExpressJS-Dark.svg" },
  { id: 8, name: "GoLang", src: "/icons/backend/GoLang.svg" },
  { id: 9, name: "Postman", src: "/icons/backend/Postman.svg" },
  { id: 10, name: "MongoDB", src: "/icons/database&cloud/MongoDB.svg" },
  {
    id: 11,
    name: "PostgreSQL",
    src: "/icons/database&cloud/PostgreSQL-Dark.svg",
  },
  { id: 12, name: "Supabase", src: "/icons/database&cloud/Supabase-Dark.svg" },
  { id: 13, name: "Vercel", src: "/icons/database&cloud/Vercel-Dark.svg" },
];

export default function Skill() {
  return (
    <div id="skill" className="w-full flex flex-col items-center justify-center py-10">
      <div className="text-neutral-900 text-4xl flex items-center justify-center">
        <p>Skill</p>
        <Library size={45} className="ml-4" />
      </div>

      <div className="relative w-[90%] md:w-[70%] overflow-hidden mt-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-neutral-100/90 to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-neutral-100/90 to-transparent" />

        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {techStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center min-w-fit"
            >
              <Image src={item.src} alt={item.name} width={60} height={60} />
            </div>
          ))}

          {techStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center min-w-fit"
            >
              <Image src={item.src} alt={item.name} width={60} height={60} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
