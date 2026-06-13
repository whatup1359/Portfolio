import Link from "next/link";
import { Github, Mail, FileText } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1r2IXvDEwviSAFYJQDzVvdpMaRBghGyCl/view?usp=sharing";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12 pt-8">
      <div className="border-t border-ink/10 pt-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">Nattawut Chanput</p>
            <p className="mt-1 text-sm text-muted">
              Built with Next.js + TailwindCSS
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/whatup1359"
              target="_blank"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 text-ink/70 transition-all duration-300 hover:scale-105 hover:text-accent"
            >
              <Github size={18} />
            </Link>
            <Link
              href="mailto:wut.nattawut3218@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 text-ink/70 transition-all duration-300 hover:scale-105 hover:text-accent"
            >
              <Mail size={18} />
            </Link>
            <Link
              href={RESUME_URL}
              target="_blank"
              aria-label="Resume"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 text-ink/70 transition-all duration-300 hover:scale-105 hover:text-accent"
            >
              <FileText size={18} />
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          © 2025 WutDEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
