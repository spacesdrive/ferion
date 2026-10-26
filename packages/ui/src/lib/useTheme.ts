import { useCallback, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

// `themeColors` sets the browser bar color for each theme; pass a constant so the toggle stays stable
export default function useTheme(themeColors: Record<Theme, string>) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'light' as const);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[next]);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // private mode can block storage; the toggle still applies for this visit
      console.warn('Could not save the theme choice:', error);
    }
  }, [themeColors]);

  return { theme, toggleTheme };
}
