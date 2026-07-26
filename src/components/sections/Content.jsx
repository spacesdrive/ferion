import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { StatusBadge } from '@/components/ui/status-badge';
import { VideoModal } from '@/components/media/VideoModal';
import { operations, accounts, videos } from '@/data/content';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { useClickSound } from '@/hooks/useClickSound';
import { cn } from '@/lib/utils';

export function Content() {
  const { ref, isVisible } = useIntersectionReveal(0.1);
  const playClick = useClickSound();
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = (video) => {
    playClick();
    setActiveVideo(video);
    setVideoOpen(true);
  };

  return (
    <section id="content" ref={ref} className="w-full border-t border-border bg-muted/30 py-24">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-6 transition-all duration-700 lg:px-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="mb-12">
          <span className="mb-3 block text-sm font-medium text-primary">Content creation</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Growth and edits
          </h2>
        </div>

        {operations.map((op) => (
          <a
            key={op.company}
            href={op.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="mb-12 flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:bg-muted sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {op.role} at {op.company}
              </p>
              <h3 className="text-lg font-semibold text-foreground">{op.project}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{op.period}</p>
            </div>
            <StatusBadge status={op.status} />
          </a>
        ))}

        <h3 className="mb-5 text-sm font-semibold tracking-widest text-foreground uppercase">
          Accounts grown
        </h3>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {accounts.map((acc) => (
            <a
              key={acc.handle}
              href={acc.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <div className="flex items-center justify-between">
                <FaInstagram className="size-5 text-pink-500" />
                <StatusBadge status={acc.status} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{acc.handle}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{acc.niche}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">{acc.followers} followers</span>
                <ExternalLink className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
            </a>
          ))}
        </div>

        <h3 className="mb-5 text-sm font-semibold tracking-widest text-foreground uppercase">
          Best edits
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((vid) => (
            <button
              key={vid.title}
              onClick={() => openVideo(vid)}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left transition-colors hover:bg-muted"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-foreground/90">
                <video src={vid.url} preload="metadata" muted playsInline className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 shadow-md transition-transform duration-200 group-hover:scale-110">
                    <Play className="ml-0.5 h-4 w-4 text-foreground" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute right-2 bottom-2 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
                  {vid.duration}
                </span>
              </div>
              <div className="p-3.5">
                <p className="line-clamp-2 text-sm font-semibold text-foreground">{vid.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{vid.platform}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VideoModal video={activeVideo} isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
