import type { Video } from '@/types/content';

// the box a poster or player keeps for each ratio, so nothing is cropped or stretched
const aspectClass: Record<Video['aspect'], string> = {
  '16:9': 'aspect-video',
  '9:16': 'aspect-[9/16]',
  '1:1': 'aspect-square',
};

export default aspectClass;
