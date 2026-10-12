import { FileText } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import markSticker from '@/assets/brand/mark-sticker.webp';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profile, socials } from '@/data/profile';

const linkedin = socials.find((social) => social.id === 'linkedin');

// Contact follows Writing, which only renders when the blog has posts.
export function Contact({ index = '06' }) {
  return (
    <Section id="contact">
      <Reveal className="inverse dot-paper relative overflow-hidden rounded-[24px] bg-background p-[clamp(1.75rem,5vw,4rem)] text-foreground">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex flex-col gap-5">
            <span className="label">{index} / Contact</span>
            <h2
              id="contact-heading"
              className="max-w-[14ch] text-[2.75rem] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl"
            >
              Let&apos;s build <span className="marker">something</span>.
            </h2>
            <p className="max-w-[48ch] text-lg leading-relaxed text-pretty text-body">
              The quickest way to reach me is a message on LinkedIn. I&apos;m also around on every platform below.
            </p>
            <div className="mt-2 flex flex-wrap gap-3.5">
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-pill ink-pill-solid press px-5 py-2.5 text-[15px]"
              >
                <FaLinkedin className="size-4" aria-hidden="true" />
                Message on LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-pill press px-5 py-2.5 text-[15px]"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden w-56 sm:block lg:w-64" aria-hidden="true">
            <img src={markSticker} alt="" width="640" height="653" className="w-full -rotate-6" />
            <span className="absolute -top-3 -right-2 rotate-[-8deg] font-note text-6xl leading-none">!</span>
          </div>
        </div>

        <ul aria-label="Social profiles" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border-2 border-line bg-card p-3.5 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-current">
                  <SocialIcon id={social.id} className="size-[18px]" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[15px] leading-tight font-bold">{social.label}</span>
                  <span className="truncate font-mono text-xs text-muted-foreground group-hover:text-current">
                    {social.handle}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
