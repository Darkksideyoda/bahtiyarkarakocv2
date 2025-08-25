"use client";

import { m } from "framer-motion";
import type { HTMLMotionProps, MotionStyle } from "framer-motion";
import { forwardRef } from "react";
import {
  durations,
  easings,
  viewportDefault,
  motionVariants,
  type MotionVariant,
} from "@/lib/motion-tokens";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Ekstra ayarlar (projeye özgü) */
type ExtraProps = {
  variant?: MotionVariant;
  delay?: number;
  duration?: keyof typeof durations;
  /** Framer Motion viewport opts – sade tutuyoruz */
  viewport?: any;
};

/** FM’in kontrol ettiği anahtarları dışarıda bırak (biz set edeceğiz) */
type StripFMKeys<T> = Omit<
  T,
  "transition" | "initial" | "animate" | "whileInView" | "variants"
>;

export type MotionDivProps = StripFMKeys<HTMLMotionProps<"div">> & ExtraProps;
export type MotionSpanProps = StripFMKeys<HTMLMotionProps<"span">> & ExtraProps;
export type MotionButtonProps = StripFMKeys<HTMLMotionProps<"button">> &
  ExtraProps;

/* ---------------------------------- DIV ---------------------------------- */

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  (
    {
      variant = "fade",
      delay = 0,
      duration = "base",
      className,
      style,
      viewport = viewportDefault,
      children,
      ...rest
    },
    ref
  ) => {
    const reduce = useReducedMotion();
    const conf = motionVariants[variant];

    return (
      <m.div
        ref={ref}
        // exactOptionalPropertyTypes uyumu: undefined ise hiç geçme
        {...(className ? { className } : {})}
        {...(style ? ({ style } as { style: MotionStyle }) : {})}
        initial={conf.initial}
        whileInView={conf.animate}
        viewport={viewport}
        transition={{
          duration: reduce ? 0.1 : durations[duration],
          ease: easings.out,
          delay: reduce ? 0 : delay,
        }}
        {...rest}
      >
        {children}
      </m.div>
    );
  }
);
MotionDiv.displayName = "MotionDiv";

/* --------------------------------- SPAN ---------------------------------- */

export const MotionSpan = forwardRef<HTMLSpanElement, MotionSpanProps>(
  (
    {
      variant = "fade",
      delay = 0,
      duration = "base",
      className,
      style,
      viewport = viewportDefault,
      children,
      ...rest
    },
    ref
  ) => {
    const reduce = useReducedMotion();
    const conf = motionVariants[variant];

    return (
      <m.span
        ref={ref}
        {...(className ? { className } : {})}
        {...(style ? ({ style } as { style: MotionStyle }) : {})}
        initial={conf.initial}
        whileInView={conf.animate}
        viewport={viewport}
        transition={{
          duration: reduce ? 0.1 : durations[duration],
          ease: easings.out,
          delay: reduce ? 0 : delay,
        }}
        {...rest}
      >
        {children}
      </m.span>
    );
  }
);
MotionSpan.displayName = "MotionSpan";

/* -------------------------------- BUTTON --------------------------------- */

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      variant = "fade",
      delay = 0,
      duration = "base",
      className,
      style,
      viewport = viewportDefault,
      children,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const reduce = useReducedMotion();
    const conf = motionVariants[variant];

    return (
      <m.button
        ref={ref}
        type={type}
        {...(className ? { className } : {})}
        {...(style ? ({ style } as { style: MotionStyle }) : {})}
        initial={conf.initial}
        whileInView={conf.animate}
        viewport={viewport}
        transition={{
          duration: reduce ? 0.1 : durations[duration],
          ease: easings.out,
          delay: reduce ? 0 : delay,
        }}
        {...rest}
      >
        {children}
      </m.button>
    );
  }
);
MotionButton.displayName = "MotionButton";
