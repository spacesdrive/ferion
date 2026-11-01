import { person } from '@ferion/profile';
import avatar from '@/assets/brand/avatar.webp';
import navigation, { pages } from '@/data/navigation';
import isCurrentPage from '@/lib/isCurrentPage';
import ThemeToggle from './ThemeToggle';

// a frosted bar that floats over the hero video and stays readable on the light sections below
export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/75 py-1.5 pr-1.5 pl-2 text-ink shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-night/70"
      >
        <a href={pages.home} className="flex items-center gap-2.5 rounded-full pr-2">
          <img src={avatar} alt="" width="32" height="32" className="size-8 rounded-full bg-pop-lilac object-cover" />
          <span className="text-lg font-semibold tracking-tight">{person.name.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navigation.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isCurrentPage(link.href) ? 'page' : undefined}
                className="rounded-full px-3.5 py-2 text-sm text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink aria-[current=page]:bg-ink/5 aria-[current=page]:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href="#contact" className="btn-lime">
            Work with me
          </a>
        </div>
      </nav>
    </header>
  );
}
