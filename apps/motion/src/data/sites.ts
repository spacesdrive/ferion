import aevrinImage from '@/assets/sites/aevrin.webp';
import blogImage from '@/assets/sites/blog.webp';
import kinetubeImage from '@/assets/sites/kinetube.webp';
import luxeImage from '@/assets/sites/luxe.webp';
import twiligentImage from '@/assets/sites/twiligent.webp';
import uemsAgencyImage from '@/assets/sites/uems-agency.webp';
import uemsPulseImage from '@/assets/sites/uems-pulse.webp';
import varqImage from '@/assets/sites/varq.webp';
import vyraImage from '@/assets/sites/vyra.webp';
import type { Site } from '@/types/content';

// live sites, newest first; the home page shows the first six
const sites: Site[] = [
  {
    slug: 'aevrin',
    name: 'Aevrin',
    url: 'https://aevrin.ai',
    category: 'Company website',
    description: 'The home of Aevrin, the security layer for AI-native software, and the two products it makes.',
    image: aevrinImage,
  },
  {
    slug: 'vyra',
    name: 'Vyra',
    url: 'https://vyra.aevrin.ai',
    category: 'Product website',
    description:
      'modelWrecker attacks the chatbots, agents and AI tools you own, on your own machine, and shows proof you can replay.',
    image: vyraImage,
  },
  {
    slug: 'varq',
    name: 'Varq',
    url: 'https://varq.aevrin.ai',
    category: 'Product website',
    description: 'One MCP install that scans MCP servers, inspects skills and reviews the code your AI agents write.',
    image: varqImage,
  },
  {
    slug: 'twiligent',
    name: 'Twiligent',
    url: 'https://twiligent.ujjwal.fyi',
    category: 'Analytics app',
    description: 'YouTube, Instagram and Reddit numbers side by side, on accounts you own and with no subscription.',
    image: twiligentImage,
  },
  {
    slug: 'kinetube',
    name: 'KineTube',
    url: 'https://kinetube.ujjwal.fyi',
    category: 'Desktop app',
    description:
      'A free desktop app that saves YouTube and Instagram videos and transcribes them on your own computer.',
    image: kinetubeImage,
  },
  {
    slug: 'uems-ventures',
    name: 'UEMS Ventures',
    url: 'https://uems-agency.spacesdrive.cc',
    category: 'Client website',
    description:
      'The website for a Mumbai consultancy that helps students with career guidance, study abroad and migration.',
    image: uemsAgencyImage,
  },
  {
    slug: 'luxe',
    name: 'Luxe',
    url: 'https://luxe.spacesdrive.cc',
    category: 'AI store',
    description: 'A fake luxury store with a very real AI shopping assistant inside it.',
    image: luxeImage,
  },
  {
    slug: 'uems-pulse',
    name: 'UEMS Pulse',
    url: 'https://uems-pulse.spacesdrive.cc',
    category: 'Client website',
    description: 'A faster, content-first version of the UEMS Ventures site, built around its guides and blog.',
    image: uemsPulseImage,
  },
  {
    slug: 'blog',
    name: "Ujjwal's Blog",
    url: 'https://blog.ujjwal.fyi',
    category: 'Blog',
    description: 'Long reads on backends, growth systems and AI security, with its own editor and publishing flow.',
    image: blogImage,
  },
];

export default sites;

export function findSite(slug: string): Site | undefined {
  return sites.find(site => site.slug === slug);
}
