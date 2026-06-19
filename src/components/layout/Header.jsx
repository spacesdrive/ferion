import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <span className="text-sm font-bold tracking-widest uppercase text-foreground">FERION</span>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </nav>
    </header>
  );
}
