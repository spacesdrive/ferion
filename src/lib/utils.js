import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatMonth(yearMonth) {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Date(year, month - 1).toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

// Duration is inclusive of both the start and end month, matching how tenures
// are conventionally reported (e.g. Jan-Jan is "1 month", not "0 months").
// A null `end` computes through the current month, so an ongoing role keeps
// counting up on every page load rather than needing a manual update.
export function formatDuration(start, end) {
  const toMonthIndex = (yearMonth) => {
    const [year, month] = yearMonth.split('-').map(Number);
    return year * 12 + (month - 1);
  };
  const now = new Date();
  const endIndex = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
  const totalMonths = endIndex - toMonthIndex(start) + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  return parts.join(' ');
}
