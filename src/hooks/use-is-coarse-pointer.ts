"use client";

import { useEffect, useState } from "react";

export function useIsCoarsePointer() {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    
    const checkPointer = () => {
      setIsCoarsePointer(mediaQuery.matches);
    };

    checkPointer();
    mediaQuery.addEventListener("change", checkPointer);

    return () => {
      mediaQuery.removeEventListener("change", checkPointer);
    };
  }, []);

  return isCoarsePointer;
}