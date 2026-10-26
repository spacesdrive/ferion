import IconFolder from '@ferion/ui/icon-folder/IconFolder.tsx';
import type { FolderIcon } from '@ferion/ui/icon-folder/types.ts';
import useTheme from '@ferion/ui/lib/useTheme.ts';
import software from '@/data/software';
import themeColors from '@/lib/themeColors';
import type { Software, SoftwareId } from '@/types/content';
import type { WorkFilter } from './workFilter';

function toFolderIcon(item: Software): FolderIcon {
  if (item.icon.kind === 'app') return { id: item.id, label: item.label, src: item.icon.src };
  return {
    id: item.id,
    label: item.label,
    background: item.icon.background,
    node: <img src={item.icon.src} alt="" draggable={false} className="size-[56%]" />,
  };
}

const ICONS = software.map(toFolderIcon);

export interface ToolkitFolderProps {
  filter: WorkFilter;
  onChange: (filter: WorkFilter) => void;
}

// pressing the folder shows everything; pressing a tool shows only the work made with it
export default function ToolkitFolder({ filter, onChange }: ToolkitFolderProps) {
  const { theme } = useTheme(themeColors);

  return (
    <IconFolder
      title="My toolkit"
      icons={ICONS}
      theme={theme}
      // the four tags already name every tool, so the corner badge would only crowd them
      showPill={false}
      isActive={filter === 'all'}
      activeIconId={filter === 'all' ? null : filter}
      onSelectFolder={() => onChange('all')}
      onSelectIcon={id => onChange(id as SoftwareId)}
      className="mx-auto"
    />
  );
}
