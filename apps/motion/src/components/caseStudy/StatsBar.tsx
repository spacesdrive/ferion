import SampleBadge from '@/components/layout/SampleBadge';
import type { Stat } from '@/types/content';

export interface StatsBarProps {
  stats: Stat[];
  isSample: boolean;
}

// the limelight dark band of big numbers
export default function StatsBar({ stats, isSample }: StatsBarProps) {
  return (
    <div className="relative rounded-[2rem] bg-ink px-6 py-10 text-paper sm:px-10">
      {isSample && <SampleBadge className="absolute top-4 right-4" />}
      <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col-reverse gap-2 text-center">
            <dt className="font-mono text-[11px] tracking-[0.14em] text-paper/60 uppercase">{stat.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
