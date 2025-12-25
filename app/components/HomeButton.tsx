"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const scrollToPosition = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const scrollThreshold = 400;

const HomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const transitionClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <>
      <div
        className={`fixed bottom-20 right-10 z-45 transition-all duration-600 ease-in-out ${transitionClasses} ${
          !isVisible ? "" : ""
        }`}
      >
        <p
          onClick={() => scrollToPosition(0)}
          className="cursor-pointer shadow-xl hover:shadow-xl flex items-center justify-center bg-neutral-900 text-white px-4 py-4 rounded-full hover:scale-105 transition-all ease-in-out duration-300"
        >
          <ChevronUp className="animate-bounce" />
        </p>
      </div>
    </>
  );
};
export default HomeButton;
