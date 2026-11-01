import type { SoftwareId, Video } from '@/types/content';

export type WorkFilter = 'all' | SoftwareId;

export function filterVideos(videos: Video[], filter: WorkFilter): Video[] {
  if (filter === 'all') return videos;
  return videos.filter(video => video.software.includes(filter));
}

// the newest few first, then the pinned ones, then the rest to fill up to `total`; every group stays newest first
export function previewOrder(videos: Video[], latestCount: number, total: number): Video[] {
  const latest = videos.filter(video => !video.isPinned).slice(0, latestCount);
  const pinned = videos.filter(video => video.isPinned);
  const rest = videos.filter(video => !video.isPinned && !latest.includes(video));
  return [...latest, ...pinned, ...rest].slice(0, total);
}
