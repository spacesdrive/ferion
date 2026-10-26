import { findSocial } from '@ferion/profile';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import SocialLinks from '@/components/social/SocialLinks';

const linkedin = findSocial('linkedin');
const instagram = findSocial('instagram');

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 pb-[clamp(4rem,9vw,8rem)]">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-paper sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-pop-violet/40 blur-3xl"
          />
          <span className="relative inline-flex rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-paper/70 uppercase">
            Get in touch
          </span>
          <h2
            id="contact-heading"
            className="relative mx-auto mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Let&apos;s make something <span className="serif-accent text-pop-rose">people replay</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md leading-relaxed text-paper/70">
            Have a video, an animation or a website in mind? Tell me about it.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-pop-rose text-ink hover:bg-paper"
            >
              Message on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-paper/20 text-paper hover:border-paper"
            >
              DM on Instagram
            </a>
          </div>
          <SocialLinks
            className="relative mt-10 justify-center"
            linkClassName="text-paper/70 hover:bg-paper/10 hover:text-paper"
          />
        </Reveal>
      </Container>
    </section>
  );
}
