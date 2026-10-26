export type SocialId = 'instagram' | 'x' | 'youtube' | 'github' | 'linkedin' | 'reddit' | 'medium';

export interface Social {
  id: SocialId;
  label: string;
  handle: string;
  href: string;
}

const socials: Social[] = [
  { id: 'instagram', label: 'Instagram', handle: '@ujjwal.fyi', href: 'https://www.instagram.com/ujjwal.fyi' },
  { id: 'x', label: 'X', handle: '@codewithujjwal', href: 'https://x.com/codewithujjwal' },
  { id: 'youtube', label: 'YouTube', handle: '@rec709.studio', href: 'https://www.youtube.com/@rec709.studio' },
  { id: 'github', label: 'GitHub', handle: 'spacesdrive', href: 'https://github.com/spacesdrive' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/u-k-r', href: 'https://www.linkedin.com/in/u-k-r/' },
  { id: 'reddit', label: 'Reddit', handle: 'u/codewithujjwal', href: 'https://www.reddit.com/user/codewithujjwal/' },
  { id: 'medium', label: 'Medium', handle: '@ujjwal_kumar_rai', href: 'https://medium.com/@ujjwal_kumar_rai' },
];

export default socials;

export function findSocial(id: SocialId): Social {
  const social = socials.find(item => item.id === id);
  // the list above is static, so a missing id is a typo in this file
  if (!social) throw new Error(`Social profile "${id}" is not in socials.ts`);
  return social;
}
