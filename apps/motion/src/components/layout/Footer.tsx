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

// the limelight footer: a pink band that ends in the name, set huge
export default function Footer() {
  return (
    <footer className="overflow-hidden bg-pop-rose text-ink">
      <Container className="pt-14 pb-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <FlowerMark className="text-ink [&_.fill-paper]:fill-pop-rose" />
              {person.name}
            </p>
            <p className="mt-2 text-ink/70">Motion designer, editor and web designer.</p>
            <SocialLinks className="mt-5 -ml-2" linkClassName="hover:bg-ink/10" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {navigation.map(link => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
            {ELSEWHERE.map(link => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p
          aria-hidden="true"
          className="mt-14 text-[clamp(5rem,24vw,22rem)] leading-[0.8] font-bold tracking-[-0.06em] select-none"
        >
          {person.wordmark}
        </p>
        <p className="mt-6 font-mono text-xs tracking-[0.08em] text-ink/70 uppercase">
          © {new Date().getFullYear()} {person.name}
        </p>
      </Container>
    </footer>
  );
}
