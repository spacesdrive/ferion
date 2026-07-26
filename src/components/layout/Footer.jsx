/**
 * Adapted from the spectrumui animated-wave-footer pattern
 * (https://ui.spectrumhq.in), converted from Next.js styled-jsx to a plain
 * CSS keyframe, with the newsletter form swapped for real profile links.
 */
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReddit, FaHackerNews } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/nav';
import { useClickSound } from '@/hooks/useClickSound';
import { scrollToSection } from '@/lib/utils';

const FOLLOW_LINKS = [
  { label: 'GitHub', href: 'https://github.com/spacesdrive', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/u-k-r/', icon: FaLinkedin },
  { label: 'Reddit', href: 'https://www.reddit.com/user/mrujjwalkr/', icon: FaReddit },
  { label: 'Hacker News', href: 'https://news.ycombinator.com/user?id=valzor', icon: FaHackerNews },
  { label: 'Medium', href: 'https://medium.com/@ujjwal_kumar_rai', icon: Mail },
];

export function Footer() {
  const playClick = useClickSound();

  return (
    <footer id="connect-footer" className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background to-primary/5 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-wave absolute bottom-0 h-[280px] w-[1800px]">
          <svg className="h-full w-full" viewBox="0 0 1800 500" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 250C200 150 400 50 600 100C800 150 1000 350 1200 300C1400 250 1600 150 1800 250V500H0V250Z"
              fill="currentColor"
              className="text-primary/5"
            />
            <path
              d="M0 250C200 200 400 100 600 150C800 200 1000 350 1200 300C1400 250 1600 200 1800 250V500H0V250Z"
              fill="currentColor"
              className="text-primary/10"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">Let's talk</h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Open to collaborations, opportunities, and conversations across any of the domains above.
            </p>
            <Button
              className="mt-5"
              onClick={() => {
                playClick();
                window.open('https://www.linkedin.com/in/u-k-r/', '_blank', 'noopener,noreferrer');
              }}
            >
              Get in touch
            </Button>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Section</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    playClick();
                    scrollToSection(item.id);
                  }}
                  className="w-fit text-left text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Follow</h3>
            <div className="flex flex-wrap gap-2">
              {FOLLOW_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onClick={playClick}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Ujjwal Kumar Rai. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
