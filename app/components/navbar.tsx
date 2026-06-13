"use client";

import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Github, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navbarVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.2 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 26, staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const navLinks = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skill", id: "skill" },
  { name: "Project", id: "portfolio" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1r2IXvDEwviSAFYJQDzVvdpMaRBghGyCl/view?usp=sharing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-[0_10px_40px_-24px_rgba(0,0,0,0.5)]" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToId("home")}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink text-bg font-semibold text-sm transition-transform duration-300 group-hover:scale-105">
              NC
            </span>
            <span className="hidden sm:block text-sm font-medium text-muted group-hover:text-ink transition-colors">
              nattawut
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="group relative px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors cursor-pointer"
              >
                {item.name}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              target="_blank"
              href="https://github.com/whatup1359"
              aria-label="GitHub"
              className="grid place-items-center w-10 h-10 rounded-xl border border-[var(--color-line)] text-ink/70 hover:text-ink hover:scale-105 transition-all duration-300"
            >
              <Github size={18} />
            </Link>
            <Link
              target="_blank"
              href={RESUME_URL}
              className="hidden sm:flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm font-medium text-bg hover:scale-105 transition-all duration-300"
            >
              <FileText size={16} />
              Resume
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-[var(--color-line)] text-ink/80 hover:scale-105 transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden glass mt-2 rounded-2xl p-2 shadow-xl"
            >
              {navLinks.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => {
                    scrollToId(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-accent-soft hover:text-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div variants={itemVariants} className="p-1">
                <Link
                  target="_blank"
                  href={RESUME_URL}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-bg"
                >
                  <FileText size={16} />
                  Resume
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
export default Navbar;
