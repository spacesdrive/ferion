import type { ToolCategoryConfig } from '@ferion/ui/workflow-card/types.ts';
import {
  ExportBoldDuotoneIcon,
  MagicWandBoldDuotoneIcon,
  MusicNoteBoldDuotoneIcon,
  PaletteBoldDuotoneIcon,
  SubtitlesBoldDuotoneIcon,
  TextSquareBoldDuotoneIcon,
  VideoFrameCutBoldDuotoneIcon,
} from '@solar-icons/react';

// the workflow card's tilted step icons, one per kind of plugin step
const pluginCategories: Record<string, ToolCategoryConfig> = {
  captions: { icon: SubtitlesBoldDuotoneIcon, bgColor: 'bg-sky-500/20', iconColor: 'text-blue-600' },
  titles: { icon: TextSquareBoldDuotoneIcon, bgColor: 'bg-pink-500/20', iconColor: 'text-pink-600' },
  color: { icon: PaletteBoldDuotoneIcon, bgColor: 'bg-orange-500/20', iconColor: 'text-orange-600' },
  audio: { icon: MusicNoteBoldDuotoneIcon, bgColor: 'bg-purple-500/20', iconColor: 'text-purple-600' },
  motion: { icon: MagicWandBoldDuotoneIcon, bgColor: 'bg-emerald-500/20', iconColor: 'text-emerald-600' },
  reframe: { icon: VideoFrameCutBoldDuotoneIcon, bgColor: 'bg-yellow-500/20', iconColor: 'text-yellow-600' },
  export: { icon: ExportBoldDuotoneIcon, bgColor: 'bg-teal-500/20', iconColor: 'text-teal-600' },
  general: { bgColor: 'bg-gray-500/20', iconColor: 'text-gray-600' },
};

export default pluginCategories;
