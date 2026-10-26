import { useEffect, useRef, useState, type MouseEvent } from 'react';

const DOUBLE_TAP_MS = 300;
const SKIP_SECONDS = 10;

export interface DoubleTapAction {
  side: 'left' | 'right';
  id: number;
}

// a tap in the middle toggles play; a double tap on the outer 30% skips ten seconds, like YouTube
export default function useDoubleTap(togglePlay: () => void, skip: (seconds: number) => void) {
  const [action, setAction] = useState<DoubleTapAction | null>(null);
  const lastTapRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!action) return;
    const timeout = setTimeout(() => setAction(null), 1000);
    return () => clearTimeout(timeout);
  }, [action]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleTap = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const side = sideOf(x, rect.width);
    if (!side) {
      togglePlay();
      return;
    }

    const now = Date.now();
    if (lastTapRef.current && now - lastTapRef.current < DOUBLE_TAP_MS) {
      clearTimeout(timeoutRef.current);
      skip(side === 'left' ? -SKIP_SECONDS : SKIP_SECONDS);
      setAction({ side, id: now });
      lastTapRef.current = null;
      return;
    }

    lastTapRef.current = now;
    timeoutRef.current = setTimeout(() => {
      togglePlay();
      lastTapRef.current = null;
    }, DOUBLE_TAP_MS);
  };

  return { action, handleTap };
}

function sideOf(x: number, width: number): DoubleTapAction['side'] | null {
  if (x < width * 0.3) return 'left';
  if (x > width * 0.7) return 'right';
  return null;
}
