import { useState, type RefObject } from 'react';
import type { CaptionTrack, QualitySource } from './types.ts';

// picks the source for the chosen quality and switches caption tracks on the <video>
export default function useSources(
  videoRef: RefObject<HTMLVideoElement | null>,
  src: string | QualitySource[],
  tracks: CaptionTrack[],
) {
  const sources = Array.isArray(src) ? src : [{ quality: 'auto', src }];
  const [quality, setQuality] = useState('auto');
  const [caption, setCaption] = useState<string | null>(() => tracks.find(track => track.default)?.srcLang ?? null);

  const qualities = Array.isArray(src) ? ['auto', ...src.map(source => source.quality)] : ['auto'];
  const currentSrc = sources.find(source => source.quality === quality)?.src ?? sources[0]?.src ?? '';

  const changeQuality = (nextQuality: string) => {
    const video = videoRef.current;
    if (!video || nextQuality === quality) return;
    const resumeAt = video.currentTime;
    const wasPlaying = !video.paused;
    // the new source starts from zero, so restore the position once its metadata loads
    const restore = () => {
      video.currentTime = resumeAt;
      if (wasPlaying) video.play().catch(() => {});
    };
    video.addEventListener('loadedmetadata', restore, { once: true });
    setQuality(nextQuality);
  };

  const changeCaption = (lang: string | null) => {
    setCaption(lang);
    const textTracks = videoRef.current?.textTracks;
    if (!textTracks) return;
    for (const track of Array.from(textTracks)) {
      track.mode = lang && track.language === lang ? 'showing' : 'hidden';
    }
  };

  return { qualities, quality, currentSrc, changeQuality, caption, changeCaption };
}

export type Sources = ReturnType<typeof useSources>;
