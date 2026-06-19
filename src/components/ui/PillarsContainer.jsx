"use client";

import React, { useState } from "react";
import { PillarCard } from "./PillarCard";

export function PillarsContainer({ items = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

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

      {/* Mobile: stacked vertical */}
      <div className="md:hidden flex flex-col gap-4">
        {items.map((item) => (
          <PillarCard
            key={item.id}
            item={item}
            isOpen={true}
            isVertical={true}
            onMouseEnter={() => {}}
          />
        ))}
      </div>
    </div>
  );
}