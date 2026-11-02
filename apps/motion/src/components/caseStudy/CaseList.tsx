import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { CaseStudyPost } from '@/types/content';
import CaseCard from './CaseCard';
import CaseFeatureCard from './CaseFeatureCard';

export interface CaseListProps {
  posts: CaseStudyPost[];
}

// laid out like a blog index: the newest wide on top, the rest two across
export default function CaseList({ posts }: CaseListProps) {
  const [featured, ...rest] = posts;
  if (!featured) return null;

  return (
    <div className="mt-6 flex flex-col gap-5">
      <Reveal>
        <CaseFeatureCard post={featured} />
      </Reveal>
      {rest.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={0.04 * (index % 2)} className="h-full">
              <CaseCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
