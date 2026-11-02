import artkitIcon from '@/assets/favicons/artkit.png';
import effectIcon from '@/assets/favicons/effect.png';
import filmlooksIcon from '@/assets/favicons/filmlooks.png';
import fontshareIcon from '@/assets/favicons/fontshare.png';
import freesoundIcon from '@/assets/favicons/freesound.png';
import glyphIcon from '@/assets/favicons/glyph.svg';
import grainradIcon from '@/assets/favicons/grainrad.png';
import sketchfabIcon from '@/assets/favicons/sketchfab.png';
import tekdetekIcon from '@/assets/favicons/tekdetek.svg';
import unicornStudioIcon from '@/assets/favicons/unicorn-studio.png';
import type { MarketplaceLink } from '@/types/content';

// newest first; the home page shows the first three. Keep each description short: the card shows two lines
const marketplace: MarketplaceLink[] = [
  {
    name: 'Freesound',
    url: 'https://freesound.org/',
    category: 'Sound effects and loops',
    favicon: freesoundIcon,
    description: 'Over 700,000 free sounds and loops from the community. Each sound lists its own license.',
  },
  {
    name: 'Sketchfab',
    url: 'https://sketchfab.com/',
    category: '3D models',
    favicon: sketchfabIcon,
    description: 'A huge library of 3D models you can spin in the browser. Many are free to download.',
  },
  {
    name: 'Grainrad',
    url: 'https://grainrad.com/',
    category: 'Image and video effects',
    favicon: grainradIcon,
    description: 'Turns images, video and 3D models into ASCII, dither, halftone and VHS looks, right in the browser.',
  },
  {
    name: 'Filmlooks',
    url: 'https://filmlooks.com/',
    category: 'Film overlays',
    favicon: filmlooksIcon,
    description: 'Real scanned 8mm and 16mm grain, light leaks, burns and dust. Free HD packs, paid 4K ones.',
  },
  {
    name: 'Fontshare',
    url: 'https://fontshare.com/',
    category: 'Fonts',
    favicon: fontshareIcon,
    description: 'Free, quality fonts from the Indian Type Foundry, like Satoshi, for personal and commercial work.',
  },
  {
    name: 'GLYPH',
    url: 'https://donalleniii.github.io/glyph/',
    category: 'ASCII art',
    // the site sets no favicon, so this is a plain G tile
    favicon: glyphIcon,
    description: 'A real-time ASCII art engine that turns your camera, images and 3D shapes into moving text.',
  },
  {
    name: 'TekDetek',
    url: 'https://vikmil.com/tekdetek/',
    category: 'Live ASCII video',
    favicon: tekdetekIcon,
    description: 'Turns your camera or a clip into live ASCII art, with AI detection and hand control.',
  },
  {
    name: 'Effect.app',
    url: 'https://effect.app/',
    category: 'Image and video effects',
    favicon: effectIcon,
    description: 'Image and video effect generator in the browser. Free to start; Pro removes the watermark.',
  },
  {
    name: 'Unicorn Studio',
    url: 'https://unicorn.studio/',
    category: 'Interactive web motion',
    favicon: unicornStudioIcon,
    // its icon is white, so it sits on a dark tile
    isFaviconLight: true,
    description: 'A visual editor for interactive web motion with shaders and 3D. Embeds in Framer and Webflow.',
  },
  {
    name: 'Artkit',
    url: 'https://artkit.cc/',
    category: 'Creative effect tools',
    favicon: artkitIcon,
    description: 'Browser tools for halftone, ASCII, glitch, blob tracking, pixel sort and more on images and video.',
  },
];

export default marketplace;
