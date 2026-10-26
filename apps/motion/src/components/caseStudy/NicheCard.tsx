import SampleBadge from '@/components/layout/SampleBadge';
import { caseStudyPath } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import NicheMetrics from './NicheMetrics';

export interface NicheCardProps {
  niche: NicheCase;
}

export default function NicheCard({ niche }: NicheCardProps) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-pop-violet uppercase">{niche.platform}</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{niche.niche}</h3>
        </div>
        {niche.isSample && <SampleBadge />}
      </div>

      <NicheMetrics metrics={niche.metrics} />

      <p className="text-sm leading-relaxed text-muted">{niche.summary}</p>

      <a
        href={caseStudyPath(niche.slug)}
        aria-label={`Read the ${niche.niche} case study`}
        className="btn-ink mt-auto self-start px-5 py-2.5"
      >
        Read
      </a>
    </article>
  );
}
