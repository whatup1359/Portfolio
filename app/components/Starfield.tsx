import type { CSSProperties } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  dur: number;
  delay: number;
  max: number;
  glow: number;
};

/* Hand-placed so they sit in the margins / empty zones, not over body text.
   Biased toward the left & right gutters with a few scattered accents. */
const stars: Star[] = [
  { top: "10%", left: "5%", size: 3, dur: 4.5, delay: 0, max: 0.8, glow: 7 },
  { top: "18%", left: "13%", size: 2, dur: 5.5, delay: 1.2, max: 0.55, glow: 5 },
  { top: "26%", left: "3%", size: 2.5, dur: 6, delay: 2.4, max: 0.7, glow: 6 },
  { top: "8%", left: "92%", size: 3.5, dur: 5, delay: 0.6, max: 0.85, glow: 8 },
  { top: "16%", left: "84%", size: 2, dur: 4.8, delay: 2, max: 0.5, glow: 5 },
  { top: "30%", left: "95%", size: 2.5, dur: 6.5, delay: 1, max: 0.7, glow: 6 },
  { top: "40%", left: "8%", size: 2, dur: 5.2, delay: 3, max: 0.55, glow: 5 },
  { top: "48%", left: "90%", size: 3, dur: 5.8, delay: 1.6, max: 0.75, glow: 7 },
  { top: "55%", left: "4%", size: 2.5, dur: 4.6, delay: 2.8, max: 0.65, glow: 6 },
  { top: "62%", left: "96%", size: 2, dur: 6.2, delay: 0.4, max: 0.5, glow: 5 },
  { top: "70%", left: "11%", size: 3, dur: 5.4, delay: 1.8, max: 0.8, glow: 7 },
  { top: "78%", left: "88%", size: 2.5, dur: 4.9, delay: 3.2, max: 0.65, glow: 6 },
  { top: "85%", left: "6%", size: 2, dur: 6, delay: 0.9, max: 0.55, glow: 5 },
  { top: "90%", left: "93%", size: 3, dur: 5.1, delay: 2.2, max: 0.75, glow: 7 },
  { top: "5%", left: "48%", size: 2, dur: 5.6, delay: 2.6, max: 0.45, glow: 5 },
  { top: "35%", left: "70%", size: 2, dur: 6.4, delay: 1.4, max: 0.5, glow: 5 },
  { top: "58%", left: "30%", size: 2, dur: 5.3, delay: 3.4, max: 0.45, glow: 5 },
  { top: "94%", left: "42%", size: 2.5, dur: 4.7, delay: 0.2, max: 0.6, glow: 6 },
];

const Starfield = () => {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: "var(--color-accent)",
              boxShadow: `0 0 ${s.glow}px var(--color-accent)`,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
              "--max": s.max,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};
export default Starfield;
