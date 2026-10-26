import { Play } from 'lucide-react';
import videos from '@/data/videos';
import Marquee from './Marquee';

// the ugc-blaze hero strip: tall cards sliding under the headline; each one jumps to the work grid
export default function WorkMarquee() {
  return (
    <Marquee duration={45} className="mt-16">
      {videos.map(video => (
        <a
          key={video.slug}
          href="#work"
          aria-label={`${video.title}, see it in the work section`}
          className="group relative aspect-[3/4] w-56 shrink-0 overflow-hidden rounded-3xl bg-ink sm:w-64 lg:w-72"
        >
          <img
            src={video.poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform group-hover:scale-110">
              <Play className="size-5 fill-current" aria-hidden="true" />
            </span>
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-paper uppercase">
            {video.platform}
          </span>
        </a>
      ))}
    </Marquee>
  );
}
