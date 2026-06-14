"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SectionHeading } from "../ui";

type Project = {
  id: number;
  name: string;
  src: string;
  des: string;
  web: string;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isMobile;
};

const images: Project[] = [
  {
    id: 1,
    name: "W Camp",
    src: "/ports/p-1.webp",
    des: "Next.js + TailwindCSS + Supabase",
    web: "https://wut-camp.vercel.app/",
  },
  {
    id: 2,
    name: "Image Slider",
    src: "/ports/p-2.webp",
    des: "Next.js + TailwindCSS",
    web: "https://wuts-image-slider.vercel.app/",
  },
  {
    id: 3,
    name: "Scroll Animation",
    src: "/ports/p-5.webp",
    des: "Next.js + GSAP",
    web: "https://w-scroll-animation.vercel.app/",
  },
  {
    id: 4,
    name: "Hover Animation",
    src: "/ports/p-3.webp",
    des: "Next.js + TailwindCSS + GSAP",
    web: "https://wuts-hover-animation.vercel.app/",
  },
  {
    id: 5,
    name: "Go Ecommerce",
    src: "/ports/p-4.webp",
    des: "Next.js + Golang (Fiber) + PostgreSQL",
    web: "https://next-frontend-ecom.vercel.app/",
  },
];

const positionsX = ["center", "left1", "left", "right", "right1"];
const positionsY = ["center", "top1", "top", "bottom", "bottom1"];

const imageVariantsX1 = {
  center: { x: "0%", y: 0, scale: 1, zIndex: 5, opacity: 1 },
  left1: { x: "-55%", y: 0, scale: 0.72, zIndex: 4, opacity: 0.85 },
  right1: { x: "55%", y: 0, scale: 0.72, zIndex: 4, opacity: 0.85 },
  left: { x: "-95%", y: 0, scale: 0.5, zIndex: 2, opacity: 0.55 },
  right: { x: "95%", y: 0, scale: 0.5, zIndex: 1, opacity: 0.55 },
};
const imageVariantsX2 = {
  ...imageVariantsX1,
  left: { x: "-95%", y: 0, scale: 0.5, zIndex: 1, opacity: 0.55 },
  right: { x: "95%", y: 0, scale: 0.5, zIndex: 2, opacity: 0.55 },
};
const imageVariantsY1 = {
  center: { y: "0%", x: 0, scale: 1, zIndex: 5, opacity: 1 },
  top1: { y: "-55%", x: 0, scale: 0.72, zIndex: 4, opacity: 0.85 },
  bottom1: { y: "55%", x: 0, scale: 0.72, zIndex: 4, opacity: 0.85 },
  top: { y: "-95%", x: 0, scale: 0.5, zIndex: 2, opacity: 0.55 },
  bottom: { y: "95%", x: 0, scale: 0.5, zIndex: 1, opacity: 0.55 },
};
const imageVariantsY2 = {
  ...imageVariantsY1,
  top: { y: "-95%", x: 0, scale: 0.5, zIndex: 1, opacity: 0.55 },
  bottom: { y: "95%", x: 0, scale: 0.5, zIndex: 2, opacity: 0.55 },
};

const Project = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [useVariant, setUseVariant] = useState<"v1" | "v2">("v1");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const isMobile = useIsMobile();

  const variants = isMobile
    ? useVariant === "v1"
      ? imageVariantsY1
      : imageVariantsY2
    : useVariant === "v1"
    ? imageVariantsX1
    : imageVariantsX2;

  const handleNext = () => {
    setUseVariant("v1");
    setPositionIndexes((prev) => prev.map((p) => (p + 1) % images.length));
  };
  const handlePrev = () => {
    setUseVariant("v2");
    setPositionIndexes((prev) =>
      prev.map((p) => (p - 1 + images.length) % images.length)
    );
  };

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      {/* concrete band */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/concrete.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/82 dark:bg-bg/90" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="Projects" Icon={BriefcaseBusiness} />

        <p className="-mt-8 mb-2 text-sm text-muted">
          Drag or use the arrows — tap the front card for details.
        </p>

      {/* Carousel */}
      <div className="relative mx-auto mt-10 flex h-[420px] w-full items-center justify-center sm:h-[460px]">
        {images.map((item, index) => {
          const currentPos = isMobile
            ? positionsY[positionIndexes[index]]
            : positionsX[positionIndexes[index]];
          const isCenter = currentPos === "center";

          return (
            <motion.div
              key={item.id}
              initial="center"
              animate={currentPos}
              variants={variants}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: isMobile ? "72%" : "42%",
                position: "absolute",
                pointerEvents: isAnimating ? "none" : "auto",
              }}
            >
              <div className="group relative">
                <motion.img
                  drag={isCenter ? (isMobile ? "y" : "x") : false}
                  dragElastic={0.25}
                  dragMomentum={false}
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(_, info) => {
                    if (isMobile) {
                      if (info.offset.y < -50) handleNext();
                      else if (info.offset.y > 50) handlePrev();
                    } else {
                      if (info.offset.x < -50) handleNext();
                      else if (info.offset.x > 50) handlePrev();
                    }
                    setIsDragging(false);
                  }}
                  onAnimationStart={() => setIsAnimating(true)}
                  onAnimationComplete={() => setIsAnimating(false)}
                  onClick={() => {
                    if (isDragging || isAnimating) return;
                    if (isCenter) setSelected(item);
                  }}
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-full rounded-2xl border border-[var(--color-line)] bg-surface shadow-2xl ${
                    isCenter ? "cursor-pointer" : "cursor-grab"
                  }`}
                />

                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-5 py-2 text-sm font-medium text-bg shadow-lg"
                  >
                    {item.name}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handlePrev}
          aria-label="Previous"
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-[var(--color-line)] bg-surface text-ink/70 transition-all duration-300 hover:scale-110 hover:text-accent"
        >
          {isMobile ? <ChevronUp size={22} /> : <ChevronLeft size={22} />}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleNext}
          aria-label="Next"
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-[var(--color-line)] bg-surface text-ink/70 transition-all duration-300 hover:scale-110 hover:text-accent"
        >
          {isMobile ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
        </motion.button>
      </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-surface shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-surface/80 text-ink/70 backdrop-blur transition-colors hover:text-ink"
              >
                <X size={18} />
              </button>

              <img
                src={selected.src}
                alt={selected.name}
                className="w-full object-cover"
              />

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{selected.name}</h3>
                  <p className="mt-1 text-sm text-muted">{selected.des}</p>
                </div>
                <Link
                  href={selected.web}
                  target="_blank"
                  className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:scale-105"
                >
                  Visit <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Project;
