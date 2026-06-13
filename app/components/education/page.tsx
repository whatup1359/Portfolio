"use client";

import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "../ui";

const items = [
  {
    period: "2016 — 2019",
    title: "High School",
    place: "Suankularb Wittayalai Thonburi",
    details: ["Arts — Japanese Program"],
  },
  {
    period: "2020 — 2023",
    title: "Bachelor's Degree",
    place: "Kasetsart University, Bangkhen",
    details: ["B.Sc. in Geography", "TOEIC: 730"],
  },
];

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-28">
      <SectionHeading index="02" title="Education" Icon={GraduationCap} />

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((edu, i) => (
          <Reveal key={edu.title} delay={i * 0.12}>
            <div className="card group h-full p-7 hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-medium tracking-wide text-muted">
                  {edu.period}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {edu.title}
              </h3>
              <p className="mt-1 font-medium text-ink/70">{edu.place}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {edu.details.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
export default Education;
