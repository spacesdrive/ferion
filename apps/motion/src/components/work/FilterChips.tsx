import cn from '@ferion/ui/lib/cn.ts';
import SoftwareTile from '@/components/software/SoftwareTile';
import software from '@/data/software';
import videos from '@/data/videos';
import { filterVideos, type WorkFilter } from './workFilter';

export interface FilterChipsProps {
  filter: WorkFilter;
  onChange: (filter: WorkFilter) => void;
}

const CHIP = 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors';

// a tool with nothing to show yet gets no chip; the folder still lists it
const toolsInUse = software.filter(item => filterVideos(videos, item.id).length > 0);

// the same choice as the folder, as plain buttons for keyboards and small screens
export default function FilterChips({ filter, onChange }: FilterChipsProps) {
  return (
    <div role="group" aria-label="Filter work by tool" className="flex flex-wrap gap-2">
      <button
        type="button"
        aria-pressed={filter === 'all'}
        onClick={() => onChange('all')}
        className={cn(CHIP, filter === 'all' ? 'border-ink bg-ink text-paper' : 'border-line bg-card hover:border-ink')}
      >
        Everything
        <span className="font-mono text-xs opacity-70">{videos.length}</span>
      </button>
      {toolsInUse.map(item => (
        <button
          key={item.id}
          type="button"
          aria-pressed={filter === item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            CHIP,
            filter === item.id ? 'border-ink bg-ink text-paper' : 'border-line bg-card hover:border-ink',
          )}
        >
          <SoftwareTile software={item} className="size-5" />
          {item.label}
          <span className="font-mono text-xs opacity-70">{filterVideos(videos, item.id).length}</span>
        </button>
      ))}
    </div>
  );
}
