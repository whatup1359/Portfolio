"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgression = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed bottom-0 left-0 right-0 h-1 bg-neutral-900 origin-left z-100"
      />
    </>
  );
};

export default ScrollProgression;
