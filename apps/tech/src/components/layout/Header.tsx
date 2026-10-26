import Mark from '@/components/brand/Mark';
import profile from '@/data/profile';
import Container from './Container';

export default function Header() {
  return (
    <header>
      <Container className="flex items-center py-5 sm:py-7">
        <a href="#hero" aria-label={`${profile.name}, home`} className="flex items-center gap-2.5">
          <Mark className="h-9 w-auto sm:h-10" />
          <span className="text-[1.65rem] leading-none font-extrabold tracking-[-0.05em] sm:text-[1.85rem]">
            {profile.wordmark}
          </span>
        </a>
      </Container>
    </header>
  );
}
