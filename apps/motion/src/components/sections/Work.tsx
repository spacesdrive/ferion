import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { useState } from 'react';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import FilterChips from '@/components/work/FilterChips';
import ToolkitFolder from '@/components/work/ToolkitFolder';
import VideoDialog from '@/components/work/VideoDialog';
import VideoRow from '@/components/work/VideoRow';
import { filterVideos, type WorkFilter } from '@/components/work/workFilter';
import { findSoftware } from '@/data/software';
import videos from '@/data/videos';
import type { Video } from '@/types/content';

export default function Work() {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const [openVideo, setOpenVideo] = useState<Video | null>(null);
  const shown = filterVideos(videos, filter);
  const toolName = filter === 'all' ? null : findSoftware(filter).label;

  return (
    <Section id="work">
      <SectionHeader
        id="work"
        eyebrow="Recent work"
        intro="Open the folder to see everything, or press a tool to see only what I made with it. These are sample clips until my real edits go up."
      >
        Videos, sorted by <Accent>the tool</Accent> that made them
      </SectionHeader>

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
        <VideoRow title="Reels, Shorts and TikTok (9:16)" videos={shown} aspect="9:16" onOpen={setOpenVideo} />
        <VideoRow title="YouTube and web (16:9)" videos={shown} aspect="16:9" onOpen={setOpenVideo} />
      </div>

      <VideoDialog video={openVideo} onClose={() => setOpenVideo(null)} />
    </Section>
  );
}
