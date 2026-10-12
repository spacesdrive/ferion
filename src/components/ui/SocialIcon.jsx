import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaReddit, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const ICONS = {
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  linkedin: FaLinkedin,
  reddit: FaReddit,
  medium: FaMedium,
};

export function SocialIcon({ id, className }) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}
