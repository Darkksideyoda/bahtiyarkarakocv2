"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import { domAnimation } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
}

export default function MotionWrapper({ children }: MotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        reducedMotion="user"
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}