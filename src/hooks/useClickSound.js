import { useSound } from '@/hooks/use-sound';
import { tick001Sound } from '@/lib/tick-001';

export function useClickSound(options = {}) {
  const [play] = useSound(tick001Sound, { volume: 0.35, ...options });
  return play;
}
