import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { useState } from 'react';
import { findSoftware } from '@/data/software';
import videos from '@/data/videos';
import type { Video } from '@/types/content';
import FilterChips from './FilterChips';
import ToolkitFolder from './ToolkitFolder';
import VideoDialog from './VideoDialog';
import VideoRow from './VideoRow';
import { filterVideos, type WorkFilter } from './workFilter';

export interface WorkBrowserProps {
  // how many of each ratio to show; leave it out to show every video
  limit?: Record<Video['aspect'], number>;
}

// the toolkit folder, the filter chips and the two video rows, shared by the home and work pages
export default function WorkBrowser({ limit }: WorkBrowserProps) {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const [openVideo, setOpenVideo] = useState<Video | null>(null);
  const shown = filterVideos(videos, filter);
  const toolName = filter === 'all' ? null : findSoftware(filter).label;

  return (
    <>
      <Reveal className="mt-14 grid items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
        <ToolkitFolder filter={filter} onChange={setFilter} />
        <div className="flex flex-col gap-5">
          <p aria-live="polite" className="text-2xl font-semibold tracking-tight">
            {toolName ? `${shown.length} made with ${toolName}` : `All ${shown.length} pieces`}
          </p>
          <FilterChips filter={filter} onChange={setFilter} />
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col gap-14">
        <VideoRow
          title="Reels, Shorts and TikTok (9:16)"
          videos={shown}
          aspect="9:16"
          limit={limit?.['9:16']}
          onOpen={setOpenVideo}
        />
        <VideoRow
          title="YouTube and web (16:9)"
          videos={shown}
          aspect="16:9"
          limit={limit?.['16:9']}
          onOpen={setOpenVideo}
        />
      </div>

      <VideoDialog video={openVideo} onClose={() => setOpenVideo(null)} />
    </>
  );
}
