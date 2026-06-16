import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import AnimatedTabs from '@/components/forgeui/animated-tabs';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
];
const tabLabels = navItems.map((item) => item.label);

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const activeIndex = useActiveSection(navItems.map((item) => item.id));
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileOpen(false);
  };

  const scrollToLabel = (label) => {
    const item = navItems.find((nav) => nav.label === label);
    if (item) scrollToSection(item.id);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => scrollToSection('home')}
          className="text-sm font-bold tracking-widest uppercase text-foreground"
        >
          FERION
        </button>

        <div className="hidden md:block">
          <AnimatedTabs
            tabs={tabLabels}
            variant="underline"
            value={tabLabels[activeIndex]}
            onValueChange={scrollToLabel}
          />
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <SocialLinks />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="px-4 pt-4">Menu</SheetTitle>
              <div className="flex flex-col gap-6 p-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
                <SocialLinks className="mt-4 border-t border-border pt-6" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
