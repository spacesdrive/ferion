import type { VideoAspect } from '@ferion/ui/video-player/types.ts';
import type { LucideIcon } from 'lucide-react';

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
  // empty when the tool isn't known yet; the video then only shows under Everything
  software: SoftwareId[];
  // what kind of piece it is, shown as a badge on the card: Reel, Launch film, Explainer
  format: string;
  // always in the home page's short row, right after the newest videos
  isPinned?: boolean;
}

export interface Site {
  // the last part of its page address: /websites/<slug>/
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  image: string;
}

export interface MarketplaceLink {
  name: string;
  url: string;
  category: string;
  // the site's own favicon, bundled so the page never loads icons from other sites
  favicon: string;
  isFaviconLight?: boolean;
  description: string;
}

// one post from blog.ujjwal.fyi tagged "motion case study"
export interface CaseStudyPost {
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  coverUrl: string | null;
  publishedAt: string | null;
  readingMinutes: number | null;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  // the one card drawn dark, so the row has a focal point
  isFeatured?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}
