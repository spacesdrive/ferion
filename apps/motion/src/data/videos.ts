import type { Video } from '@/types/content';

// placeholder clips rendered for this site; replace them with real edits in public/videos (see the README)
const SAMPLE_DIR = '/videos/samples';

function sample(
  slug: string,
  title: string,
  aspect: Video['aspect'],
  software: Video['software'],
  platform: string,
): Video {
  return {
    slug,
    title,
    aspect,
    software,
    platform,
    src: `${SAMPLE_DIR}/${slug}.mp4`,
    poster: `${SAMPLE_DIR}/${slug}.webp`,
    isSample: true,
  };
}

// newest first: the home page shows the first four 9:16 and two 16:9 clips, the work page shows them all
const videos: Video[] = [
  sample('kinetic-type', 'Kinetic type', '9:16', ['after-effects', 'cavalry'], 'Reels'),
  sample('logo-reveal', 'Logo reveal', '16:9', ['after-effects'], 'YouTube'),
  sample('product-teaser', 'Product teaser', '9:16', ['cavalry'], 'TikTok'),
  sample('reel-edit', 'Reel edit', '9:16', ['davinci-resolve', 'after-effects'], 'Reels'),
  sample('youtube-edit', 'YouTube edit', '16:9', ['davinci-resolve'], 'YouTube'),
  sample('color-pass', 'Color pass', '9:16', ['davinci-resolve'], 'Shorts'),
  sample('storyboard-animatic', 'Storyboard animatic', '16:9', ['claude-design', 'after-effects'], 'Website'),
  sample('explainer-loop', 'Explainer loop', '16:9', ['cavalry', 'claude-design'], 'Website'),
];

export default videos;
