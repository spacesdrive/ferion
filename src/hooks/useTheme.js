import { useCallback, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'theme';

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

const getSnapshot = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'light');

  const toggleTheme = useCallback(() => {
    const next = getSnapshot() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still applies for this visit.
    }
  }, []);

  return { theme, toggleTheme };
}
