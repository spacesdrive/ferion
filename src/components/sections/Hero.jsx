import { ArrowUpRight, Download } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profile, socials } from '@/data/profile';

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="scroll-mt-6 px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-14">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <Reveal>
            <h1 id="hero-heading" className="text-4xl font-semibold tracking-tighter sm:text-5xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-lg leading-snug text-balance text-muted-foreground sm:text-xl">
              {profile.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="shrink-0">
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width="112"
            height="112"
            fetchPriority="high"
            className="size-24 rounded-full border bg-muted object-cover shadow-sm ring-4 ring-muted sm:size-28"
          />
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <Download className="size-4" aria-hidden="true" />
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-flex h-9 items-center gap-1.5 rounded-full border bg-card px-4 text-sm font-medium transition-colors hover:bg-muted"
        >
          Get in touch
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <ul className="flex items-center gap-1 sm:ml-auto" aria-label="Social profiles">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <SocialIcon id={social.id} className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
