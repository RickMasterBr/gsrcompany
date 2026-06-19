"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, Zap } from "lucide-react";
import { Badge } from "./Badge";
import { Heading, Body } from "./Typography";
import { ShieldVideo } from "./Media";

const iconMap = { ShieldCheck, Award, Zap };

export function DifferentiatorsTabs({ items = [], mediaSrc, mediaPoster, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const n = items.length;
  const gap = 8; // px, equivalente ao gap-2
  const padding = 8; // px, equivalente ao p-2

  const indicatorStyle = {
    width: `calc((100% - ${padding * 2}px - ${(n - 1) * gap}px) / ${n})`,
    left: `calc(${padding}px + ${activeIndex} * ((100% - ${padding * 2}px - ${(n - 1) * gap}px) / ${n} + ${gap}px))`,
  };

  if (!activeItem) return null;

  return (
    <div className={className}>
      {/* Navegação em pílula */}
      <div className="bg-gsr-surface rounded-full w-full p-2 flex flex-col sm:flex-row gap-2 relative">
        <div
          className="hidden sm:block absolute top-2 bottom-2 bg-white border border-gsr-border rounded-full shadow-gsr-sm transition-all duration-300 ease-out pointer-events-none"
          style={indicatorStyle}
        />
        {items.map((item, idx) => {
          const Icon = iconMap[item.iconName];
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-full transition-colors duration-300 sm:flex-1 relative z-10 cursor-pointer ${
                isActive
                  ? "bg-white shadow-gsr-sm text-gsr-gold-dark sm:bg-transparent sm:shadow-none"
                  : "bg-transparent text-gsr-text-secondary hover:text-gsr-text-primary"
              }`}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Painel de conteúdo */}
      <div className="bg-white border border-gsr-border rounded-card shadow-gsr-sm flex flex-col lg:flex-row lg:items-center gap-6 mt-4 p-3">
        <div className="w-full lg:w-[45%]">
          <ShieldVideo src={mediaSrc} poster={mediaPoster} aspectRatio="aspect-[4/3]" className="w-full" />
        </div>
        <div className="w-full lg:flex-1 px-3 pb-3 lg:px-6 lg:pb-6">
          <Badge variant="primary">{activeItem.tag}</Badge>
          <Heading level={3} className="mt-4 mb-3">{activeItem.title}</Heading>
          <Body variant="secondary">{activeItem.description}</Body>
        </div>
      </div>
    </div>
  );
}
