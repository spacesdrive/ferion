import cn from '@ferion/ui/lib/cn.ts';
import type { CaseStudyPost } from '@/types/content';

export interface CaseCoverProps {
  post: CaseStudyPost;
  className?: string;
}

// the post's own cover from the blog; a post without one gets the lime glow with its title
export default function CaseCover({ post, className }: CaseCoverProps) {
  if (post.coverUrl) {
    return <img src={post.coverUrl} alt="" loading="lazy" className={cn('object-cover', className)} />;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'grid place-items-center bg-[linear-gradient(135deg,var(--color-glow),var(--color-paper))] p-8 text-center',
        className,
      )}
    >
      <span className="font-serif text-3xl leading-tight text-ink italic">{post.title}</span>
    </div>
  );
}
