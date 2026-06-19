"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const iconMap = { Target, Eye, ShieldCheck };

const cardSpring = { type: "spring", stiffness: 280, damping: 30, mass: 1 };

function HorizontalCard({ item, isOpen, onMouseEnter }) {
  const Icon = iconMap[item.iconName];

  return (
    <motion.div
      layout
      transition={cardSpring}
      onMouseEnter={onMouseEnter}
      className={[
        "rounded-card border bg-white overflow-hidden",
        isOpen
          ? "flex-[2] shadow-gsr-lg border-gsr-gold/40"
          : "flex-1 shadow-gsr-sm hover:shadow-gsr-md border-gsr-border cursor-pointer",
      ].join(" ")}
    >
      <div className="flex flex-row h-full min-h-[380px] p-8">
        {/* Text block — ALWAYS visible */}
        <div
          className={[
            "flex flex-col w-full min-w-0 h-full justify-between",
            isOpen ? "mr-4" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="font-title text-xs font-semibold uppercase tracking-wider text-gsr-gold-dark">
            {item.number}
          </span>
          <div>
            <h3 className="font-title text-xl font-semibold text-gsr-text-primary leading-tight">
              {item.title}
            </h3>
            <div className="mt-3">
              {item.values ? (
                <div className="space-y-3">
                  <p className="font-sans text-sm text-gsr-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.values.map((v) => (
                      <span
                        key={v.label}
                        title={v.detail}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-gsr-text-primary border border-gsr-gold/50 rounded-full bg-gsr-gold/5 hover:bg-gsr-gold/10 transition-colors cursor-help"
                      >
                        {v.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="font-sans text-sm text-gsr-text-secondary leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Icon block — animated with Framer Motion */}
        <motion.div
          layout
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.85 }}
          transition={{
            layout: { type: "spring", stiffness: 280, damping: 30 },
            opacity: { duration: 0.25, delay: isOpen ? 0.15 : 0 },
            scale: { duration: 0.25, delay: isOpen ? 0.15 : 0 },
          }}
          className={[
            "rounded-card flex items-center justify-center bg-gsr-surface/50 h-full shrink-0 overflow-hidden",
            isOpen ? "w-full max-w-[200px]" : "w-0 max-w-0",
          ].join(" ")}
        >
          {Icon && <Icon size={48} style={{ color: "#C9A227" }} />}
        </motion.div>
      </div>
    </motion.div>
  );
}

function VerticalCard({ item }) {
  const Icon = iconMap[item.iconName];

  return (
    <div className="rounded-card border border-gsr-border bg-white shadow-gsr-sm overflow-hidden">
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col w-full min-w-0 gap-6">
          <span className="font-title text-xs font-semibold uppercase tracking-wider text-gsr-gold-dark">
            {item.number}
          </span>
          <div>
            <h3 className="font-title text-lg font-semibold text-gsr-text-primary leading-tight">
              {item.title}
            </h3>
            <div className="mt-3">
              {item.values ? (
                <div className="space-y-3">
                  <p className="font-sans text-sm text-gsr-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.values.map((v) => (
                      <span
                        key={v.label}
                        title={v.detail}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-gsr-text-primary border border-gsr-gold/50 rounded-full bg-gsr-gold/5 hover:bg-gsr-gold/10 transition-colors cursor-help"
                      >
                        {v.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="font-sans text-sm text-gsr-text-secondary leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-card flex items-center justify-center bg-gsr-surface/50 w-full h-[100px]">
          {Icon && <Icon size={48} style={{ color: "#C9A227" }} />}
        </div>
      </div>
    </div>
  );
}

export function PillarCard({ item, isOpen, isVertical, onMouseEnter }) {
  if (isVertical) {
    return <VerticalCard item={item} />;
  }
  return <HorizontalCard item={item} isOpen={isOpen} onMouseEnter={onMouseEnter} />;
}