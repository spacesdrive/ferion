import cn from '@ferion/ui/lib/cn.ts';
import type { Video } from '@/types/content';
import VideoCard from './VideoCard';

export interface VideoRowProps {
  title: string;
  videos: Video[];
  aspect: Video['aspect'];
  // the most cards to show; the count in the title still covers every match
  limit?: number;
  onOpen: (video: Video) => void;
}

// vertical clips sit four across, horizontal ones two across, so neither ratio is cropped or stretched
export default function VideoRow({ title, videos, aspect, limit, onOpen }: VideoRowProps) {
  const matching = videos.filter(video => video.aspect === aspect);
  if (matching.length === 0) return null;
  const visible = limit === undefined ? matching : matching.slice(0, limit);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        {title} <span className="text-ink">({matching.length})</span>
      </h3>
      <div className={cn('grid gap-5', aspect === '9:16' ? 'grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2')}>
        {visible.map(video => (
          <VideoCard key={video.slug} video={video} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
