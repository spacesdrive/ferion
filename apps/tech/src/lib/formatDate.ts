// "2026-02" -> "Feb 2026"
export function formatMonth(yearMonth: string): string {
  const [year = 0, month = 1] = yearMonth.split('-').map(Number);
  return new Date(year, month - 1).toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

function toMonthIndex(yearMonth: string): number {
  const [year = 0, month = 1] = yearMonth.split('-').map(Number);
  return year * 12 + (month - 1);
}

// counts both end months, the way tenures are reported; a null end means the role is still going
export function formatDuration(start: string, end: string | null): string {
  const now = new Date();
  const endIndex = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
  const totalMonths = endIndex - toMonthIndex(start) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  return parts.join(' ');
}
