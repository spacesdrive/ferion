import { Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profile, socials } from '@/data/profile';

const linkedin = socials.find((social) => social.id === 'linkedin');

export function Contact() {
  return (
    <Section id="contact" className="py-16 text-center sm:py-20">
      <Reveal className="flex flex-col items-center">
        <span className="rounded-full border bg-foreground px-3 py-1 font-mono text-[11px] tracking-widest text-background uppercase">
          Contact
        </span>
        <h2 id="contact-heading" className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-sm text-base text-balance text-muted-foreground">
          Let&apos;s get physical or keep it digital. The quickest way to reach me is a message on LinkedIn.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            <FaLinkedin className="size-4" aria-hidden="true" />
            Message on LinkedIn
          </a>
          <a
            href={profile.resume.url}
            download={profile.resume.fileName}
            className="inline-flex h-10 items-center gap-2 rounded-full border bg-card px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Download className="size-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Elsewhere">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <SocialIcon id={social.id} className="size-3.5" />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
