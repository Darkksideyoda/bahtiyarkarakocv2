'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVital } from '@/lib/analytics/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    reportWebVital(metric);
  });

  return null;
}