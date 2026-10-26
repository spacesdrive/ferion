import useTheme from '@ferion/ui/lib/useTheme.ts';
import { Moon, Sun } from 'lucide-react';
import themeColors from '@/lib/themeColors';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(themeColors);
  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid size-10 shrink-0 place-items-center rounded-full text-snow/80 transition-colors hover:bg-snow/10 hover:text-snow"
    >
      <Icon className="size-[18px]" aria-hidden="true" />
    </button>
  );
}
