import type { NicheCase, Stat } from '@/types/content';

// sample numbers and write-ups until the real ones from each account are added
export const caseStudyTotals: Stat[] = [
  { value: '4.3M', label: 'Views across niches' },
  { value: '57.7K', label: 'Followers gained' },
  { value: '+29%', label: 'Average monthly growth' },
  { value: '4', label: 'Niches tested' },
];

// newest first: the home page shows the first two, the case studies page shows them all
export const nicheCases: NicheCase[] = [
  {
    slug: 'editing-tips',
    niche: 'Editing tips',
    platform: 'Instagram',
    summary: 'Short before-and-after edits that each end with the free plugin that did the work.',
    metrics: [
      { label: 'Views', value: '1.2M' },
      { label: 'Followers', value: '18.4K' },
      { label: 'Growth', value: '+32%' },
    ],
    story: [
      {
        heading: 'The idea',
        body: 'Show the finished edit first, then the plugin that made it. People came for the before and after and stayed for the free tool.',
      },
      {
        heading: 'What I posted',
        body: 'Twenty reels, each under twenty seconds. A raw clip, a hard cut to the finished shot, then three seconds of the plugin at work.',
      },
      {
        heading: 'What worked',
        body: 'Reels that opened on the finished shot kept more viewers than the ones that opened on the raw clip. Saves beat likes, so people meant to come back.',
      },
      {
        heading: "What I'd change",
        body: 'I would pin a reel that shows where to download the plugins. Too many comments asked for the link.',
      },
    ],
    isSample: true,
  },
  {
    slug: 'plugin-demos',
    niche: 'Plugin demos',
    platform: 'TikTok',
    summary: 'Fifteen-second screen recordings of one plugin solving one annoying problem.',
    metrics: [
      { label: 'Views', value: '2.1M' },
      { label: 'Followers', value: '26K' },
      { label: 'Growth', value: '+48%' },
    ],
    story: [
      {
        heading: 'The idea',
        body: 'One plugin, one problem, fifteen seconds. No intro and no outro, just the fix.',
      },
      {
        heading: 'What I posted',
        body: 'A screen recording with a short voiceover, every day for a month. Each one named the problem in the first second.',
      },
      {
        heading: 'What worked',
        body: 'Problems every editor has, like messy subtitles or loud music under speech, got shared the most. Niche fixes got fewer views but more follows.',
      },
      {
        heading: "What I'd change",
        body: 'I would record a week of demos at a time. Posting daily was easy; recording daily was not.',
      },
    ],
    isSample: true,
  },
  {
    slug: 'davinci-tutorials',
    niche: 'DaVinci tutorials',
    platform: 'YouTube',
    summary: 'Longer walkthroughs that show the whole edit and link the plugins in the description.',
    metrics: [
      { label: 'Views', value: '640K' },
      { label: 'Subscribers', value: '9.1K' },
      { label: 'Growth', value: '+21%' },
    ],
    story: [
      {
        heading: 'The idea',
        body: 'Some people want to see the whole edit, not a fifteen-second cut. These videos walk through a full project from import to export.',
      },
      {
        heading: 'What I posted',
        body: 'Eight walkthroughs of ten to twenty minutes, with chapters and every plugin linked in the description.',
      },
      {
        heading: 'What worked',
        body: 'Chapters kept people watching, because they could jump to the part they needed. Most plugin downloads came from these descriptions.',
      },
      {
        heading: "What I'd change",
        body: 'I would cut each walkthrough into Shorts as well. The long videos found people slowly, and Shorts would have sent viewers to them sooner.',
      },
    ],
    isSample: true,
  },
  {
    slug: 'motion-design',
    niche: 'Motion design',
    platform: 'X',
    summary: 'Looping animations with the project file attached for anyone who asks.',
    metrics: [
      { label: 'Impressions', value: '380K' },
      { label: 'Followers', value: '4.2K' },
      { label: 'Growth', value: '+15%' },
    ],
    story: [
      {
        heading: 'The idea',
        body: 'Post a short loop and give the project file to anyone who replies. It turns a like into a conversation.',
      },
      {
        heading: 'What I posted',
        body: 'Two loops a week, each under ten seconds, made in After Effects or Cavalry.',
      },
      {
        heading: 'What worked',
        body: 'Replies asking for the file pushed each post further than likes did. Other designers reposting the loops brought most of the new followers.',
      },
      {
        heading: "What I'd change",
        body: 'I would keep a public folder of every project file, so I was not sending the same file by hand ten times.',
      },
    ],
    isSample: true,
  },
];

export function findNicheCase(slug: string): NicheCase | undefined {
  return nicheCases.find(niche => niche.slug === slug);
}
