import type { MotionValue, SpringOptions } from 'motion/react';
import { createContext, useContext } from 'react';

export interface DockSettings {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseSize: number;
  magnification: number;
}

export const DockContext = createContext<DockSettings | null>(null);

export function useDock(): DockSettings {
  const context = useContext(DockContext);
  if (!context) throw new Error('Dock items must be rendered inside <Dock>');
  return context;
}
