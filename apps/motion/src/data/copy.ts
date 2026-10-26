import type { Faq, ProcessStep, Service } from '@/types/content';

export const processSteps: ProcessStep[] = [
  {
    title: 'Plan',
    description: 'I write the hook, sketch the beats and pick the format: 9:16 for the feed, 16:9 for YouTube.',
  },
  {
    title: 'Animate and edit',
    description: 'Motion goes into After Effects or Cavalry. The cut, color and sound happen in DaVinci Resolve.',
  },
  {
    title: 'Ship and learn',
    description:
      'I export for each platform, post, then check where people dropped off so the next one holds them longer.',
  },
];

export const services: Service[] = [
  {
    title: 'Motion design',
    description: 'Logo animations, explainers and title sequences, built in After Effects and Cavalry.',
    tone: 'bg-pop-rose',
  },
  {
    title: 'Video editing',
    description: 'Short-form and long-form edits with color and sound done in DaVinci Resolve.',
    tone: 'bg-pop-violet',
  },
  {
    title: 'Web design',
    description: 'Fast, accessible websites, designed and built by the same person who made the video.',
    tone: 'bg-pop-green',
  },
];

export const faqs: Faq[] = [
  {
    question: 'Are the plugins really free?',
    answer: 'Yes. Every plugin on this page is free to download and use. There is no account to make and no trial.',
  },
  {
    question: 'Which software do you use?',
    answer:
      'After Effects and Cavalry for motion, DaVinci Resolve for editing, color and sound, and Claude Design for design work.',
  },
  {
    question: 'Do you make vertical and horizontal versions?',
    answer:
      'Yes. I cut 9:16 for Reels, Shorts and TikTok and 16:9 for YouTube and websites, usually from the same project.',
  },
  {
    question: 'Can you build the website too?',
    answer: 'Yes. I design and build websites, so the video and the page it lives on can come from one person.',
  },
  {
    question: 'How do I get in touch?',
    answer: 'Send me a message on LinkedIn or Instagram. Both links are at the bottom of this page.',
  },
];
