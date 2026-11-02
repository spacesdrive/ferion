import formatPostMeta from '@/lib/formatPostMeta';
import type { CaseStudyPost } from '@/types/content';
import CaseCover from './CaseCover';
import TagPill from './TagPill';

export interface CaseCardProps {
  post: CaseStudyPost;
}

// a blog-style card: cover with a label on it, then the title and summary; the whole card opens the post
export default function CaseCard({ post }: CaseCardProps) {
  return (
    <article className="group relative flex h-full flex-col gap-5 rounded-[2rem] border border-line bg-card p-3">
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <CaseCover
          post={post}
          className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
        <TagPill label="Case study" className="absolute bottom-3 left-3 bg-white/90 text-night" />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-2 pb-3">
        <h3 className="text-2xl font-medium tracking-[-0.02em] text-balance">
          <a href={post.url} className="after:absolute after:inset-0 after:rounded-[2rem]">
            {post.title}
          </a>
        </h3>
        <p className="leading-relaxed text-pretty text-muted">{post.excerpt}</p>
        <p className="mt-auto pt-2 text-sm text-muted">{formatPostMeta(post.publishedAt, post.readingMinutes)}</p>
      </div>
    </article>
  );
}
