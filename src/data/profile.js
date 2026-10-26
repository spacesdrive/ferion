import portrait from '../assets/brand/portrait.webp';

export const profile = {
  name: 'Ujjwal Kumar Rai',
  wordmark: 'ujjwal',
  intro:
    "I'm Ujjwal Kumar Rai, co-founder of Aevrin. Building, breaking, and learning across way too many domains.",
  // The brand tagline: the last word always carries the marker highlight.
  tagline: { lead: 'Building Innovative', highlight: 'Solutions' },
  // The brand lists roles in this order, as flat outline tags (not buttons).
  roles: ['Backend Developer', 'Growth Expert', 'Market Research Analyst'],
  domain: 'tech.ujjwal.fyi',
  portrait,
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
