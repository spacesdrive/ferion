import cn from '@ferion/ui/lib/cn.ts';
import VideoPlayer from '@ferion/ui/video-player/VideoPlayer.tsx';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Video } from '@/types/content';

export interface VideoDialogProps {
  video: Video | null;
  onClose: () => void;
}

// a vertical clip is sized by the screen height, a horizontal one by its width
const FRAME_WIDTH: Record<Video['aspect'], string> = {
  '9:16': 'w-[min(90vw,calc(82dvh*9/16))]',
  '16:9': 'w-[min(92vw,1100px)]',
};

export default function VideoDialog({ video, onClose }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (video && !dialog.open) dialog.showModal();
    if (!video && dialog.open) dialog.close();
  }, [video]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-label={video ? video.title : 'Video'}
      className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-4 backdrop:bg-night/85 backdrop:backdrop-blur-sm"
    >
      {video && (
        <div className={cn('relative', FRAME_WIDTH[video.aspect])}>
          <VideoPlayer
            key={video.slug}
            src={video.src}
            poster={video.poster}
            title={video.title}
            aspect={video.aspect}
            autoPlay
            className="rounded-2xl"
          />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close video"
            className="absolute -top-3 -right-3 z-50 grid size-10 place-items-center rounded-full bg-snow text-night shadow-lg transition-transform hover:scale-105"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}
