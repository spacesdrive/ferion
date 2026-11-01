import { findSocial } from '@ferion/profile';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { MessageCircle, Send } from 'lucide-react';
import ButtonIcon from '@/components/layout/ButtonIcon';
import Container from '@/components/layout/Container';
import SocialLinks from '@/components/social/SocialLinks';

const linkedin = findSocial('linkedin');
const instagram = findSocial('instagram');

// the hero scene comes back as the backdrop, with a white card holding the ways to reach me
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 pb-[clamp(4rem,9vw,8rem)]">
      <Container>
        <Reveal className="relative isolate grid gap-10 overflow-hidden rounded-[2.5rem] bg-night px-6 py-14 text-snow sm:px-12 sm:py-16 lg:grid-cols-2 lg:items-center">
          <img
            src="/hero/sunrise.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-night/70 via-night/30 to-night/10"
          />

          <div>
            <h2
              id="contact-heading"
              className="max-w-lg text-4xl leading-[1.02] font-medium tracking-[-0.03em] text-balance sm:text-6xl"
            >
              Let&apos;s make something people replay
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-snow/80">
              Have a video, an animation or a website in mind? Tell me about it.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-card p-6 text-ink sm:p-8">
            <p className="text-sm text-muted">Get in touch</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn-lime justify-between">
                Message on LinkedIn
                <ButtonIcon icon={Send} />
              </a>
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="btn-ink justify-between">
                DM on Instagram
                <ButtonIcon icon={MessageCircle} className="bg-lime text-night" />
              </a>
            </div>
            <SocialLinks className="mt-6 -ml-2" linkClassName="text-ink/70 hover:bg-ink/5 hover:text-ink" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
