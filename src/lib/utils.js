import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { getLenisInstance } from "@/lib/lenis-instance";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPeriod(dateStr) {
  const start = new Date(dateStr);
  const month = start.toLocaleString('en-US', { month: 'short' });
  return `${month} ${start.getFullYear()} to Present`;
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(el, { offset: -84, duration: 1.2 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: 'smooth' });
}
