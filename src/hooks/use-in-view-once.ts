"use client";

import { useInView } from "react-intersection-observer";

interface UseInViewOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const { threshold = 0.2, rootMargin = "0px" } = options;
  
  return useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });
}