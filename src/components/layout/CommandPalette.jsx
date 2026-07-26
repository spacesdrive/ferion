/**
 * Adapted from the spectrumui command-palette pattern (https://ui.spectrumhq.in),
 * stripped of Next.js routing and next-themes, and wired to this site's own
 * sections, theme toggle, and social links.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CornerDownLeft,
  Mail,
  Moon,
  Search,
  Sun,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { navItems } from '@/data/nav';
import { useClickSound } from '@/hooks/useClickSound';
import { cn, scrollToSection } from '@/lib/utils';

const SPRING_ENTRANCE = { type: 'spring', stiffness: 260, damping: 20 };

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const playClick = useClickSound();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery('');
        setActiveIndex(0);
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const runAndClose = useCallback(
    (action) => {
      playClick();
      action();
      onClose();
    },
    [playClick, onClose]
  );

  const commands = useMemo(() => {
    const navCommands = navItems.map((item) => ({
      id: `nav-${item.id}`,
      title: `Go to ${item.label}`,
      description: `Jump to the ${item.label} section`,
      category: 'Navigate',
      icon: <Search className="h-4 w-4" />,
      action: () => runAndClose(() => scrollToSection(item.id)),
    }));

    return [
      ...navCommands,
      {
        id: 'theme-light',
        title: 'Switch to light mode',
        description: 'Set the interface to a light theme',
        category: 'Theme',
        icon: <Sun className="h-4 w-4" />,
        action: () =>
          runAndClose(() => {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('app-theme', 'light');
          }),
      },
      {
        id: 'theme-dark',
        title: 'Switch to dark mode',
        description: 'Set the interface to a dark theme',
        category: 'Theme',
        icon: <Moon className="h-4 w-4" />,
        action: () =>
          runAndClose(() => {
            document.documentElement.classList.add('dark');
            localStorage.setItem('app-theme', 'dark');
          }),
      },
      {
        id: 'social-github',
        title: 'Open GitHub',
        description: 'github.com/spacesdrive',
        category: 'Connect',
        icon: <FaGithub className="h-4 w-4" />,
        action: () => runAndClose(() => window.open('https://github.com/spacesdrive', '_blank', 'noopener,noreferrer')),
      },
      {
        id: 'social-linkedin',
        title: 'Open LinkedIn',
        description: 'linkedin.com/in/u-k-r',
        category: 'Connect',
        icon: <FaLinkedin className="h-4 w-4" />,
        action: () => runAndClose(() => window.open('https://www.linkedin.com/in/u-k-r/', '_blank', 'noopener,noreferrer')),
      },
      {
        id: 'social-medium',
        title: 'Read the blog',
        description: 'Latest writing on Medium',
        category: 'Connect',
        icon: <Mail className="h-4 w-4" />,
        action: () => runAndClose(() => window.open('https://medium.com/@ujjwal_kumar_rai', '_blank', 'noopener,noreferrer')),
      },
    ];
  }, [runAndClose]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return commands.filter((c) => `${c.title} ${c.description} ${c.category}`.toLowerCase().includes(q));
  }, [commands, query]);

  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filtered[activeIndex]?.action();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filtered, activeIndex]);

  const categories = useMemo(() => {
    const groups = {};
    filtered.forEach((cmd) => {
      groups[cmd.category] = groups[cmd.category] || [];
      groups[cmd.category].push(cmd);
    });
    return groups;
  }, [filtered]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={SPRING_ENTRANCE}
            className="relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-popover text-left shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Jump to a section, toggle theme..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 border-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden h-5 items-center rounded border border-border bg-muted px-1.5 font-mono text-[9px] text-muted-foreground sm:inline-flex">
                ESC
              </kbd>
            </div>

            <div className="max-h-[340px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="py-10 text-center text-sm text-muted-foreground">
                  No matches for "{query}"
                </p>
              ) : (
                Object.entries(categories).map(([category, items]) => (
                  <div key={category} className="mb-2 last:mb-0">
                    <h4 className="px-3 py-1.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                      {category}
                    </h4>
                    <div className="mt-0.5 space-y-0.5">
                      {items.map((item) => {
                        const flatIndex = filtered.findIndex((c) => c.id === item.id);
                        const isActive = flatIndex === activeIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            onMouseEnter={() => setActiveIndex(flatIndex)}
                            className={cn(
                              'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                              isActive ? 'bg-muted text-foreground' : 'text-muted-foreground'
                            )}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span className="shrink-0">{item.icon}</span>
                              <span className="min-w-0">
                                <span className="block truncate text-sm font-medium leading-none">
                                  {item.title}
                                </span>
                                <span className="mt-1 block truncate text-[11px] leading-none text-muted-foreground">
                                  {item.description}
                                </span>
                              </span>
                            </span>
                            {isActive && <CornerDownLeft className="h-3 w-3 shrink-0 opacity-60" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
