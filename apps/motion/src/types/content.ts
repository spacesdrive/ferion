import type { VideoAspect } from '@ferion/ui/video-player/types.ts';
import type { WorkflowStep } from '@ferion/ui/workflow-card/types.ts';

export type SoftwareId = 'after-effects' | 'cavalry' | 'davinci-resolve' | 'claude-design';

export interface Software {
  id: SoftwareId;
  label: string;
  // a full app icon fills its tile; a glyph sits on `background`
  icon: { kind: 'app'; src: string } | { kind: 'glyph'; src: string; background: string };
}

export interface Video {
  slug: string;
  title: string;
  aspect: VideoAspect;
  src: string;
  poster: string;
  software: SoftwareId[];
  platform: string;
  // marks placeholder entries so the page can label them
  isSample: boolean;
}

export interface Site {
  name: string;
  url: string;
  category: string;
  description: string;
  image: string;
}

export interface Plugin {
  title: string;
  description: string;
  host: string;
  steps: WorkflowStep[];
  downloadCount: number;
  downloadUrl?: string;
  isSample: boolean;
}

export interface NicheCase {
  niche: string;
  platform: string;
  summary: string;
  metrics: { label: string; value: string }[];
  isSample: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  // a background utility from the pop palette
  tone: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}
