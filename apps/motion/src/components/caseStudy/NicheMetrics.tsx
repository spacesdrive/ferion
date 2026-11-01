import cn from '@ferion/ui/lib/cn.ts';
import type { NicheCase } from '@/types/content';

export interface NicheMetricsProps {
  metrics: NicheCase['metrics'];
  className?: string;
}

// the three numbers of a case study, big value over a small label
export default function NicheMetrics({ metrics, className }: NicheMetricsProps) {
  return (
    <dl className={cn('grid grid-cols-3 gap-3', className)}>
      {metrics.map(metric => (
        <div key={metric.label} className="flex flex-col-reverse gap-1">
          <dt className="text-xs text-muted">{metric.label}</dt>
          <dd className="text-3xl font-medium tracking-[-0.03em]">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
