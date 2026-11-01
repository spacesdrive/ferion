import { findSocial } from '@ferion/profile';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Container from '@/components/layout/Container';
import SocialLinks from '@/components/social/SocialLinks';

const linkedin = findSocial('linkedin');
const instagram = findSocial('instagram');

// the hero's lime glow rises again from the bottom, under a big centered call to talk
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-24 overflow-hidden py-[clamp(4rem,9vw,8rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--color-glow)_0%,color-mix(in_oklab,var(--color-glow)_40%,var(--color-paper))_45%,var(--color-paper)_100%)]"
      />
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2
            id="contact-heading"
            className="text-5xl leading-[0.95] font-medium tracking-[-0.04em] text-balance sm:text-7xl lg:text-8xl"
          >
            Let&apos;s Make It <span className="font-serif font-normal italic">Happen</span>
          </h2>
          <p className="max-w-md leading-relaxed text-muted">
            Have a video, an animation or a website in mind? Tell me about it and I&apos;ll get back to you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn-ink px-7 py-3.5">
              Message on LinkedIn
            </a>
            <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5">
              DM on Instagram
            </a>
          </div>
          <SocialLinks className="justify-center" linkClassName="text-ink/70 hover:bg-ink/5 hover:text-ink" />
        </Reveal>
      </Container>
    </section>
  );
}
