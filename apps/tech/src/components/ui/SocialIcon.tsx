import type { SocialId } from '@ferion/profile';
import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaReddit, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const ICONS: Record<SocialId, IconType> = {
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  linkedin: FaLinkedin,
  reddit: FaReddit,
  medium: FaMedium,
};

export interface SocialIconProps {
  id: SocialId;
  className?: string;
}

export default function SocialIcon({ id, className }: SocialIconProps) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}
