import SampleBadge from '@/components/layout/SampleBadge';
import { caseStudyPath } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import CaseCover from './CaseCover';
import NicheMetrics from './NicheMetrics';
import PlatformTag from './PlatformTag';

export interface CaseFeatureCardProps {
  niche: NicheCase;
}

// the newest case study, wide: cover on the left, the story and a full-width button on the right
export default function CaseFeatureCard({ niche }: CaseFeatureCardProps) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-line bg-card p-3 md:grid-cols-2">
      <CaseCover niche={niche} className="aspect-[4/3] w-full rounded-[1.6rem]" />

      <div className="flex flex-col gap-5 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <PlatformTag platform={niche.platform} />
          {niche.isSample && <SampleBadge />}
        </div>
        <div>
          <h3 className="text-3xl font-medium tracking-[-0.02em]">{niche.niche}</h3>
          <p className="mt-3 leading-relaxed text-muted">{niche.summary}</p>
        </div>
        <NicheMetrics metrics={niche.metrics} />
        <a
          href={caseStudyPath(niche.slug)}
          aria-label={`Read the ${niche.niche} case study`}
          className="btn-lime mt-auto w-full py-3.5"
        >
          Read case study
        </a>
      </div>
    </article>
  );
}
