import cn from '@ferion/ui/lib/cn.ts';
import type { Video } from '@/types/content';
import VideoCard from './VideoCard';

export interface VideoRowProps {
  // the row heading with its count; the home page preview leaves it out
  title?: string;
  videos: Video[];
  aspect: Video['aspect'];
  onOpen: (video: Video) => void;
}

// vertical clips sit four across, square ones three, horizontal ones two, so no ratio is cropped or stretched
const ROW_GRID: Record<Video['aspect'], string> = {
  '9:16': 'grid-cols-2 lg:grid-cols-4',
  '1:1': 'grid-cols-2 lg:grid-cols-3',
  '16:9': 'sm:grid-cols-2',
};

export default function VideoRow({ title, videos, aspect, onOpen }: VideoRowProps) {
  const matching = videos.filter(video => video.aspect === aspect);
  if (matching.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {title && (
        <h3 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
          {title} <span className="text-ink">({matching.length})</span>
        </h3>
      )}
      <div className={cn('grid gap-5', ROW_GRID[aspect])}>
        {matching.map(video => (
          <VideoCard key={video.slug} video={video} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
