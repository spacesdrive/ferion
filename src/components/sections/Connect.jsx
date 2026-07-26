import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa6';
import { BentoCard } from '@/components/spectrumui/bento-card';
import { socialLinks } from '@/data/profile';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { useClickSound } from '@/hooks/useClickSound';
import { cn } from '@/lib/utils';

const ICONS = {
  Instagram: FaInstagram,
  Linkedin: FaLinkedin,
  Github: FaGithub,
  Medium: FaMedium,
};

export function Connect() {
  const { ref, isVisible } = useIntersectionReveal(0.15);
  const playClick = useClickSound();

  return (
    <section id="connect" ref={ref} className="w-full border-t border-border py-24">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-6 transition-all duration-700 lg:px-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="mb-12">
          <span className="mb-3 block text-sm font-medium text-primary">Connect</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Where to find me
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" onClick={playClick} className="contents">
                <BentoCard tilt>
                  <div className="flex items-center justify-between">
                    <Icon className="size-5" />
                    <ArrowUpRight className="size-4 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">{link.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{link.description}</p>
                  </div>
                </BentoCard>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
