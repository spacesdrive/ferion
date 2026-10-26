import { Container } from '@/components/layout/Section';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t-2 border-line">
      <Container className="flex pt-7 pb-[calc(7.5rem+env(safe-area-inset-bottom))] font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </Container>
    </footer>
  );
}
