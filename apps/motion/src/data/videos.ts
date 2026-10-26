import type { Video } from '@/types/content';

// each file and its poster live in public/videos; the clips were re-encoded for the web from the originals
function video(
  slug: string,
  title: string,
  aspect: Video['aspect'],
  software: Video['software'],
  format: string,
): Video {
  return { slug, title, aspect, software, format, src: `/videos/${slug}.mp4`, poster: `/videos/${slug}.webp` };
}

// newest first: the home page shows the first four 9:16 and two 16:9 clips, the work page shows them all
const videos: Video[] = [
  video(
    'kalit-launch-film',
    'Kalit launch film, rebuilt in code',
    '16:9',
    ['after-effects', 'claude-design'],
    'Rebuild',
  ),
  video('showreel-rebuild', 'Showreel, rebuilt in code', '16:9', ['davinci-resolve', 'claude-design'], 'Rebuild'),
  video(
    'mirofish-explainer',
    'MiroFish explainer',
    '16:9',
    ['after-effects', 'davinci-resolve', 'claude-design'],
    'Explainer',
  ),
  video('find-skills', 'Find Skills', '9:16', ['davinci-resolve', 'claude-design'], 'Reel'),
  video('linkedin-growth', 'LinkedIn growth on autopilot', '16:9', ['after-effects', 'claude-design'], 'Promo'),
  video(
    'varq-launch-film',
    'Varq launch film',
    '16:9',
    ['after-effects', 'davinci-resolve', 'claude-design'],
    'Launch film',
  ),
  video('aevrin-launch-film', 'Aevrin launch film', '16:9', ['davinci-resolve', 'claude-design'], 'Launch film'),
  video('twiligent-launch', 'Twiligent launch', '16:9', ['after-effects', 'claude-design'], 'Launch film'),
  video('vyra-launch', 'Vyra launch', '16:9', ['davinci-resolve', 'claude-design'], 'Launch film'),
  video('varq-launch', 'Varq launch', '16:9', ['after-effects', 'davinci-resolve', 'claude-design'], 'Launch film'),
  video('aevrin-launch-motion', 'Aevrin launch motion graphics', '16:9', ['davinci-resolve'], 'Launch film'),
  video('aevrin-logo-shine', 'Aevrin logo shine', '9:16', [], 'Logo animation'),
  video('meta-cognition-launch', 'Meta Cognition launch', '16:9', ['davinci-resolve'], 'Launch film'),
  video('scroll-animation-reel', 'How to make a $5,000 scroll animation', '9:16', ['davinci-resolve'], 'Reel'),
  video('desktop-cat-reel', 'A pixel cat on your desktop', '9:16', ['davinci-resolve'], 'Reel'),
  video('aegis-ai-launch', 'Aegis AI launch', '16:9', ['davinci-resolve'], 'Launch film'),
];

export default videos;
