"use client";

import React, { useEffect, useState } from "react";
import { ShieldVideo } from "./Media";

/**
 * Hero background video — desktop only (lg:+). Mobile/tablet renders nothing:
 * no autoplay, no decode cost, and no risk of the framing/contrast issues
 * that only ever showed up there.
 */
export function HeroMedia({ src, poster, className = "" }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);
    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);
    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  if (!isDesktop) return null;

  return <ShieldVideo variant="background" src={src} poster={poster} className={className} />;
}
