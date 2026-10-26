import { useRef } from 'react';
import { backPlatePath, useFolderShape } from './folderShape.ts';
import type { FolderPalette } from './types.ts';

export interface FolderBackProps {
  palette: FolderPalette;
}

export default function FolderBack({ palette }: FolderBackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const path = useFolderShape(ref, backPlatePath);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-x-0 top-[14px] bottom-0"
      style={{ background: palette.back, clipPath: path ? `path('${path}')` : undefined }}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <path d={path} fill="none" stroke={palette.backEdge} strokeWidth="2" />
      </svg>
    </div>
  );
}
