import { ChevronsLeft, ChevronsRight, Loader2, Play } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import cn from '../lib/cn.ts';
import type { DoubleTapAction } from './useDoubleTap.ts';

export interface PlayerOverlaysProps {
  isLoading: boolean;
  isPlaying: boolean;
  areControlsVisible: boolean;
  doubleTap: DoubleTapAction | null;
  onPlay: () => void;
}

// everything drawn over the picture: spinner, bottom shade, skip hint and the big play button
export default function PlayerOverlays({
  isLoading,
  isPlaying,
  areControlsVisible,
  doubleTap,
  onPlay,
}: PlayerOverlaysProps) {
  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          >
            <Loader2 className="h-12 w-12 animate-spin text-white" aria-label="Loading" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {areControlsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {doubleTap && (
          <div
            key={doubleTap.id}
            className={cn(
              'pointer-events-none absolute inset-y-0 z-20 flex w-1/2 items-center',
              doubleTap.side === 'left' ? 'left-0 justify-start pl-12' : 'right-0 justify-end pr-12',
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              {doubleTap.side === 'left' ? (
                <ChevronsLeft className="h-8 w-8 text-white" />
              ) : (
                <ChevronsRight className="h-8 w-8 text-white" />
              )}
              <span className="mt-1 text-xs font-bold text-white select-none">10s</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {areControlsVisible && !isPlaying && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          >
            <motion.button
              type="button"
              aria-label="Play"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlay}
              className="pointer-events-auto rounded-full bg-white/20 p-4 backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <Play className="h-12 w-12 fill-white text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
