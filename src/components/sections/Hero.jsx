import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import { useTilt } from '@/hooks/useTilt';
import { useClickSound } from '@/hooks/useClickSound';
import { scrollToSection } from '@/lib/utils';

export function Hero() {
  const avatarRef = useRef(null);
  const tilt = useTilt(avatarRef, { range: 10 });
  const playClick = useClickSound();
  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] w-full items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ y: blobY }}
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        style={{ y: blobY2 }}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <span className="mb-4 inline-block text-sm font-medium text-primary">Portfolio</span>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {profile.tagline} If any of this resonates, let's talk.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() => {
                playClick();
                scrollToSection('work');
              }}
            >
              View my work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                playClick();
                scrollToSection('connect');
              }}
            >
              Get in touch
            </Button>
          </div>
        </div>

        <div className="hidden justify-center lg:col-span-5 lg:flex" style={{ perspective: 900 }}>
          <motion.div
            ref={avatarRef}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={tilt.style}
            className="relative aspect-square w-72 rounded-[2rem] border border-border bg-card shadow-xl"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full rounded-[2rem] object-cover"
              style={{ transform: 'translateZ(40px)' }}
            />
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => {
          playClick();
          scrollToSection('about');
        }}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
