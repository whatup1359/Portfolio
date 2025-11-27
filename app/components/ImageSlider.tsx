"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [useVariant, setUseVariant] = useState<"v1" | "v2">("v1");
  const [isAnimating, setIsAnimating] = useState(false);
  const [disableDrag, setDisableDrag] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleShowModal = (img: any) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const images: {
    id: number;
    name: string;
    src: string;
    des: string;
    web: string;
  }[] = [
    {
      id: 1,
      name: "W Camp",
      src: "/ports/p-1.png",
      des: "NextJS + TailwindCSS + Express",
      web: "https://wut-camp.vercel.app/",
    },
    {
      id: 2,
      name: "Image Slider",
      src: "/ports/p-2.png",
      des: "NextJS + TailwindCSS",
      web: "https://wuts-image-slider.vercel.app/",
    },
    {
      id: 3,
      name: "Hover Animation",
      src: "/ports/p-4.png",
      des: "NextJS + TailwindCSS + GSAP",
      web: "",
    },
    {
      id: 4,
      name: "Hover Animation",
      src: "/ports/p-3.png",
      des: "NextJS + TailwindCSS + GSAP",
      web: "https://wuts-hover-animation.vercel.app/",
    },
    {
      id: 5,
      name: "Go Ecommerce",
      src: "/ports/p-4.png",
      des: "NextJS + Golang(Fiber)",
      web: "",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants1 = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 4 },
    right1: { x: "50%", scale: 0.7, zIndex: 4 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
  };

  const imageVariants2 = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 4 },
    right1: { x: "50%", scale: 0.7, zIndex: 4 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 2 },
  };

  const handleNext = () => {
    setUseVariant("v1");
    setPositionIndexes((prev) => prev.map((p) => (p + 1) % images.length));
  };

  const handlePrev = () => {
    setUseVariant("v2");
    setPositionIndexes((prev) =>
      prev.map((p) => (p - 1 + images.length) % images.length)
    );
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full z-10">
        <div className="absolute mb-[600px] text-4xl flex items-center justify-center">
          <p>Portfolio</p>
        </div>

        {images.map((item, index) => {
          const currentPos = positions[positionIndexes[index]];
          const isCenter = currentPos === "center";

          return (
            <motion.img
              key={item.id}
              drag={!disableDrag && isCenter ? "x" : false}
              dragElastic={0.2}
              dragMomentum={false}
              dragPropagation={false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, i) => {
                if (i.offset.x < -50) handleNext();
                else if (i.offset.x > 50) handlePrev();

                setTimeout(() => setIsDragging(false), 50);
              }}
              onAnimationStart={() => {
                setIsAnimating(true);
                setDisableDrag(true);
              }}
              onAnimationComplete={() => {
                setIsAnimating(false);
                setDisableDrag(false);
              }}
              onClick={() => {
                if (isDragging) return;
                if (isCenter && !isAnimating) handleShowModal(item);
              }}
              src={item.src}
              alt={item.name}
              className="cursor-pointer rounded-[12px]"
              initial="center"
              animate={currentPos}
              variants={useVariant === "v1" ? imageVariants1 : imageVariants2}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: "40%", position: "absolute" }}
            />
          );
        })}

        <div className="mt-[600px] flex items-center justify-between w-[100px]">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handlePrev}
            className="cursor-pointer px-2 py-4 rounded-lg hover:scale-130 transition-all duration-300"
          >
            <ChevronLeft size={30} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleNext}
            className="cursor-pointer px-2 py-4 rounded-lg hover:scale-130 transition-all duration-300"
          >
            <ChevronRight size={30} />
          </motion.button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-100"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-100 rounded-2xl p-4 max-w-[800px] w-[90%] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage?.src}
              className="rounded-lg object-cover shadow-xl w-full  mb-4"
            />

            <div className="mx-3">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold mb-1">
                  {selectedImage?.name}
                </p>
                <div className="hover:scale-110 transition-all duration-200">
                  <Link href={selectedImage?.web}><ExternalLink /></Link>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{selectedImage?.des}</p>
            </div>

            <motion.button
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 500, damping: 20 },
              }}
              onClick={handleCloseModal}
              className="cursor-pointer w-full bg-black text-white py-2 rounded-lg mt-2 transition-transform duration-initial"
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default ImageSlider;
