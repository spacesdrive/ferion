import type { MarketplaceLink } from '@/types/content';

// newest first; the home page shows the first three. Keep each description short: the card shows two lines
const marketplace: MarketplaceLink[] = [
  {
    name: 'Freesound',
    url: 'https://freesound.org/',
    category: 'Sound effects and loops',
    tags: ['sound'],
    description: 'Over 700,000 free sounds and loops from the community. Each sound lists its own license.',
  },
  {
    name: 'Sketchfab',
    url: 'https://sketchfab.com/',
    category: '3D models',
    tags: ['3d'],
    description: 'A huge library of 3D models you can spin in the browser. Many are free to download.',
  },
  {
    name: 'Grainrad',
    url: 'https://grainrad.com/',
    category: 'Image and video effects',
    tags: ['texture', 'ascii'],
    description: 'Turns images, video and 3D models into ASCII, dither, halftone and VHS looks, right in the browser.',
  },
  {
    name: 'Filmlooks',
    url: 'https://filmlooks.com/',
    category: 'Film overlays',
    tags: ['film', 'texture'],
    description: 'Real scanned 8mm and 16mm grain, light leaks, burns and dust. Free HD packs, paid 4K ones.',
  },
  {
    name: 'Fontshare',
    url: 'https://fontshare.com/',
    category: 'Fonts',
    tags: ['type'],
    description: 'Free, quality fonts from the Indian Type Foundry, like Satoshi, for personal and commercial work.',
  },
  {
    name: 'GLYPH',
    url: 'https://donalleniii.github.io/glyph/',
    category: 'ASCII art',
    tags: ['ascii', 'camera'],
    description: 'A real-time ASCII art engine that turns your camera, images and 3D shapes into moving text.',
  },
  {
    name: 'TekDetek',
    url: 'https://vikmil.com/tekdetek/',
    category: 'Live ASCII video',
    tags: ['camera', 'ascii'],
    description: 'Turns your camera or a clip into live ASCII art, with AI detection and hand control.',
  },
  {
    name: 'Effect.app',
    url: 'https://effect.app/',
    category: 'Image and video effects',
    tags: ['texture', 'motion'],
    description: 'Image and video effect generator in the browser. Free to start; Pro removes the watermark.',
  },
  {
    name: 'Unicorn Studio',
    url: 'https://unicorn.studio/',
    category: 'Interactive web motion',
    tags: ['web', 'motion'],
    description: 'A visual editor for interactive web motion with shaders and 3D. Embeds in Framer and Webflow.',
  },
  {
    name: 'Artkit',
    url: 'https://artkit.cc/',
    category: 'Creative effect tools',
    tags: ['texture', 'motion'],
    description: 'Browser tools for halftone, ASCII, glitch, blob tracking, pixel sort and more on images and video.',
  },
];

export default marketplace;
