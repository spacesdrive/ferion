import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReddit, FaHackerNews } from 'react-icons/fa6';
import { useClickSound } from '@/hooks/useClickSound';
import './Footer.css';

const FOLLOW_LINKS = [
  { label: 'GitHub', href: 'https://github.com/spacesdrive', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/u-k-r/', icon: FaLinkedin },
  { label: 'Reddit', href: 'https://www.reddit.com/user/mrujjwalkr/', icon: FaReddit },
  { label: 'Hacker News', href: 'https://news.ycombinator.com/user?id=valzor', icon: FaHackerNews },
  { label: 'Medium', href: 'https://medium.com/@ujjwal_kumar_rai', icon: Mail },
];

export function Footer() {
  const playClick = useClickSound();

  return (
    <footer id="connect-footer" className="footer-panel">
      <p className="footer-tagline">Let's get physical or keep it digital</p>
      <a
        href="https://www.linkedin.com/in/u-k-r/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="footer-headline"
      >
        Get in touch
      </a>

      <div className="footer-follow">
        {FOLLOW_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="footer-follow-link"
          >
            {social.label}
          </a>
        ))}
      </div>

      <p className="footer-credit">{new Date().getFullYear()} Ujjwal Kumar Rai</p>
    </footer>
  );
}
