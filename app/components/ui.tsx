"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { reveal } from "./motion";

/* Scroll-reveal wrapper — fades + lifts content into view once */
export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Editorial section header: index number + title, left-aligned, with a rule */
export const SectionHeading = ({
  index,
  title,
  Icon,
}: {
  index: string;
  title: string;
  Icon: LucideIcon;
}) => (
  <Reveal>
    <div className="mb-12 flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
      <div className="flex items-baseline gap-4">
        <span className="text-sm font-medium text-accent">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <Icon className="shrink-0 text-muted/50" size={26} strokeWidth={1.5} />
    </div>
  </Reveal>
);
