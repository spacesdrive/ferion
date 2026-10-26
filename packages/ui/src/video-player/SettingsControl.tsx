import { Settings } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import ControlButton from './ControlButton.tsx';
import MenuHeading from './MenuHeading.tsx';
import MenuOption from './MenuOption.tsx';
import PlayerMenu from './PlayerMenu.tsx';
import { PLAYBACK_SPEEDS } from './usePlayback.ts';

export interface SettingsControlProps {
  qualities: string[];
  quality: string;
  speed: number;
  isOpen: boolean;
  onToggleMenu: () => void;
  onQualityChange: (quality: string) => void;
  onSpeedChange: (speed: number) => void;
}

export default function SettingsControl({
  qualities,
  quality,
  speed,
  isOpen,
  onToggleMenu,
  onQualityChange,
  onSpeedChange,
}: SettingsControlProps) {
  return (
    <div className="relative flex items-center">
      <ControlButton label="Settings" isActive={isOpen} isExpanded={isOpen} onClick={onToggleMenu}>
        <Settings className="h-5 w-5" />
      </ControlButton>

      <AnimatePresence>
        {isOpen && (
          <PlayerMenu label="Settings">
            {qualities.length > 1 && (
              <div className="mb-3">
                <MenuHeading>Quality</MenuHeading>
                <div className="space-y-1">
                  {qualities.map(option => (
                    <MenuOption key={option} isSelected={quality === option} onSelect={() => onQualityChange(option)}>
                      {option}
                    </MenuOption>
                  ))}
                </div>
              </div>
            )}
            <MenuHeading>Speed</MenuHeading>
            <div className="space-y-1">
              {PLAYBACK_SPEEDS.map(option => (
                <MenuOption key={option} isSelected={speed === option} onSelect={() => onSpeedChange(option)}>
                  {option}x
                </MenuOption>
              ))}
            </div>
          </PlayerMenu>
        )}
      </AnimatePresence>
    </div>
  );
}
