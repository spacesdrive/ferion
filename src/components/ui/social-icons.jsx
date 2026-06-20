import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaXTwitter, FaYoutube, FaPinterest, FaReddit, FaHackerNews } from 'react-icons/fa6';
import { SiHashnode } from 'react-icons/si';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/aevrin.official/',        icon: FaInstagram },
  { name: 'X',         href: 'https://x.com/aevrin_official',                     icon: FaXTwitter },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/u-k-r/',                 icon: FaLinkedin },
  { name: 'GitHub',    href: 'https://github.com/spacesdrive',                     icon: FaGithub },
  { name: 'YouTube',   href: 'https://www.youtube.com/@rec709.studio',             icon: FaYoutube },
  { name: 'Medium',    href: 'https://medium.com/@ujjwal_kumar_rai',               icon: FaMedium },
  { name: 'Hashnode',  href: 'https://aevrin.hashnode.dev/',                       icon: SiHashnode },
  { name: 'Pinterest', href: 'https://in.pinterest.com/ujjwal_kumar_rai/',         icon: FaPinterest },
  { name: 'Reddit',    href: 'https://www.reddit.com/user/mrujjwalkr/',            icon: FaReddit },
  { name: 'HN',        href: 'https://news.ycombinator.com/user?id=valzor',        icon: FaHackerNews },
];

export function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="self-start -ml-1 relative flex items-center gap-0.5 px-1 py-1 rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-black/[0.08] dark:border-white/[0.08]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/[0.02] dark:from-white/[0.03] to-transparent pointer-events-none" />

      {socials.map(({ name, href, icon: Icon }, index) => {
        const hovered = hoveredIndex === index;
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex items-center justify-center size-9 rounded-xl transition-colors duration-200"
          >
            <span className={`absolute inset-1 rounded-lg bg-black/[0.06] dark:bg-white/[0.08] transition-all duration-300 ease-out ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />

            <Icon
              style={{ display: 'block', width: 17, height: 17 }}
              className={`relative z-10 transition-all duration-300 ease-out ${hovered ? 'text-neutral-900 dark:text-white scale-110' : 'text-neutral-400 dark:text-neutral-500'}`}
            />

            <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-neutral-900 dark:bg-white transition-all duration-300 ease-out ${hovered ? 'w-3 opacity-100' : 'w-0 opacity-0'}`} />

            <span className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
              {name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-neutral-900 dark:bg-white" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
