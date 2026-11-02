import type { Stat } from '@/types/content';

export interface StatsBarProps {
  stats: Stat[];
}

// a dark band of big numbers, each over its label and split by thin rules
export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="rounded-[2rem] bg-night px-6 py-10 text-snow sm:px-10 dark:ring-1 dark:ring-snow/10">
      <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col-reverse gap-2 border-l border-snow/15 pl-5">
            <dt className="text-sm text-snow/60">{stat.label}</dt>
            <dd className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
