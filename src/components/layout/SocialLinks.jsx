import { socialLinks } from '@/data/socialLinks';
import { cn } from '@/lib/utils';

export function SocialLinks({ className, iconSize = 20 }) {
  return (
    <div className={cn('flex items-center gap-4 text-muted-foreground', className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="transition-colors hover:text-foreground"
        >
          <svg width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
