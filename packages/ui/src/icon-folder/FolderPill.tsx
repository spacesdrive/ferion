import type { FolderIcon, FolderPalette } from './types.ts';

export interface FolderPillProps {
  icons: FolderIcon[];
  palette: FolderPalette;
}

export default function FolderPill({ icons, palette }: FolderPillProps) {
  return (
    <span
      aria-hidden="true"
      className="absolute right-3.5 bottom-3.5 flex h-[34px] items-center gap-1.5 rounded-full border px-1.5"
      style={{ background: palette.pillBg, borderColor: palette.pillBorder }}
    >
      {icons.map(icon => (
        <span key={icon.id} className="block h-[22px] w-[22px] overflow-hidden rounded-[7px]">
          <span
            className="grid h-full w-full place-items-center [&_svg]:h-[60%] [&_svg]:w-[60%]"
            style={{ background: icon.src ? undefined : icon.background }}
          >
            {icon.src ? <img src={icon.src} alt="" className="h-full w-full object-cover" /> : icon.node}
          </span>
        </span>
      ))}
    </span>
  );
}
