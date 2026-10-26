// 1250 -> "1.3K runs", 3_500_000 -> "3.5M runs"
export default function formatRunCount(count: number, unit = 'runs'): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M ${unit}`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K ${unit}`;
  return `${count} ${unit}`;
}
