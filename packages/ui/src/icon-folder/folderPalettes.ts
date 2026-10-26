import type { FolderPalette, FolderTheme } from './types.ts';

const FOLDER_PALETTES: Record<FolderTheme, FolderPalette> = {
  dark: {
    ink: '#ffffff',
    chipBg: 'rgba(36,36,36,.7)',
    chipBorder: '#282828',
    chipInk: '#9f9f9f',
    back: 'linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.008) 60%)',
    backEdge: 'rgba(255,255,255,.07)',
    front: 'linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.015) 55%),rgba(12,12,12,.78)',
    frontEdge: ['rgba(255,255,255,.38)', 'rgba(255,255,255,.1)', 'rgba(255,255,255,0)'],
    glow: 'rgba(255,255,255,.10)',
    pillBg: 'rgba(0,0,0,.55)',
    pillBorder: 'rgba(255,255,255,.08)',
    tileRing: 'rgba(255,255,255,.14)',
    tileShadow: 'rgba(0,0,0,.55)',
    focus: 'rgba(255,255,255,.4)',
  },
  light: {
    ink: '#111111',
    chipBg: 'rgba(255,255,255,.7)',
    chipBorder: '#e2e2e2',
    chipInk: '#6b6b6b',
    back: 'linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.015) 60%)',
    backEdge: 'rgba(0,0,0,.08)',
    front: 'linear-gradient(160deg,rgba(255,255,255,.95),rgba(255,255,255,.55) 55%),rgba(240,240,238,.7)',
    frontEdge: ['rgba(255,255,255,1)', 'rgba(0,0,0,.06)', 'rgba(0,0,0,.04)'],
    glow: 'rgba(60,44,255,.10)',
    pillBg: 'rgba(255,255,255,.8)',
    pillBorder: 'rgba(0,0,0,.08)',
    tileRing: 'rgba(0,0,0,.08)',
    tileShadow: 'rgba(0,0,0,.18)',
    focus: 'rgba(0,0,0,.35)',
  },
};

export default FOLDER_PALETTES;
