"use client";

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  label: string;
}

const vitalsQueue: WebVitalMetric[] = [];
let isFlushScheduled = false;

/**
 * Batches web vitals and sends them in groups to reduce network requests
 */
function flushVitals() {
  if (vitalsQueue.length === 0) return;

  const batch = [...vitalsQueue];
  vitalsQueue.length = 0;
  isFlushScheduled = false;

  // Send batch to analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/vitals', JSON.stringify(batch));
  } else {
    fetch('/api/vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(batch),
    }).catch(console.error);
  }
}

export function reportWebVital(metric: WebVitalMetric) {
  vitalsQueue.push(metric);

  if (!isFlushScheduled) {
    isFlushScheduled = true;
    // Batch vitals to reduce requests
    setTimeout(flushVitals, 1000);
  }
}