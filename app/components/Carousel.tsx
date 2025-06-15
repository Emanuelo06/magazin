'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type CarouselProps = {
  images: string[];
  interval?: number; // Optional autoplay interval in ms
};

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1); 
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => resetTimeout();
  }, [currentIndex, images.length, interval]);

  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      scale: 0.98,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.5, ease: 'easeInOut' as const }
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: { duration: 0.7, ease: 'easeInOut' as const }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      scale: 0.98,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.5, ease: 'easeInOut' as const }
    }),
  };

  return (
    <div className="relative w-full max-w-2xl lg:max-w-4xl mx-auto flex flex-col items-center justify-center bg-black rounded-lg">
      <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center rounded-lg"
            style={{ background: 'transparent' }}
          >
            <Image
              src={images[currentIndex]}
              alt={`carousel-img-${currentIndex}`}
              width={800}
              height={600}
              className="mx-auto my-0 max-h-full max-w-[80%] object-contain select-none pointer-events-none shadow-lg rounded-lg bg-transparent"
              priority={true}
              sizes="(max-width: 768px) 90vw, 800px"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots navigation */}
      <div className="w-full  flex-wrap items-center justify-center gap-2 mt-2 mb-4 z-20 relative hidden sm:flex">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full border border-white transition-colors duration-200 ${currentIndex === idx ? 'bg-white border-gray-600' : 'bg-white/30'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
