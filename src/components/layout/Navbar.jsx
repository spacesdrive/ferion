import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/nav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useClickSound } from '@/hooks/useClickSound';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn, scrollToSection } from '@/lib/utils';

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const headerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const playClick = useClickSound();

  useGSAP(
    () => {
      gsap.fromTo(
        headerRef.current,
        { y: -32, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    },
    { scope: headerRef }
  );

  const goTo = (id) => {
    playClick();
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => goTo('hero')}
            className="rounded-full border border-dotted border-border bg-background/80 px-3.5 py-1.5 text-sm font-bold tracking-widest text-foreground uppercase shadow-sm backdrop-blur-md"
          >
            Ferion
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active === item.id
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-dotted border-border bg-background/80 text-muted-foreground backdrop-blur-md hover:border-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-dotted border-border bg-background/80 backdrop-blur-md lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-[60] flex w-64 max-w-[80vw] flex-col border-l border-border bg-popover shadow-xl lg:hidden"
            >
              <div className="drawer-header flex items-center justify-between border-b border-border px-4 py-3.5">
                <h3 className="drawer-title text-base font-medium text-foreground">Navigate</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="drawer-body p-2">
                <ul className="menu space-y-0.5 p-0">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(item.id);
                        }}
                        className={cn(
                          'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          active === item.id
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
