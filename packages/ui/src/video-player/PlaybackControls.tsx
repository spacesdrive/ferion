import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, RotateCw } from 'lucide-react';
import ControlButton from './ControlButton.tsx';
import formatTime from './formatTime.ts';
import type { Playback } from './usePlayback.ts';
import VolumeControl from './VolumeControl.tsx';

export interface PlaybackControlsProps {
  playback: Playback;
  isCompact: boolean;
  onPrevVideo?: () => void;
  onNextVideo?: () => void;
}

// the left half of the bar: play, skip, playlist, volume and time
export default function PlaybackControls({ playback, isCompact, onPrevVideo, onNextVideo }: PlaybackControlsProps) {
  return (
    <div className="flex items-center gap-1">
      <ControlButton
        label={playback.isPlaying ? 'Pause' : 'Play'}
        hint={playback.isPlaying ? 'Pause (Space)' : 'Play (Space)'}
        onClick={playback.togglePlay}
      >
        {playback.isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
      </ControlButton>
      {!isCompact && (
        <>
          <ControlButton label="Back 10 seconds" hint="Back 10 seconds (J)" onClick={() => playback.skip(-10)}>
            <RotateCcw className="h-5 w-5" />
          </ControlButton>
          <ControlButton label="Forward 10 seconds" hint="Forward 10 seconds (L)" onClick={() => playback.skip(10)}>
            <RotateCw className="h-5 w-5" />
          </ControlButton>
        </>
      )}
      {onPrevVideo && (
        <ControlButton label="Previous video" onClick={onPrevVideo}>
          <ChevronLeft className="h-5 w-5" />
        </ControlButton>
      )}
      {onNextVideo && (
        <ControlButton label="Next video" onClick={onNextVideo}>
          <ChevronRight className="h-5 w-5" />
        </ControlButton>
      )}
      <VolumeControl
        volume={playback.volume}
        isMuted={playback.isMuted}
        onToggleMute={playback.toggleMute}
        onChange={playback.changeVolume}
      />
      <span className="ml-2 text-sm whitespace-nowrap text-white tabular-nums">
        {formatTime(playback.currentTime)} / {formatTime(playback.duration)}
      </span>
    </div>
  );
}
