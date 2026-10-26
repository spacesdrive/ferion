import { Volume2, VolumeX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import ControlButton from './ControlButton.tsx';

export interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onChange: (volume: number) => void;
}

export default function VolumeControl({ volume, isMuted, onToggleMute, onChange }: VolumeControlProps) {
  const [isSliderShown, setIsSliderShown] = useState(false);
  const level = isMuted ? 0 : volume;

  return (
    <div
      className="flex items-center gap-1"
      onPointerEnter={() => setIsSliderShown(true)}
      onPointerLeave={() => setIsSliderShown(false)}
      onFocus={() => setIsSliderShown(true)}
      onBlur={event => !event.currentTarget.contains(event.relatedTarget) && setIsSliderShown(false)}
    >
      <ControlButton
        label={isMuted ? 'Unmute' : 'Mute'}
        hint={isMuted ? 'Unmute (M)' : 'Mute (M)'}
        onClick={onToggleMute}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </ControlButton>

      <AnimatePresence>
        {isSliderShown && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center overflow-hidden pl-2"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              aria-label="Volume"
              value={level}
              onChange={event => onChange(Number.parseFloat(event.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              style={{
                background: `linear-gradient(to right, white ${level * 100}%, rgba(255, 255, 255, 0.2) ${level * 100}%)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
