import type { ReactNode } from 'react';

export type FolderTheme = 'dark' | 'light';

export interface FolderIcon {
  // stable key, also what onSelectIcon reports back
  id: string;
  label: string;
  // an image url (square works best) or any custom node, drawn on `background`
  src?: string;
  node?: ReactNode;
  background?: string;
}

export interface FolderPalette {
  ink: string;
  chipBg: string;
  chipBorder: string;
  chipInk: string;
  back: string;
  backEdge: string;
  front: string;
  frontEdge: [string, string, string];
  glow: string;
  pillBg: string;
  pillBorder: string;
  tileRing: string;
  tileShadow: string;
  focus: string;
}
