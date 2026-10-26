import { useState, type RefObject } from 'react';

// play state, position, duration and buffer, as the <video> element reports them
export default function useMediaTime(videoRef: RefObject<HTMLVideoElement | null>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    // play() rejects when the browser blocks it; the play button simply stays visible
    video.play().catch(() => setIsPlaying(false));
  };

  const seek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(time, video.duration || time));
    setCurrentTime(video.currentTime);
  };

  const skip = (seconds: number) => seek((videoRef.current?.currentTime ?? 0) + seconds);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (video.buffered.length > 0 && video.duration > 0) {
      setBuffered((video.buffered.end(video.buffered.length - 1) / video.duration) * 100);
    }
  };

  const videoEvents = {
    onLoadStart: () => setIsLoading(true),
    onLoadedMetadata: () => {
      setDuration(videoRef.current?.duration ?? 0);
      setIsLoading(false);
    },
    onWaiting: () => setIsLoading(true),
    onCanPlay: () => setIsLoading(false),
    onPlay: () => setIsPlaying(true),
    onPause: () => setIsPlaying(false),
    onEnded: () => setIsPlaying(false),
    onTimeUpdate: handleTimeUpdate,
  };

  return { isPlaying, isLoading, currentTime, duration, buffered, togglePlay, seek, skip, videoEvents };
}
