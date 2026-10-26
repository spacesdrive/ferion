import { person } from '@ferion/profile';
import { ArrowUpRight } from 'lucide-react';
import avatar from '@/assets/brand/avatar.webp';
import navigation from '@/data/navigation';

// a floating black capsule, as in the limelight template; on phones only the name and the button stay
export default function Navbar() {
  return (
    <header className="sticky top-4 z-40 px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-ink py-2 pr-2 pl-3 text-paper shadow-[0_10px_30px_rgb(18_18_18/0.18)]"
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2">
          <img src={avatar} alt="" width="32" height="32" className="size-8 rounded-full bg-pop-lilac object-cover" />
          <span className="text-lg font-semibold tracking-tight">{person.name.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-paper/80 transition-colors hover:bg-paper/10 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn bg-paper px-5 py-2.5 text-ink hover:bg-pop-lime">
          Work with me
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
