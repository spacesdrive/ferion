import SoftwareTile from '@/components/software/SoftwareTile';
import software from '@/data/software';

const toolNames = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(
  software.map(item => item.label),
);

// the four tool icons stacked like avatars, with the tools named beside them
export default function ToolBadges() {
  return (
    <div className="flex items-center gap-3">
      <ul aria-hidden="true" className="flex -space-x-2.5">
        {software.map(item => (
          <li key={item.id}>
            <SoftwareTile software={item} className="size-9 shadow-md ring-2 ring-card" />
          </li>
        ))}
      </ul>
      <p className="max-w-52 text-xs leading-snug text-muted">
        Made with <span className="font-semibold text-ink">{toolNames}</span>
      </p>
    </div>
  );
}
