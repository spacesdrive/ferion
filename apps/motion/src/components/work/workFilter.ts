import type { SoftwareId, Video } from '@/types/content';

export type WorkFilter = 'all' | SoftwareId;

export function filterVideos(videos: Video[], filter: WorkFilter): Video[] {
  if (filter === 'all') return videos;
  return videos.filter(video => video.software.includes(filter));
}

// pinned videos move to the front and keep their order; the rest stay newest first
export function pinnedFirst(videos: Video[]): Video[] {
  return [...videos.filter(video => video.isPinned), ...videos.filter(video => !video.isPinned)];
}
