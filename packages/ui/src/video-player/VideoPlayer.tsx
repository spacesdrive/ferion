import { AnimatePresence } from 'motion/react';
import { useImperativeHandle, useRef, useState, type Ref } from 'react';
import cn from '../lib/cn.ts';
import ControlsBar from './ControlsBar.tsx';
import PlayerOverlays from './PlayerOverlays.tsx';
import shortcutHandler from './shortcutHandler.ts';
import type { CaptionTrack, Chapter, PlayerMenu, QualitySource, VideoAspect, VideoPlayerHandle } from './types.ts';
import useControlsVisibility from './useControlsVisibility.ts';
import useDoubleTap from './useDoubleTap.ts';
import usePlayback from './usePlayback.ts';
import useScreenModes from './useScreenModes.ts';
import useSources from './useSources.ts';

export interface VideoPlayerProps {
  src: string | QualitySource[];
  title: string;
  aspect?: VideoAspect;
  tracks?: CaptionTrack[];
  poster?: string;
  chapters?: Chapter[];
  autoPlay?: boolean;
  onPrevVideo?: () => void;
  onNextVideo?: () => void;
  ref?: Ref<VideoPlayerHandle>;
  className?: string;
}

const ASPECT_CLASS: Record<VideoAspect, string> = {
  '16:9': 'aspect-video',
  '9:16': 'aspect-[9/16]',
};

// Joly UI's video player (MIT), split into hooks and controls, with a 9:16 mode and working shortcuts
export default function VideoPlayer({
  src,
  title,
  aspect = '16:9',
  tracks = [],
  poster,
  chapters = [],
  autoPlay = false,
  onPrevVideo,
  onNextVideo,
  ref,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playback = usePlayback(videoRef);
  const sources = useSources(videoRef, src, tracks);
  const screen = useScreenModes(containerRef, videoRef);
  const controls = useControlsVisibility(playback.isPlaying);
  const doubleTap = useDoubleTap(playback.togglePlay, playback.skip);
  const [openMenu, setOpenMenu] = useState<PlayerMenu | null>(null);

  useImperativeHandle(ref, () => ({
    seek: playback.seek,
    play: () => videoRef.current?.play().catch(() => {}),
    pause: () => videoRef.current?.pause(),
  }));

  const handleKeyDown = shortcutHandler({
    togglePlay: playback.togglePlay,
    skip: playback.skip,
    toggleMute: playback.toggleMute,
    toggleFullscreen: screen.toggleFullscreen,
    togglePictureInPicture: screen.togglePictureInPicture,
    toggleCaptions: () => sources.changeCaption(sources.caption ? null : (tracks[0]?.srcLang ?? null)),
  });

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={`Video player: ${title}`}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onPointerMove={controls.reveal}
      className={cn(
        'group relative w-full overflow-hidden rounded-lg bg-black outline-none',
        screen.isTheater && 'fixed inset-0 z-50 h-screen w-screen rounded-none',
        className,
      )}
    >
      <div
        className={cn(
          'relative w-full transition-all duration-300',
          screen.isTheater ? 'h-screen' : ASPECT_CLASS[aspect],
        )}
      >
        <video
          ref={videoRef}
          src={sources.currentSrc}
          poster={poster}
          title={title}
          autoPlay={autoPlay}
          playsInline
          preload="metadata"
          {...playback.videoEvents}
          className="absolute inset-0 h-full w-full object-contain"
        >
          {tracks.map(track => (
            <track
              key={track.srcLang}
              kind="subtitles"
              src={track.src}
              srcLang={track.srcLang}
              label={track.label}
              default={track.default}
            />
          ))}
        </video>

        <div aria-hidden="true" className="absolute inset-0 z-10" onClick={doubleTap.handleTap} />
        <PlayerOverlays
          isLoading={playback.isLoading}
          isPlaying={playback.isPlaying}
          areControlsVisible={controls.isVisible}
          doubleTap={doubleTap.action}
          onPlay={playback.togglePlay}
        />

        <AnimatePresence>
          {controls.isVisible && (
            <ControlsBar
              playback={playback}
              sources={sources}
              screen={screen}
              tracks={tracks}
              chapters={chapters}
              isCompact={aspect === '9:16'}
              openMenu={openMenu}
              onToggleMenu={menu => setOpenMenu(current => (current === menu ? null : menu))}
              onPrevVideo={onPrevVideo}
              onNextVideo={onNextVideo}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
