import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clamps a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Formats a period string for display
 */
export function formatPeriod(period: string): string {
  return period.replace(/·/g, '•');
}

/**
 * Truncates text in the middle with ellipsis
 */
export function truncateMiddle(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  
  const start = Math.ceil((maxLength - 3) / 2);
  const end = Math.floor((maxLength - 3) / 2);
  
  return `${text.slice(0, start)}...${text.slice(-end)}`;
}

/**
 * Formats a date string to a readable format
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}