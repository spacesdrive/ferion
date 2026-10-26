import { useEffect, useRef, useState } from 'react';

const HIDE_AFTER_MS = 3000;

// controls stay up while paused and fade out three seconds after the last pointer move while playing
export default function useControlsVisibility(isPlaying: boolean) {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reveal = () => {
    setIsVisible(true);
    clearTimeout(timeoutRef.current);
    if (isPlaying) timeoutRef.current = setTimeout(() => setIsVisible(false), HIDE_AFTER_MS);
  };

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (isPlaying) timeoutRef.current = setTimeout(() => setIsVisible(false), HIDE_AFTER_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [isPlaying]);

  return { isVisible: isVisible || !isPlaying, reveal };
}
