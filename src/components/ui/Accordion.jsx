"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Body } from "./Typography";

export function FAQAccordion({ items = [], defaultOpenIndex = 0, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div
            key={idx}
            className={`bg-white border rounded-card transition-colors duration-300 ${
              isOpen ? "border-gsr-gold/40 shadow-gsr-md" : "border-gsr-border shadow-gsr-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 cursor-pointer"
            >
              <span className="font-sans text-sm md:text-base font-semibold text-gsr-text-primary">
                {item.question}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                  isOpen ? "rotate-45 text-gsr-gold" : "text-gsr-text-secondary"
                }`}
              />
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <Body variant="secondary" className="px-5 md:px-6 pb-5 md:pb-6 text-sm">
                  {item.answer}
                </Body>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
