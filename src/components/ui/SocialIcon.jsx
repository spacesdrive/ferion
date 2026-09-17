import { FaGithub, FaHackerNews, FaInstagram, FaLinkedin, FaMedium, FaReddit } from 'react-icons/fa6';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  medium: FaMedium,
  reddit: FaReddit,
  hackernews: FaHackerNews,
};

export function SocialIcon({ id, className }) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}
