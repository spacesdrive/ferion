import { Maximize, Minimize, PictureInPicture2 } from 'lucide-react';
import CaptionsControl from './CaptionsControl.tsx';
import ControlButton from './ControlButton.tsx';
import OptionsControl from './OptionsControl.tsx';
import SettingsControl from './SettingsControl.tsx';
import type { CaptionTrack, PlayerMenu } from './types.ts';
import type { Playback } from './usePlayback.ts';
import type { ScreenModes } from './useScreenModes.ts';
import type { Sources } from './useSources.ts';

export interface ViewControlsProps {
  playback: Playback;
  sources: Sources;
  screen: ScreenModes;
  tracks: CaptionTrack[];
  isCompact: boolean;
  openMenu: PlayerMenu | null;
  onToggleMenu: (menu: PlayerMenu) => void;
}

// the right half of the bar: captions, picture-in-picture, settings, options and fullscreen
export default function ViewControls({
  playback,
  sources,
  screen,
  tracks,
  isCompact,
  openMenu,
  onToggleMenu,
}: ViewControlsProps) {
  return (
    <div className="flex items-center gap-1">
      <CaptionsControl
        tracks={tracks}
        caption={sources.caption}
        isOpen={openMenu === 'captions'}
        onToggleMenu={() => onToggleMenu('captions')}
        onChange={sources.changeCaption}
      />
      {!isCompact && (
        <ControlButton
          label="Picture in picture"
          hint="Picture in picture (P)"
          isActive={screen.isPictureInPicture}
          onClick={screen.togglePictureInPicture}
        >
          <PictureInPicture2 className="h-5 w-5" />
        </ControlButton>
      )}
      <SettingsControl
        qualities={sources.qualities}
        quality={sources.quality}
        speed={playback.speed}
        isOpen={openMenu === 'settings'}
        onToggleMenu={() => onToggleMenu('settings')}
        onQualityChange={sources.changeQuality}
        onSpeedChange={playback.changeSpeed}
      />
      {!isCompact && (
        <OptionsControl
          isOpen={openMenu === 'options'}
          isTheater={screen.isTheater}
          isLooping={playback.isLooping}
          onToggleMenu={() => onToggleMenu('options')}
          onToggleTheater={screen.toggleTheater}
          onToggleLoop={playback.toggleLoop}
        />
      )}
      <ControlButton
        label={screen.isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
        hint={screen.isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
        onClick={screen.toggleFullscreen}
      >
        {screen.isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
      </ControlButton>
    </div>
  );
}
