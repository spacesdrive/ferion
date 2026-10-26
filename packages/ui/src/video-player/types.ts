export interface QualitySource {
  quality: string;
  src: string;
}

export interface CaptionTrack {
  src: string;
  label: string;
  srcLang: string;
  default?: boolean;
}

export interface Chapter {
  title: string;
  startTime: number;
  endTime: number;
}

// 16:9 for landscape edits, 9:16 for reels and shorts
export type VideoAspect = '16:9' | '9:16';

export type PlayerMenu = 'settings' | 'options' | 'captions';

export interface VideoPlayerHandle {
  seek: (time: number) => void;
  play: () => void;
  pause: () => void;
}
