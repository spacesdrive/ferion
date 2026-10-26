import type { RefObject } from 'react';
import useMediaSettings from './useMediaSettings.ts';
import useMediaTime from './useMediaTime.ts';

export { PLAYBACK_SPEEDS } from './useMediaSettings.ts';

// everything the controls need from the <video> element, in one object
export default function usePlayback(videoRef: RefObject<HTMLVideoElement | null>) {
  return { ...useMediaTime(videoRef), ...useMediaSettings(videoRef) };
}

export type Playback = ReturnType<typeof usePlayback>;
