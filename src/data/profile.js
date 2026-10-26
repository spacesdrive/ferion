// A square grayscale crop of brand/portrait.webp, centred on the face.
import avatar from '../assets/brand/avatar.webp';

export const profile = {
  name: 'Ujjwal Kumar Rai',
  wordmark: 'ujjwal',
  // The hero diagram's circles, in the order top, left, right, bottom.
  roles: ['Backend Developer', 'Growth Expert', 'Otaku', 'Polyhistor'],
  domain: 'tech.ujjwal.fyi',
  avatar,
  // Points at resume-viewer/ (deployed separately) rather than a bundled file,
  // so the resume opens in a PDF viewer with its own download button.
  resumeUrl: 'https://resume.tech.ujjwal.fyi',
};

export const socials = [
  { id: 'instagram', label: 'Instagram', handle: '@ujjwal.fyi', href: 'https://www.instagram.com/ujjwal.fyi' },
  { id: 'x', label: 'X', handle: '@codewithujjwal', href: 'https://x.com/codewithujjwal' },
  { id: 'youtube', label: 'YouTube', handle: '@rec709.studio', href: 'https://www.youtube.com/@rec709.studio' },
  { id: 'github', label: 'GitHub', handle: 'spacesdrive', href: 'https://github.com/spacesdrive' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/u-k-r', href: 'https://www.linkedin.com/in/u-k-r/' },
  { id: 'reddit', label: 'Reddit', handle: 'u/codewithujjwal', href: 'https://www.reddit.com/user/codewithujjwal/' },
  { id: 'medium', label: 'Medium', handle: '@ujjwal_kumar_rai', href: 'https://medium.com/@ujjwal_kumar_rai' },
];
