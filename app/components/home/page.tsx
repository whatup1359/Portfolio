"use client";

import { ArrowDown, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6"
    >
      {/* concrete backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-[3rem]">
        <Image
          src="/backgrounds/concretebg2.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/82 dark:bg-bg/90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Web Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Nattawut
            <br />
            Chanput<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md text-pretty text-muted lg:mx-0"
          >
            I build clean, responsive web apps with React, Next.js and Go —
            and enjoy learning something new on every project.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              onClick={() => scrollToId("portfolio")}
              className="cursor-pointer rounded-full bg-ink px-7 py-3 text-sm font-medium text-bg transition-all duration-300 hover:scale-105"
            >
              View my work
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="cursor-pointer rounded-full border border-[var(--color-line)] px-7 py-3 text-sm font-medium text-ink transition-all duration-300 hover:scale-105 hover:border-ink/30"
            >
              About me
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-5 text-muted lg:justify-start"
          >
            <Link
              href="https://github.com/whatup1359"
              target="_blank"
              aria-label="GitHub"
              className="transition-colors hover:text-ink"
            >
              <Github size={20} />
            </Link>
            <Link
              href="mailto:wut.nattawut3218@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-ink"
            >
              <Mail size={20} />
            </Link>
            <span className="flex items-center gap-2 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          variants={item}
          className="order-1 mx-auto lg:order-2 lg:ml-auto"
        >
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-accent/40" />
            <div className="relative h-72 w-60 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-surface sm:h-80 sm:w-72">
              <Image
                src="/profile1.png"
                alt="Nattawut Chanput"
                fill
                priority
                className="object-cover object-[50%_25%]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </motion.button>
    </section>
  );
};
export default Home;
