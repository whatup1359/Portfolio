import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Starfield from "./components/Starfield";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nattawut Chanput — Web Developer",
  description: "Portfolio and Resume of Nattawut Chanput, a web developer.",
};

// Set theme before paint to avoid a flash of the wrong color scheme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${sourceCodePro.className} ${sourceCodePro.variable} antialiased text-ink`}
      >
        <div className="ambient" />
        <div className="texture" />
        <Starfield />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
