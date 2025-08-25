"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    
    const checkMotion = () => {
      setShouldReduceMotion(mediaQuery.matches || coarsePointer.matches);
    };

    checkMotion();
    mediaQuery.addEventListener("change", checkMotion);
    coarsePointer.addEventListener("change", checkMotion);

    return () => {
      mediaQuery.removeEventListener("change", checkMotion);
      coarsePointer.removeEventListener("change", checkMotion);
    };
  }, []);

  return shouldReduceMotion;
}