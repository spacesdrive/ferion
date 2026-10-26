import { FileText, Mail } from 'lucide-react';
import markSticker from '@/assets/brand/mark-sticker.webp';
import { Polaroid } from '@/components/brand/Polaroid';
import { Container } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profile, socials } from '@/data/profile';

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[480px]">
      <img
        src={markSticker}
        alt="Doodle self-portrait of Ujjwal"
        width="640"
        height="653"
        fetchPriority="high"
        className="absolute top-[4%] right-[2%] w-[60%] -rotate-6 drop-shadow-[0_10px_0_rgb(18_18_18/0.14)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 rotate-[14deg] font-note text-6xl leading-none sm:text-7xl"
      >
        ?
      </span>
      <Polaroid
        src={profile.portrait}
        alt={`Photo of ${profile.name}`}
        caption="me, irl"
        width="500"
        height="600"
        loading="eager"
        className="absolute bottom-0 left-0 w-[44%]"
        imageClassName="aspect-[5/6] object-[42%_28%]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="scroll-mt-4">
      <Container className="grid items-center gap-12 pt-6 pb-[clamp(3.5rem,8vw,7rem)] sm:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
        <Reveal className="lg:order-2">
          <HeroArt />
        </Reveal>

        <div className="min-w-0 lg:order-1">
          <Reveal>
            <span className="note text-[1.75rem] sm:text-4xl">hi, i&apos;m {profile.wordmark}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-heading"
              className="mt-4 text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.05em] text-balance"
            >
              {profile.tagline.lead} <span className="marker">{profile.tagline.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-pretty text-body sm:text-xl">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            {/* Roles are labels, so they stay flat: no shadow, nothing that looks clickable. */}
            <ul aria-label="Roles" className="mt-7 flex flex-wrap gap-2.5">
              {profile.roles.map((role) => (
                <li key={role}>
                  <span className="inline-flex h-8 items-center rounded-full border-2 border-line px-3.5 font-mono text-xs tracking-[0.06em] uppercase">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* The two actions share one size so they read as a pair. */}
          <Reveal delay={0.2} className="mt-9 grid max-w-sm grid-cols-2 gap-3.5">
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

          <Reveal delay={0.25} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-mono text-sm text-muted-foreground">→ {profile.domain}</span>
            <ul aria-label="Social profiles" className="-mx-1.5 flex flex-wrap items-center">
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
        </div>
      </Container>
    </section>
  );
}
