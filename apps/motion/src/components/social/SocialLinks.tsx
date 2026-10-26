import { socials, type SocialId } from '@ferion/profile';
import cn from '@ferion/ui/lib/cn.ts';
import { SocialLogo, type SocialLogoProps } from 'social-logos';

// social-logos names Medium and Reddit the same way our ids do; X and the rest match too
const LOGO_NAMES: Record<SocialId, SocialLogoProps['icon']> = {
  instagram: 'instagram',
  x: 'x',
  youtube: 'youtube',
  github: 'github',
  linkedin: 'linkedin',
  reddit: 'reddit',
  medium: 'medium',
};

export interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
}

export default function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <ul aria-label="Social profiles" className={cn('flex flex-wrap gap-2', className)}>
      {socials.map(social => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              'grid size-10 place-items-center rounded-full transition-colors [&_svg]:fill-current',
              linkClassName,
            )}
          >
            <SocialLogo icon={LOGO_NAMES[social.id]} size={20} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
