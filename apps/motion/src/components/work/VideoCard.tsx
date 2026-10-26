import cn from '@ferion/ui/lib/cn.ts';
import { Play } from 'lucide-react';
import SoftwareTile from '@/components/software/SoftwareTile';
import { findSoftware } from '@/data/software';
import type { Video } from '@/types/content';

export interface VideoCardProps {
  video: Video;
  onOpen: (video: Video) => void;
}

const toolList = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

// just the poster: the format sits top left and the tools that made it top right, with no text underneath
export default function VideoCard({ video, onOpen }: VideoCardProps) {
  const tools = video.software.map(findSoftware);
  const madeWith = tools.length > 0 ? `, made with ${toolList.format(tools.map(tool => tool.label))}` : '';

  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      aria-label={`Play ${video.title}${madeWith}`}
      title={video.title}
      className={cn(
        'group relative overflow-hidden rounded-3xl bg-night',
        video.aspect === '9:16' ? 'aspect-[9/16]' : 'aspect-video',
      )}
    >
      <img
        src={video.poster}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-14 place-items-center rounded-full bg-snow/90 text-night shadow-lg transition-transform group-hover:scale-110">
          <Play className="size-5 fill-current" aria-hidden="true" />
        </span>
      </span>
      <span className="absolute top-3 left-3 rounded-full bg-night/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-snow uppercase">
        {video.format}
      </span>
      {tools.length > 0 && (
        <span className="absolute top-3 right-3 flex -space-x-1.5">
          {tools.map(tool => (
            <SoftwareTile key={tool.id} software={tool} className="size-7 shadow-md ring-2 ring-snow" />
          ))}
        </span>
      )}
    </button>
  );
}
