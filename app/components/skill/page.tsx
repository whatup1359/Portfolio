"use client";

import { motion } from "framer-motion";
import { Library } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "../ui";

const techStack = [
  { id: 1, name: "HTML", src: "/icons/frontend/HTML.svg" },
  { id: 2, name: "JavaScript", src: "/icons/frontend/JavaScript.svg" },
  { id: 3, name: "React", src: "/icons/frontend/React-Dark.svg" },
  { id: 4, name: "Next.js", src: "/icons/frontend/NextJS-Dark.svg" },
  { id: 5, name: "TailwindCSS", src: "/icons/frontend/TailwindCSS-Dark.svg" },
  { id: 6, name: "Node.js", src: "/icons/backend/NodeJS-Dark.svg" },
  { id: 7, name: "Express", src: "/icons/backend/ExpressJS-Dark.svg" },
  { id: 8, name: "GoLang", src: "/icons/backend/GoLang.svg" },
  { id: 9, name: "Postman", src: "/icons/backend/Postman.svg" },
  { id: 10, name: "MongoDB", src: "/icons/database&cloud/MongoDB.svg" },
  { id: 11, name: "PostgreSQL", src: "/icons/database&cloud/PostgreSQL-Dark.svg" },
  { id: 12, name: "Supabase", src: "/icons/database&cloud/Supabase-Dark.svg" },
  { id: 13, name: "Vercel", src: "/icons/database&cloud/Vercel-Dark.svg" },
];

const Chip = ({ name, src }: { name: string; src: string }) => (
  <div className="card flex min-w-fit items-center gap-3 rounded-2xl px-5 py-3">
    <Image src={src} alt={name} width={32} height={32} />
    <span className="text-sm font-medium text-ink/80">{name}</span>
  </div>
);

const Row = ({
  direction = "left",
  duration = 35,
}: {
  direction?: "left" | "right";
  duration?: number;
}) => (
  <motion.div
    className="flex w-max gap-4"
    animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
    transition={{ duration, ease: "linear", repeat: Infinity }}
  >
    {[...techStack, ...techStack].map((item, i) => (
      <Chip key={`${item.id}-${i}`} name={item.name} src={item.src} />
    ))}
  </motion.div>
);

export default function Skill() {
  return (
    <section id="skill" className="scroll-mt-24 py-24 sm:py-28">
      <SectionHeading index="03" title="Skills" Icon={Library} />

      <div className="relative space-y-4 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />

        <Row direction="left" duration={38} />
        <Row direction="right" duration={32} />
      </div>
    </section>
  );
}
