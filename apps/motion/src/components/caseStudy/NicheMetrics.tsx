import cn from '@ferion/ui/lib/cn.ts';
import type { NicheCase } from '@/types/content';

export interface NicheMetricsProps {
  metrics: NicheCase['metrics'];
  className?: string;
}

// the three numbers of a case study, big value over a small mono label
export default function NicheMetrics({ metrics, className }: NicheMetricsProps) {
  return (
    <dl className={cn('grid grid-cols-3 gap-3', className)}>
      {metrics.map(metric => (
        <div key={metric.label} className="flex flex-col-reverse gap-1">
          <dt className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{metric.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
