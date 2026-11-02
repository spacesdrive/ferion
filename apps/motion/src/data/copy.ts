import { Clapperboard, Globe, Spline } from 'lucide-react';
import type { Faq, Service } from '@/types/content';

export const services: Service[] = [
  {
    title: 'Motion design',
    description: 'Logo animations, explainers and title sequences, built in After Effects and Cavalry.',
    icon: Spline,
  },
  {
    title: 'Video editing',
    description: 'Short-form and long-form edits with color and sound done in DaVinci Resolve.',
    icon: Clapperboard,
    isFeatured: true,
  },
  {
    title: 'Web design',
    description: 'Fast, accessible websites, designed and built by the same person who made the video.',
    icon: Globe,
  },
];

export const faqs: Faq[] = [
  {
    question: 'What is the marketplace?',
    answer:
      'A list of sites and tools I use for sound, 3D, textures, fonts and motion. Each one has a short note on what it does and whether it is free.',
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
