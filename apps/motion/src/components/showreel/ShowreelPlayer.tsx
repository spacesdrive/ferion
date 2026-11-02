import usePrefersReducedMotion from '@ferion/ui/lib/usePrefersReducedMotion.ts';
import { Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import type { Video } from '@/types/content';

export interface ShowreelPlayerProps {
  video: Video;
}

// plays on its own, muted and looping, so it moves as soon as it is on screen; one tap turns the sound on
export default function ShowreelPlayer({ video }: ShowreelPlayerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleSound = () => {
    const element = videoRef.current;
    if (!element) return;
    element.muted = !element.muted;
    setIsMuted(element.muted);
    // browsers may pause a video that gains sound, so start it again
    if (element.paused) void element.play();
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-card ring-1 ring-line">
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        autoPlay={!prefersReducedMotion}
        controls={prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={video.title}
        className="aspect-square w-full object-cover"
      />
      {!prefersReducedMotion && (
        <button
          type="button"
          onClick={handleToggleSound}
          aria-pressed={!isMuted}
          className="btn-ink absolute right-4 bottom-4 px-4 py-2.5 shadow-lg"
        >
          {isMuted ? (
            <VolumeX className="size-4" aria-hidden="true" />
          ) : (
            <Volume2 className="size-4" aria-hidden="true" />
          )}
          {isMuted ? 'Sound on' : 'Sound off'}
        </button>
      )}
    </div>
  );
}
