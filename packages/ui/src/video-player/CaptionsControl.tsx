import { MessageCircle } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import ControlButton from './ControlButton.tsx';
import MenuHeading from './MenuHeading.tsx';
import MenuOption from './MenuOption.tsx';
import PlayerMenu from './PlayerMenu.tsx';
import type { CaptionTrack } from './types.ts';

export interface CaptionsControlProps {
  tracks: CaptionTrack[];
  caption: string | null;
  isOpen: boolean;
  onToggleMenu: () => void;
  onChange: (lang: string | null) => void;
}

// one track toggles on and off; several open a menu
export default function CaptionsControl({ tracks, caption, isOpen, onToggleMenu, onChange }: CaptionsControlProps) {
  const [firstTrack] = tracks;
  if (!firstTrack) return null;

  const handleClick = () => {
    if (tracks.length === 1) onChange(caption ? null : firstTrack.srcLang);
    else onToggleMenu();
  };

  return (
    <div className="relative flex items-center">
      <ControlButton
        label="Captions"
        hint="Captions (C)"
        isActive={caption !== null}
        isExpanded={tracks.length > 1 ? isOpen : undefined}
        onClick={handleClick}
      >
        <MessageCircle className="h-5 w-5" />
      </ControlButton>

      <AnimatePresence>
        {isOpen && tracks.length > 1 && (
          <PlayerMenu label="Captions">
            <MenuHeading>Captions</MenuHeading>
            <div className="space-y-1">
              <MenuOption isSelected={caption === null} onSelect={() => onChange(null)}>
                Off
              </MenuOption>
              {tracks.map(track => (
                <MenuOption
                  key={track.srcLang}
                  isSelected={caption === track.srcLang}
                  onSelect={() => onChange(track.srcLang)}
                >
                  {track.label}
                </MenuOption>
              ))}
            </div>
          </PlayerMenu>
        )}
      </AnimatePresence>
    </div>
  );
}
