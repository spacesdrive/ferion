import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="flex flex-col gap-1 border-t px-5 pt-6 pb-[calc(7rem+env(safe-area-inset-bottom))] font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React, Tailwind CSS &amp; Motion</p>
    </footer>
  );
}
