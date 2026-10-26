import { Maximize2, MoreVertical, Repeat } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import ControlButton from './ControlButton.tsx';
import MenuOption from './MenuOption.tsx';
import PlayerMenu from './PlayerMenu.tsx';

export interface OptionsControlProps {
  isOpen: boolean;
  isTheater: boolean;
  isLooping: boolean;
  onToggleMenu: () => void;
  onToggleTheater: () => void;
  onToggleLoop: () => void;
}

export default function OptionsControl({
  isOpen,
  isTheater,
  isLooping,
  onToggleMenu,
  onToggleTheater,
  onToggleLoop,
}: OptionsControlProps) {
  return (
    <div className="relative flex items-center">
      <ControlButton label="More options" isActive={isOpen} isExpanded={isOpen} onClick={onToggleMenu}>
        <MoreVertical className="h-5 w-5" />
      </ControlButton>

      <AnimatePresence>
        {isOpen && (
          <PlayerMenu label="More options" className="min-w-48 p-2">
            <MenuOption isSelected={isTheater} onSelect={onToggleTheater}>
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
              Theater mode
            </MenuOption>
            <MenuOption isSelected={isLooping} onSelect={onToggleLoop}>
              <Repeat className="h-4 w-4" aria-hidden="true" />
              Loop
            </MenuOption>
          </PlayerMenu>
        )}
      </AnimatePresence>
    </div>
  );
}
