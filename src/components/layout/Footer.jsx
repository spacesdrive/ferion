import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t px-5 pt-6 pb-[calc(7rem+env(safe-area-inset-bottom))] font-mono text-xs text-muted-foreground sm:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
