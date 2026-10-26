import type { Theme } from '@ferion/ui/lib/useTheme.ts';

// the browser bar color for each theme, matching --color-paper in index.css
const themeColors: Record<Theme, string> = { light: '#f5f3ee', dark: '#111110' };

export default themeColors;
