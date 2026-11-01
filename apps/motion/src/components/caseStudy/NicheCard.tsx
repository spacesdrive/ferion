import { BookOpen } from 'lucide-react';
import ButtonIcon from '@/components/layout/ButtonIcon';
import SampleBadge from '@/components/layout/SampleBadge';
import { caseStudyPath } from '@/data/navigation';
import type { NicheCase } from '@/types/content';
import NicheMetrics from './NicheMetrics';

export interface NicheCardProps {
  niche: NicheCase;
}

export default function NicheCard({ niche }: NicheCardProps) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-[1.75rem] border border-line bg-card p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-sm text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-sky" />
            {niche.platform}
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight">{niche.niche}</h3>
        </div>
        {niche.isSample && <SampleBadge />}
      </div>

      <NicheMetrics metrics={niche.metrics} />

      <p className="leading-relaxed text-muted">{niche.summary}</p>

      <a
        href={caseStudyPath(niche.slug)}
        aria-label={`Read the ${niche.niche} case study`}
        className="btn-lime mt-auto self-start"
      >
        Read
        <ButtonIcon icon={BookOpen} />
      </a>
    </article>
  );
}
