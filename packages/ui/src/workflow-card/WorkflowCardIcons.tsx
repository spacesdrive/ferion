import CategoryIcon from './CategoryIcon.tsx';
import type { ToolCategoryConfig } from './types.ts';

const VISIBLE_ICONS = 3;

export interface WorkflowCardIconsProps {
  categories: string[];
  config?: Record<string, ToolCategoryConfig>;
}

// up to three category icons, tilted left and right in turn
export default function WorkflowCardIcons({ categories, config }: WorkflowCardIconsProps) {
  const shown = categories.slice(0, VISIBLE_ICONS);
  const hiddenCount = categories.length - shown.length;

  return (
    <div className="flex min-h-8 items-center -space-x-1.5">
      {shown.map((category, index) => (
        <div
          key={category}
          className="relative flex min-w-8 items-center justify-center"
          style={{ transform: iconTilt(index, shown.length), zIndex: index }}
        >
          <CategoryIcon category={category} config={config} />
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className="z-0 flex size-[34px] min-h-[34px] min-w-[34px] items-center justify-center rounded-lg bg-zinc-200/60 text-sm text-zinc-600 dark:bg-zinc-700/60 dark:text-zinc-500">
          +{hiddenCount}
        </div>
      )}
    </div>
  );
}

function iconTilt(index: number, count: number): string {
  if (count <= 1) return 'none';
  return index % 2 === 0 ? 'rotate(8deg)' : 'rotate(-8deg)';
}
