"use client";

import { User } from "lucide-react";
import { Reveal, SectionHeading } from "../ui";

const traits = ["Quick learner", "Team player", "Adaptable", "Detail-oriented"];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <SectionHeading index="01" title="About" Icon={User} />

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <Reveal className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
            A web developer passionate about learning and development, who easily
            connects with others, adapts quickly to new environments, and is eager
            to apply skills within a development team — committed to building modern
            websites and driving technological growth within the organization.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="space-y-3">
            {traits.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 border-b border-[var(--color-line)] pb-3 text-sm text-muted"
              >
                <span className="text-accent">—</span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
export default About;
