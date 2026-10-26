import { useEffect, useState, type RefObject } from 'react';
import { toggleFullscreenFor, togglePictureInPictureFor } from './screenModes.ts';

// fullscreen, theater mode and picture-in-picture; state follows the browser's own events
export default function useScreenModes(
  containerRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTheater, setIsTheater] = useState(false);
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const handleFullscreen = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    const handleEnterPip = () => setIsPictureInPicture(true);
    const handleLeavePip = () => setIsPictureInPicture(false);
    document.addEventListener('fullscreenchange', handleFullscreen);
    video?.addEventListener('enterpictureinpicture', handleEnterPip);
    video?.addEventListener('leavepictureinpicture', handleLeavePip);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreen);
      video?.removeEventListener('enterpictureinpicture', handleEnterPip);
      video?.removeEventListener('leavepictureinpicture', handleLeavePip);
    };
  }, [containerRef, videoRef]);

  // theater mode covers the page, so the page must not scroll underneath it
  useEffect(() => {
    if (!isTheater) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isTheater]);

  return {
    isFullscreen,
    isTheater,
    isPictureInPicture,
    toggleFullscreen: () => toggleFullscreenFor(containerRef.current),
    toggleTheater: () => setIsTheater(theater => !theater),
    togglePictureInPicture: () => togglePictureInPictureFor(videoRef.current),
  };
}

export type ScreenModes = ReturnType<typeof useScreenModes>;
