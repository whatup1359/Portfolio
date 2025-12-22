import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const SourceCodePro = Source_Code_Pro({
  variable: "--font-Source_Code_Pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nattawut Chanput",
  description: "Portfolio and Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${SourceCodePro.className} antialiased bg-neutral-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
