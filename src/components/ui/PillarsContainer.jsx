"use client";

import React, { useEffect, useRef, useState } from "react";
import { PillarCard } from "./PillarCard";

export function PillarsContainer({ items = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const mobileScrollRef = useRef(null);
  const mobileCardRefs = useRef([]);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setMobileActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { root: container, threshold: [0.6] }
    );

    mobileCardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const scrollToMobileIndex = (idx) => {
    mobileCardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className={className}>
      {/* Desktop: horizontal hover-expand (xl / 1280px+) */}
      <div
        className="hidden xl:flex gap-4"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {items.map((item, idx) => (
          <PillarCard
            key={item.id}
            item={item}
            isOpen={activeIndex === idx}
            isVertical={false}
            onMouseEnter={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* Tablet: 2-top / 1-bottom (md to xl) */}
      <div className="hidden md:grid xl:hidden grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={
              idx === items.length - 1
                ? "col-span-2 max-w-[50%] mx-auto w-full"
                : ""
            }
          >
            <PillarCard
              item={item}
              isOpen={true}
              isVertical={true}
              onMouseEnter={() => {}}
            />
          </div>
        ))}
      </div>

      {/* Mobile: horizontal swipe carousel */}
      <div className="md:hidden">
        <div
          ref={mobileScrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (mobileCardRefs.current[idx] = el)}
              data-index={idx}
              className="snap-center shrink-0 w-[82%]"
            >
              <PillarCard item={item} isOpen={true} isVertical={true} onMouseEnter={() => {}} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ir para ${item.title}`}
              onClick={() => scrollToMobileIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === mobileActiveIndex ? "w-6 bg-gsr-gold" : "w-1.5 bg-gsr-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}