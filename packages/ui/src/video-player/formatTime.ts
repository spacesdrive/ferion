// 75 -> "1:15", 3725 -> "1:02:05"
export default function formatTime(time: number): string {
  if (!time || Number.isNaN(time)) return '0:00';
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = String(Math.floor(time % 60)).padStart(2, '0');

  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${seconds}`;
  return `${minutes}:${seconds}`;
}

export function chapterAt<T extends { startTime: number }>(chapters: T[], time: number): T | undefined {
  return chapters.find((chapter, index) => {
    const next = chapters[index + 1];
    return time >= chapter.startTime && (!next || time < next.startTime);
  });
}
