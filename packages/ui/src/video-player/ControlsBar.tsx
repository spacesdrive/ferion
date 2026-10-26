import { motion } from 'motion/react';
import PlaybackControls from './PlaybackControls.tsx';
import ProgressBar from './ProgressBar.tsx';
import type { CaptionTrack, Chapter, PlayerMenu } from './types.ts';
import type { Playback } from './usePlayback.ts';
import type { ScreenModes } from './useScreenModes.ts';
import type { Sources } from './useSources.ts';
import ViewControls from './ViewControls.tsx';

export interface ControlsBarProps {
  playback: Playback;
  sources: Sources;
  screen: ScreenModes;
  tracks: CaptionTrack[];
  chapters: Chapter[];
  // narrow players (9:16) drop skip, picture-in-picture and the options menu; double tap still skips
  isCompact: boolean;
  openMenu: PlayerMenu | null;
  onToggleMenu: (menu: PlayerMenu) => void;
  onPrevVideo?: () => void;
  onNextVideo?: () => void;
}

export default function ControlsBar({
  playback,
  sources,
  screen,
  tracks,
  chapters,
  isCompact,
  openMenu,
  onToggleMenu,
  onPrevVideo,
  onNextVideo,
}: ControlsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-x-0 bottom-0 z-40 flex flex-col gap-3 px-4 py-3"
    >
      <ProgressBar
        currentTime={playback.currentTime}
        duration={playback.duration}
        buffered={playback.buffered}
        chapters={chapters}
        onSeek={playback.seek}
      />
      <div className="flex items-center justify-between gap-2">
        <PlaybackControls
          playback={playback}
          isCompact={isCompact}
          onPrevVideo={onPrevVideo}
          onNextVideo={onNextVideo}
        />
        <ViewControls
          playback={playback}
          sources={sources}
          screen={screen}
          tracks={tracks}
          isCompact={isCompact}
          openMenu={openMenu}
          onToggleMenu={onToggleMenu}
        />
      </div>
    </motion.div>
  );
}
