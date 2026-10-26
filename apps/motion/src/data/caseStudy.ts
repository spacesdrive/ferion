import type { NicheCase, Stat } from '@/types/content';

// sample numbers until the real ones from each account are added
export const caseStudyTotals: Stat[] = [
  { value: '4.3M', label: 'Views across niches' },
  { value: '57.7K', label: 'Followers gained' },
  { value: '+29%', label: 'Average monthly growth' },
  { value: '4', label: 'Niches tested' },
];

export const nicheCases: NicheCase[] = [
  {
    niche: 'Editing tips',
    platform: 'Instagram',
    summary: 'Short before-and-after edits that each end with the free plugin that did the work.',
    metrics: [
      { label: 'Views', value: '1.2M' },
      { label: 'Followers', value: '18.4K' },
      { label: 'Growth', value: '+32%' },
    ],
    isSample: true,
  },
  {
    niche: 'Plugin demos',
    platform: 'TikTok',
    summary: 'Fifteen-second screen recordings of one plugin solving one annoying problem.',
    metrics: [
      { label: 'Views', value: '2.1M' },
      { label: 'Followers', value: '26K' },
      { label: 'Growth', value: '+48%' },
    ],
    isSample: true,
  },
  {
    niche: 'DaVinci tutorials',
    platform: 'YouTube',
    summary: 'Longer walkthroughs that show the whole edit and link the plugins in the description.',
    metrics: [
      { label: 'Views', value: '640K' },
      { label: 'Subscribers', value: '9.1K' },
      { label: 'Growth', value: '+21%' },
    ],
    isSample: true,
  },
  {
    niche: 'Motion design',
    platform: 'X',
    summary: 'Looping animations with the project file attached for anyone who asks.',
    metrics: [
      { label: 'Impressions', value: '380K' },
      { label: 'Followers', value: '4.2K' },
      { label: 'Growth', value: '+15%' },
    ],
    isSample: true,
  },
];
