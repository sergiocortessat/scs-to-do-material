// web-vitals.d.ts
declare module 'web-vitals' {
    export interface Metric {
      name: string;
      value: number;
      delta: number;
      entries: PerformanceEntry[];
      id: string;
    }
  
    export interface ReportHandler {
      (metric: Metric): void;
    }
  
    export function getCLS(onReport: ReportHandler): void;
    export function getFCP(onReport: ReportHandler): void;
    export function getFID(onReport: ReportHandler): void;
    export function getLCP(onReport: ReportHandler): void;
    export function getTTFB(onReport: ReportHandler): void;
  }
  