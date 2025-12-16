import { Variants } from "framer-motion";

export const variants1: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

export const variants2: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1.5,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};