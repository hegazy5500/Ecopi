import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPi(value: number) {
  return `${value.toFixed(2)} PI`;
}

export function levelFromPoints(points: number) {
  return Math.max(1, Math.floor(points / 250) + 1);
}
