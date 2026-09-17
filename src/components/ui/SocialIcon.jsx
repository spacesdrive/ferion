import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa6';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  medium: FaMedium,
};

export function SocialIcon({ id, className }) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}
