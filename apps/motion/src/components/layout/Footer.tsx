import { person } from '@ferion/profile';
import SocialLinks from '@/components/social/SocialLinks';
import navigation from '@/data/navigation';
import Container from './Container';

const FIRST_NAME = person.name.split(' ')[0];

const ELSEWHERE = [
  { label: 'Tech portfolio', href: person.sites.tech },
  { label: 'Blog', href: person.sites.blog },
  { label: 'Resume', href: person.resumeUrl },
];

// links up top, then the first name set huge in italic serif across the page
export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <Container className="pt-14 pb-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="text-2xl font-medium tracking-tight">{person.name}</p>
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

        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {person.name}
        </p>
        {/* the j hangs below the line box, so the bottom padding keeps it inside the footer */}
        <p
          aria-hidden="true"
          className="mt-4 pb-[0.25em] text-center font-serif text-[clamp(6rem,30vw,28rem)] leading-[0.85] tracking-[-0.03em] italic select-none"
        >
          {FIRST_NAME}
        </p>
      </Container>
    </footer>
  );
}
