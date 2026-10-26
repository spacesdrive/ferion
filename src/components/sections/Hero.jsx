import { FileText, Mail } from 'lucide-react';
import { HeroPhotos } from '@/components/hero/HeroPhotos';
import { NameTag } from '@/components/hero/NameTag';
import { Container } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profile, socials } from '@/data/profile';

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="scroll-mt-4 overflow-x-clip">
      <Container className="relative flex flex-col items-center pt-8 pb-[clamp(3.5rem,8vw,7rem)] text-center sm:pt-12">
        <HeroPhotos layout="sides" />

        <Reveal>
          <HeroPhotos layout="row" />
        </Reveal>

        <Reveal delay={0.05} className="mt-6 xl:mt-0">
          <NameTag />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 md:mt-20">
          <ul
            aria-label="Roles"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.14em] uppercase sm:text-[13px]"
          >
            <li aria-hidden="true" className="size-2 rounded-full bg-foreground" />
            {profile.roles.map((role, index) => (
              <li key={role} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true">/</span>}
                {role}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-[16ch] text-[clamp(2.25rem,6vw,4rem)] leading-[1] font-extrabold tracking-[-0.045em] text-balance">
            {profile.tagline.lead} <span className="marker">{profile.tagline.highlight}</span>
          </p>
        </Reveal>

        {/* The two actions share one size so they read as a pair. */}
        <Reveal delay={0.2} className="mt-10 grid w-full max-w-sm grid-cols-2 gap-3.5">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-pill ink-pill-solid press h-12 justify-center px-5 text-[15px]"
          >
            <FileText className="size-4" aria-hidden="true" />
            View CV
          </a>
          <a href="#contact" className="ink-pill press h-12 justify-center px-5 text-[15px]">
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <span className="font-mono text-sm text-muted-foreground">→ {profile.domain}</span>
          <ul aria-label="Social profiles" className="flex flex-wrap items-center justify-center">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border-2 border-transparent text-foreground transition-colors hover:border-line hover:bg-card"
                >
                  <SocialIcon id={social.id} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
