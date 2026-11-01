import SampleBadge from '@/components/layout/SampleBadge';
import { caseStudyPath } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import CaseCover from './CaseCover';
import PlatformTag from './PlatformTag';

export interface CaseCardProps {
  niche: NicheCase;
}

// a blog-style card: cover with the platform tag on it, then the title and summary; the whole card opens the case study
export default function CaseCard({ niche }: CaseCardProps) {
  return (
    <article className="group relative flex h-full flex-col gap-5 rounded-[2rem] border border-line bg-card p-3">
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <CaseCover
          niche={niche}
          className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
        <PlatformTag platform={niche.platform} className="absolute bottom-3 left-3 bg-white/90 text-night" />
        {niche.isSample && <SampleBadge className="absolute top-3 right-3" />}
      </div>
      <div className="px-2 pb-3">
        <h3 className="text-2xl font-medium tracking-[-0.02em]">
          <a href={caseStudyPath(niche.slug)} className="after:absolute after:inset-0 after:rounded-[2rem]">
            {niche.niche}
          </a>
        </h3>
        <p className="mt-2 leading-relaxed text-muted">{niche.summary}</p>
      </div>
    </article>
  );
}
