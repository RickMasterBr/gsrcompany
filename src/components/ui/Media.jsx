"use client";

import React, { useRef, useEffect } from "react";

/**
 * Premium container for the 3D keychain render video.
 * Runs in an infinite loop, muted, autoplay, with no browser controls.
 * Integrates beautifully with the light-theme background.
 */
export function ShieldVideo({
  src = "/assets/chaveiro_shield.mp4",
  poster = "/assets/chaveiro_poster.jpg",
  className = "",
  aspectRatio = "aspect-square",
  variant = "card", // "card" | "background"
  ...props
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video is muted and plays programmatically on mount/src change
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay programmatic launch prevented:", err);
      });
    }
  }, [src]);

  if (variant === "background") {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-card overflow-hidden bg-gsr-surface border border-gsr-border p-0 shadow-gsr-sm hover:shadow-gsr-md transition-shadow duration-300 flex items-center justify-center ${className}`}
      {...props}
    >
      {/* Decorative inner border */}
      <div className="absolute inset-2 border border-gsr-text-primary/5 rounded-gsr pointer-events-none z-10"></div>
      
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[25%_50%] mix-blend-multiply opacity-90 transition-opacity duration-500 hover:opacity-100"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gsr-text-secondary/50 font-sans p-6 text-center">
          <svg
            className="w-12 h-12 mb-3 text-gsr-gold animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider">GSR Loop de Vídeo (3D)</span>
          <span className="text-[10px] text-gsr-text-secondary mt-1">Carregando chaveiro em loop...</span>
        </div>
      )}
    </div>
  );
}

/**
 * Image container for the renders of the keychain.
 * Features a grayscale-to-color transition, zoom-in effect, and a dark shield logo style.
 */
export function ShieldImage({
  src,
  alt = "Render Chaveiro GSR",
  className = "",
  aspectRatio = "aspect-square",
  ...props
}) {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-card overflow-hidden bg-white border border-gsr-border p-6 shadow-gsr-sm hover:border-gsr-gold hover:shadow-gsr-md transition-all duration-500 flex items-center justify-center group ${className}`}
      {...props}
    >
      {/* Visual Frame */}
      <div className="absolute inset-3 border border-gsr-border/40 rounded-gsr pointer-events-none z-10 transition-colors duration-500 group-hover:border-gsr-gold/20"></div>

      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gsr-text-secondary/50 font-sans p-6 text-center select-none">
          <svg
            className="w-10 h-10 mb-3 text-gsr-text-secondary/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
            <polyline points="21 15 16 10 5 21" strokeWidth="1.5" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider">Render Chaveiro GSR</span>
          <span className="text-[10px] text-gsr-text-secondary mt-1">Fundo claro · Logo variante escura</span>
        </div>
      )}
    </div>
  );
}
