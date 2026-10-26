import { AnimatePresence, motion } from 'motion/react';
import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import formatTime, { chapterAt } from './formatTime.ts';
import type { Chapter } from './types.ts';

export interface ProgressBarProps {
  currentTime: number;
  duration: number;
  buffered: number;
  chapters: Chapter[];
  onSeek: (time: number) => void;
}

const KEY_STEP_SECONDS = 5;

export default function ProgressBar({ currentTime, duration, buffered, chapters, onSeek }: ProgressBarProps) {
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const hoverPercent = hoverTime !== null && duration > 0 ? (hoverTime / duration) * 100 : 0;

  const timeAt = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    return Math.max(0, Math.min(percent * duration, duration));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') onSeek(currentTime - KEY_STEP_SECONDS);
    if (event.key === 'ArrowRight') onSeek(currentTime + KEY_STEP_SECONDS);
  };

  return (
    <div
      role="slider"
      tabIndex={0}
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
      onClick={event => duration > 0 && onSeek(timeAt(event))}
      onMouseMove={event => duration > 0 && setHoverTime(timeAt(event))}
      onMouseLeave={() => setHoverTime(null)}
      onKeyDown={handleKeyDown}
      className="group/progress relative h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all hover:h-2 focus-visible:outline-2 focus-visible:outline-white"
    >
      <div className="absolute inset-y-0 left-0 rounded-full bg-white/40" style={{ width: `${buffered}%` }} />
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
        style={{ width: `${progress}%` }}
      />
      {duration > 0 &&
        chapters
          .slice(1)
          .map(chapter => (
            <div
              key={chapter.startTime}
              className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-black/50"
              style={{ left: `${(chapter.startTime / duration) * 100}%` }}
            />
          ))}
      <div
        className="absolute top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-lg transition-opacity group-hover/progress:opacity-100"
        style={{ left: `${progress}%` }}
      />

      <AnimatePresence>
        {hoverTime !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="pointer-events-none absolute bottom-full z-50 mb-4 flex -translate-x-1/2 flex-col items-center gap-0.5 rounded-lg border border-white/10 bg-black/90 px-2 py-1 text-xs whitespace-nowrap text-white"
            style={{ left: `${hoverPercent}%` }}
          >
            {chapters.length > 0 && (
              <span className="font-medium text-white/90">{chapterAt(chapters, hoverTime)?.title}</span>
            )}
            <span className={chapters.length > 0 ? 'text-white/70' : undefined}>{formatTime(hoverTime)}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
