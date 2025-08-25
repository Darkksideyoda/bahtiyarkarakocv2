/**
 * Centralized motion configuration tokens
 */

export const durations = {
  fast: 0.2,
  base: 0.3,
  slow: 0.45,
} as const;

export const easings = {
  out: 'easeOut',
  inOut: 'easeInOut',
  linear: 'linear',
} as const;

export const viewportDefault = {
  once: true,
  amount: 0.2,
} as const;

export const motionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -24 },
    animate: { opacity: 1, y: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
  },
} as const;

export type MotionVariant = keyof typeof motionVariants;