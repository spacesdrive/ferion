import { useState } from 'react';
import { Command, Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { navItems } from '@/data/nav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useClickSound } from '@/hooks/useClickSound';
import { cn, scrollToSection } from '@/lib/utils';

const sectionIds = navItems.map((item) => item.id);

export function Navbar({ onOpenPalette }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const playClick = useClickSound();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('app-theme', next);
  };

  const goTo = (id) => {
    playClick();
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => goTo('hero')}
          className="text-sm font-bold tracking-widest text-foreground uppercase"
        >
          Ferion
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/80 p-1 shadow-sm backdrop-blur-md lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={cn(
                'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                active === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded-full bg-muted" aria-hidden />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            aria-label="Open command palette"
            onClick={() => {
              playClick();
              onOpenPalette();
            }}
          >
            <Command className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => {
              playClick();
              toggleTheme();
            }}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-4">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.id}
                    render={
                      <button
                        onClick={() => goTo(item.id)}
                        className={cn(
                          'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                          active === item.id
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
