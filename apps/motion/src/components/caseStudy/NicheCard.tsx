import SampleBadge from '@/components/layout/SampleBadge';
import type { NicheCase } from '@/types/content';

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

      <dl className="grid grid-cols-3 gap-3">
        {niche.metrics.map(metric => (
          <div key={metric.label} className="flex flex-col-reverse gap-1">
            <dt className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{metric.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <p className="text-sm leading-relaxed text-muted">{niche.summary}</p>
    </article>
  );
}
