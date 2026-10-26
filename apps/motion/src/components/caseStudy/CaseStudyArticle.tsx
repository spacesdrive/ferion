import Reveal from '@ferion/ui/motion/Reveal.tsx';
import SampleBadge from '@/components/layout/SampleBadge';
import { pages } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import NicheMetrics from './NicheMetrics';

export interface CaseStudyArticleProps {
  niche: NicheCase;
}

// one case study in full: the numbers up top, then the write-up section by section
export default function CaseStudyArticle({ niche }: CaseStudyArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <Reveal className="flex flex-col items-start gap-5">
        <a href={pages.caseStudies} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
          All case studies
        </a>
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow">{niche.platform}</span>
          {niche.isSample && <SampleBadge />}
        </div>
        <h1
          id="case-study-heading"
          className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {niche.niche}
        </h1>
        <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg">{niche.summary}</p>
      </Reveal>

      <Reveal className="mt-10 rounded-3xl border border-line bg-card p-6 sm:p-8">
        <NicheMetrics metrics={niche.metrics} />
      </Reveal>

      <div className="mt-14 flex flex-col gap-10">
        {niche.story.map(section => (
          <Reveal as="div" key={section.heading}>
            <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-pretty text-muted sm:text-lg">{section.body}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
