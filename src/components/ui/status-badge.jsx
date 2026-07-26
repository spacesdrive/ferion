/**
 * Adapted from the spectrumui status-badge pattern (https://ui.spectrumhq.in),
 * generalized into a single parametrized component instead of hardcoded demo swatches.
 */
import { CircleCheck, CircleDashed } from 'lucide-react';
import { cn } from '@/lib/utils';

const STATUS_STYLES = {
  ACTIVE: {
    icon: CircleDashed,
    className: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  COMPLETED: {
    icon: CircleCheck,
    className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
};

export function StatusBadge({ status }) {
  const config = STATUS_STYLES[status] ?? STATUS_STYLES.COMPLETED;
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase',
        config.className
      )}
    >
      <Icon className="size-3" strokeWidth={2.5} />
      {status}
    </span>
  );
}
