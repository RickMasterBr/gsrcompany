"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import { Heading, Body } from "./Typography";

export function ProcessSlider({ subtitle, title, description, items = [], onCtaClick, className = "" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, items.length]);

  if (items.length === 0) return null;

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 1 }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.7, ease: [0.32, 0.72, 0, 1] },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.7, ease: [0.32, 0.72, 0, 1] },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const imageVariants = {
    enter: { scale: 1.1 },
    center: { scale: 1.05, transition: { duration: 5, ease: "linear" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const activeSlide = items[currentSlide];

  return (
    <div className={className}>
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <Badge variant="secondary">{subtitle}</Badge>
        <Heading level={2}>{title}</Heading>
        <Body variant="secondary">{description}</Body>
      </div>

      <div
        className="relative w-full overflow-hidden rounded-card shadow-gsr-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative aspect-video">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <motion.div variants={imageVariants} initial="enter" animate="center" className="absolute inset-0">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14"
              >
                <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gsr-gold-light mb-2 md:mb-3">
                  {activeSlide.subtitle}
                </span>
                <h3 className="font-title text-2xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-4 tracking-tight font-normal">
                  {activeSlide.title}
                </h3>
                <p className="font-sans text-sm md:text-base lg:text-lg text-white/80 max-w-lg leading-relaxed">
                  {activeSlide.description}
                </p>

                <button
                  type="button"
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 mt-4 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider rounded-full border border-white/20 hover:bg-white/20 hover:border-gsr-gold/40 transition-all duration-300 hover:gap-3 cursor-pointer"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-gsr-gold/40 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-gsr-gold/40 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o slide ${index + 1}`}
                className="group relative p-1 cursor-pointer"
              >
                <motion.div
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-gsr-gold" : "bg-white/40 group-hover:bg-white/60"
                  }`}
                  animate={{ scale: index === currentSlide ? 1.4 : 1, opacity: index === currentSlide ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
