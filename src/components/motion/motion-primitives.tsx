"use client";

import { m } from "framer-motion";
import { forwardRef } from "react";
import { durations, easings, viewportDefault, motionVariants, type MotionVariant } from "@/lib/motion-tokens";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MotionProps {
  variant?: MotionVariant;
  delay?: number;
  duration?: keyof typeof durations;
  className?: string;
  children: React.ReactNode;
  viewport?: typeof viewportDefault;
  whileHover?: any;
  whileTap?: any;
  style?: React.CSSProperties;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionProps>(
  ({ 
    variant = "fade", 
    delay = 0, 
    duration = "base", 
    className, 
    children, 
    viewport = viewportDefault,
    whileHover,
    whileTap,
    style,
    onClick,
    onHoverStart,
    onHoverEnd,
    ...props 
  }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variantConfig = motionVariants[variant];

    return (
      <m.div
        ref={ref}
        className={className}
        style={style}
        onClick={onClick}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        initial={variantConfig.initial}
        whileInView={variantConfig.animate}
        viewport={viewport}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={{
          duration: shouldReduceMotion ? 0.1 : durations[duration],
          ease: easings.out,
          delay: shouldReduceMotion ? 0 : delay,
        }}
        {...props}
      >
        {children}
      </m.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv";

export const MotionSpan = forwardRef<HTMLSpanElement, MotionProps>(
  ({ 
    variant = "fade", 
    delay = 0, 
    duration = "base", 
    className, 
    children, 
    viewport = viewportDefault,
    whileHover,
    whileTap,
    style,
    ...props 
  }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variantConfig = motionVariants[variant];

    return (
      <m.span
        ref={ref}
        className={className}
        style={style}
        initial={variantConfig.initial}
        whileInView={variantConfig.animate}
        viewport={viewport}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={{
          duration: shouldReduceMotion ? 0.1 : durations[duration],
          ease: easings.out,
          delay: shouldReduceMotion ? 0 : delay,
        }}
        {...props}
      >
        {children}
      </m.span>
    );
  }
);

MotionSpan.displayName = "MotionSpan";

export const MotionButton = forwardRef<HTMLButtonElement, MotionProps & { type?: "button" | "submit" | "reset" }>(
  ({ 
    variant = "fade", 
    delay = 0, 
    duration = "base", 
    className, 
    children, 
    viewport = viewportDefault,
    whileHover,
    whileTap,
    style,
    onClick,
    type = "button",
    ...props 
  }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variantConfig = motionVariants[variant];

    return (
      <m.button
        ref={ref}
        type={type}
        className={className}
        style={style}
        onClick={onClick}
        initial={variantConfig.initial}
        whileInView={variantConfig.animate}
        viewport={viewport}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={{
          duration: shouldReduceMotion ? 0.1 : durations[duration],
          ease: easings.out,
          delay: shouldReduceMotion ? 0 : delay,
        }}
        {...props}
      >
        {children}
      </m.button>
    );
  }
);

MotionButton.displayName = "MotionButton";