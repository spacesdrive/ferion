import type { FolderIcon } from './types.ts';

export interface FolderTileProps {
  icon: FolderIcon;
  ring: string;
  shadow: string;
}

export default function FolderTile({ icon, ring, shadow }: FolderTileProps) {
  return (
    <div
      className="grid h-full w-full place-items-center overflow-hidden rounded-[inherit]"
      style={{
        background: icon.src ? undefined : (icon.background ?? '#2a2a2a'),
        boxShadow: `0 18px 40px ${shadow}, 0 0 0 1px ${ring}`,
      }}
    >
      {icon.src ? <img src={icon.src} alt="" draggable={false} className="h-full w-full object-cover" /> : icon.node}
    </div>
  );
}
