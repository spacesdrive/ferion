import { CASE_STUDY_TAG_URL } from '@/lib/caseStudyFeed';
import useCaseStudies from '@/lib/useCaseStudies';
import CaseList from './CaseList';

export interface CaseStudyFeedProps {
  // how many posts to show; leave it out to show every one
  limit?: number;
}

// the case studies from the blog, with grey placeholders while they load and a plain link if the blog can't be reached
export default function CaseStudyFeed({ limit }: CaseStudyFeedProps) {
  const state = useCaseStudies();

  if (state.status === 'loading') {
    return (
      <div aria-busy="true" aria-label="Loading case studies" className="mt-6 flex flex-col gap-5">
        <div className="h-80 animate-pulse rounded-[2rem] bg-mist" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="h-72 animate-pulse rounded-[2rem] bg-mist" />
          <div className="h-72 animate-pulse rounded-[2rem] bg-mist" />
        </div>
      </div>
    );
  }

  const posts = state.status === 'ready' ? state.posts : [];
  if (posts.length === 0) {
    return (
      <p className="mt-6 rounded-[1.75rem] border border-line bg-card px-6 py-12 text-center text-muted">
        The case studies live on my blog.{' '}
        <a href={CASE_STUDY_TAG_URL} className="font-medium text-ink underline underline-offset-4">
          Read them there
        </a>
        .
      </p>
    );
  }

  return <CaseList posts={limit === undefined ? posts : posts.slice(0, limit)} />;
}
