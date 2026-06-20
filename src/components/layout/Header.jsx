import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggleCircular } from '@/components/animations/transitions/theme-toggle-circular';

export function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('app-theme') || 'dark'
  );

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('app-theme', next);
    setTheme(next);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <span className="text-sm font-bold tracking-widest uppercase text-foreground">FERION</span>
        <ThemeToggleCircular onToggle={toggleTheme} speed={0.5}>
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </ThemeToggleCircular>
      </nav>
    </header>
  );
}
