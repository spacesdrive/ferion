import type { ReactNode } from 'react';
import cn from '../lib/cn.ts';

export interface MenuOptionProps {
  isSelected: boolean;
  onSelect: () => void;
  children: ReactNode;
}

export default function MenuOption({ isSelected, onSelect, children }: MenuOptionProps) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={isSelected}
      onClick={onSelect}
      className={cn(
        'flex w-full items-center gap-2 rounded px-2 py-1 text-left text-sm transition-colors',
        isSelected ? 'bg-cyan-500 text-white' : 'text-white/70 hover:bg-white/10',
      )}
    >
      {children}
    </button>
  );
}
