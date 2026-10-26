import { person } from '@ferion/profile';
import avatar from '@/assets/brand/avatar.webp';
import navigation, { pages } from '@/data/navigation';
import isCurrentPage from '@/lib/isCurrentPage';
import ThemeToggle from './ThemeToggle';

// a floating black capsule, as in the limelight template; on phones only the name and the button stay
export default function Navbar() {
  return (
    <header className="sticky top-4 z-40 px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-night py-2 pr-2 pl-3 text-snow shadow-[0_10px_30px_rgb(18_18_18/0.18)] dark:ring-1 dark:ring-snow/10"
      >
        <a href={pages.home} className="flex items-center gap-2.5 rounded-full pr-2">
          <img src={avatar} alt="" width="32" height="32" className="size-8 rounded-full bg-pop-lilac object-cover" />
          <span className="text-lg font-semibold tracking-tight">{person.name.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isCurrentPage(link.href) ? 'page' : undefined}
                className="rounded-full px-3.5 py-2 text-sm text-snow/80 transition-colors hover:bg-snow/10 hover:text-snow aria-[current=page]:bg-snow/10 aria-[current=page]:text-snow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href="#contact" className="btn bg-snow px-5 py-2.5 text-night hover:bg-pop-lime">
            Work with me
          </a>
        </div>
      </nav>
    </header>
  );
}
