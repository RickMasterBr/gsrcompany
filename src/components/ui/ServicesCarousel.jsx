"use client";

import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./Card";

export function ServicesCarousel({ items = [], onSelect, className = "" }) {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { root: container, threshold: [0.6] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const scrollToIndex = (idx) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className={className}>
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((service, idx) => (
          <div
            key={service.slug}
            ref={(el) => (cardRefs.current[idx] = el)}
            data-index={idx}
            className="snap-center shrink-0 w-[82%] sm:w-[45%] md:w-auto md:shrink"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkText="Detalhes da Atuação"
              onClick={() => onSelect(service.slug)}
              className="h-full animate-fade-up-blur"
              style={{ animationDelay: `${idx * 100}ms` }}
            />
          </div>
        ))}
      </div>

      <div className="flex md:hidden items-center justify-center gap-2 mt-5">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir para o serviço ${idx + 1}`}
            onClick={() => scrollToIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? "w-6 bg-gsr-gold" : "w-1.5 bg-gsr-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
