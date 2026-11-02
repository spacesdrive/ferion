import { useEffect, useState } from 'react';
import type { CaseStudyPost } from '@/types/content';
import { fetchCaseStudies } from './caseStudyFeed';

export type CaseStudiesState =
  { status: 'loading' } | { status: 'ready'; posts: CaseStudyPost[] } | { status: 'failed' };

// loads the case studies from the blog once; the section shows placeholders until they arrive
export default function useCaseStudies(): CaseStudiesState {
  const [state, setState] = useState<CaseStudiesState>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    fetchCaseStudies(controller.signal)
      .then(posts => setState({ status: 'ready', posts }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.warn('Could not load the case studies from the blog:', error);
        setState({ status: 'failed' });
      });
    return () => controller.abort();
  }, []);

  return state;
}
