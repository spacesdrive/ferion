import { useState, type RefObject } from 'react';

export const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

// volume, mute, speed and loop, kept in state and written straight to the <video> element
export default function useMediaSettings(videoRef: RefObject<HTMLVideoElement | null>) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);

  const changeVolume = (value: number) => {
    setVolume(value);
    setIsMuted(value === 0);
    if (videoRef.current) videoRef.current.volume = value;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.volume = nextMuted ? 0 : volume || 0.5;
    setIsMuted(nextMuted);
  };

  const changeSpeed = (value: number) => {
    setSpeed(value);
    if (videoRef.current) videoRef.current.playbackRate = value;
  };

  const toggleLoop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = !video.loop;
    setIsLooping(video.loop);
  };

  return { volume, isMuted, speed, isLooping, changeVolume, toggleMute, changeSpeed, toggleLoop };
}
