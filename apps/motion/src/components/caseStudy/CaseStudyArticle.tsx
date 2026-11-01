import Reveal from '@ferion/ui/motion/Reveal.tsx';
import SampleBadge from '@/components/layout/SampleBadge';
import { pages } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import CaseCover from './CaseCover';
import NicheMetrics from './NicheMetrics';
import PlatformTag from './PlatformTag';

export interface CaseStudyArticleProps {
  niche: NicheCase;
}

// laid out like a blog post: centered title and summary, a wide cover, the numbers, then the write-up
export default function CaseStudyArticle({ niche }: CaseStudyArticleProps) {
  return (
    <article>
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <a href={pages.caseStudies} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
          All case studies
        </a>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PlatformTag platform={niche.platform} />
          {niche.isSample && <SampleBadge />}
        </div>
        <h1
          id="case-study-heading"
          className="text-5xl leading-[1] font-medium tracking-[-0.04em] text-balance sm:text-7xl"
        >
          {niche.niche}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted">{niche.summary}</p>
      </Reveal>

      <Reveal className="mt-12">
        <CaseCover niche={niche} className="aspect-[21/9] w-full rounded-[2rem]" />
      </Reveal>

      <div className="mx-auto mt-12 max-w-3xl">
        <Reveal className="rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
          <NicheMetrics metrics={niche.metrics} />
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {niche.story.map(section => (
            <Reveal as="div" key={section.heading}>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{section.heading}</h2>
              <p className="mt-3 text-lg leading-relaxed text-pretty text-muted">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
