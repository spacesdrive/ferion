import SoftwareTile from '@/components/software/SoftwareTile';
import software from '@/data/software';

// the four tool icons stacked like avatars, with a short line on what I use them for
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
        The tools I use for <span className="font-semibold text-ink">motion design, editing and web design</span>
      </p>
    </div>
  );
}
