import formatPostMeta from '@/lib/formatPostMeta';
import type { CaseStudyPost } from '@/types/content';
import CaseCover from './CaseCover';
import TagPill from './TagPill';

export interface CaseFeatureCardProps {
  post: CaseStudyPost;
}

// the newest case study, wide: cover on the left, the story and a full-width button on the right
export default function CaseFeatureCard({ post }: CaseFeatureCardProps) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-line bg-card p-3 md:grid-cols-2">
      <CaseCover post={post} className="aspect-[4/3] w-full rounded-[1.6rem]" />

      <div className="flex flex-col gap-5 p-3 sm:p-4">
        <TagPill label="Case study" className="self-start" />
        <div>
          <h3 className="text-3xl font-medium tracking-[-0.02em] text-balance">{post.title}</h3>
          <p className="mt-3 leading-relaxed text-pretty text-muted">{post.excerpt}</p>
        </div>
        <p className="text-sm text-muted">{formatPostMeta(post.publishedAt, post.readingMinutes)}</p>
        <a href={post.url} aria-label={`Read the case study: ${post.title}`} className="btn-lime mt-auto w-full py-3.5">
          Read case study
        </a>
      </div>
    </article>
  );
}
