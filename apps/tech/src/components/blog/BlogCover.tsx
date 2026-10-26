import markSticker from '@/assets/brand/mark-sticker.webp';
import type { BlogPost } from '@/types/blog';

export interface BlogCoverProps {
  post: BlogPost;
}

export default function BlogCover({ post }: BlogCoverProps) {
  if (post.cover_url) {
    return (
      // the cover keeps its 16:9 frame on white, so artwork edges never crop
      <div className="overflow-hidden border-b-2 border-line bg-white">
        <img
          src={post.cover_url}
          alt=""
          width="1100"
          height="619"
          loading="lazy"
          decoding="async"
          className="mono-img aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
    );
  }

  // no cover: the same brand cover blog.ujjwal.fyi draws (title, sticker, dot paper)
  return (
    <div
      aria-hidden="true"
      className="dot-paper flex aspect-video items-center gap-[6%] border-b-2 border-line bg-background px-[7%]"
    >
      <p className="line-clamp-4 flex-1 text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance">
        {post.title}
      </p>
      <div className="relative w-[30%] shrink-0">
        <img
          src={markSticker}
          alt=""
          width="640"
          height="653"
          decoding="async"
          className="w-full -rotate-6 drop-shadow-[0_8px_0_rgb(18_18_18/0.14)] transition-transform duration-300 group-hover:rotate-0 motion-reduce:transition-none"
        />
        <span className="absolute -top-[8%] -right-[6%] rotate-[14deg] font-note text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
          ?
        </span>
      </div>
    </div>
  );
}
