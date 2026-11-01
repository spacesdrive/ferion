import { person } from '@ferion/profile';
import FlowerMark from '@/components/hero/FlowerMark';
import SocialLinks from '@/components/social/SocialLinks';
import navigation from '@/data/navigation';
import Container from './Container';

const ELSEWHERE = [
  { label: 'Tech portfolio', href: person.sites.tech },
  { label: 'Blog', href: person.sites.blog },
  { label: 'Resume', href: person.resumeUrl },
];

// links up top, then the name set huge across the page
export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <Container className="pt-14 pb-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="flex items-center gap-2 text-2xl font-medium tracking-tight">
              <FlowerMark className="text-sky" />
              {person.name}
            </p>
            <p className="mt-2 text-muted">Motion designer, editor and web designer.</p>
            <SocialLinks className="mt-5 -ml-2" linkClassName="text-ink/70 hover:bg-ink/5 hover:text-ink" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {navigation.map(link => (
              <a key={link.href} href={link.href} className="text-muted hover:text-ink">
                {link.label}
              </a>
            ))}
            {ELSEWHERE.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p
          aria-hidden="true"
          className="mt-14 pb-[0.22em] text-[clamp(5rem,24vw,22rem)] leading-[0.8] font-medium tracking-[-0.07em] select-none"
        >
          {person.wordmark}
        </p>
        <p className="mt-6 border-t border-line pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {person.name}
        </p>
      </Container>
    </footer>
  );
}
