import type { ToolCategoryConfig } from '@ferion/ui/workflow-card/types.ts';
import {
  BoxBoldDuotoneIcon,
  ClapperboardBoldDuotoneIcon,
  CodeSquareBoldDuotoneIcon,
  GalleryBoldDuotoneIcon,
  MagicWandBoldDuotoneIcon,
  MonitorBoldDuotoneIcon,
  MonitorCameraBoldDuotoneIcon,
  SoundwaveBoldDuotoneIcon,
  TextSquareBoldDuotoneIcon,
} from '@solar-icons/react';

// the card's tilted icons, one per tag on a marketplace link
const marketplaceCategories: Record<string, ToolCategoryConfig> = {
  sound: { icon: SoundwaveBoldDuotoneIcon, bgColor: 'bg-purple-500/20', iconColor: 'text-purple-600' },
  '3d': { icon: BoxBoldDuotoneIcon, bgColor: 'bg-sky-500/20', iconColor: 'text-blue-600' },
  texture: { icon: GalleryBoldDuotoneIcon, bgColor: 'bg-orange-500/20', iconColor: 'text-orange-600' },
  film: { icon: ClapperboardBoldDuotoneIcon, bgColor: 'bg-yellow-500/20', iconColor: 'text-yellow-600' },
  type: { icon: TextSquareBoldDuotoneIcon, bgColor: 'bg-pink-500/20', iconColor: 'text-pink-600' },
  ascii: { icon: CodeSquareBoldDuotoneIcon, bgColor: 'bg-emerald-500/20', iconColor: 'text-emerald-600' },
  camera: { icon: MonitorCameraBoldDuotoneIcon, bgColor: 'bg-red-500/20', iconColor: 'text-red-600' },
  motion: { icon: MagicWandBoldDuotoneIcon, bgColor: 'bg-teal-500/20', iconColor: 'text-teal-600' },
  web: { icon: MonitorBoldDuotoneIcon, bgColor: 'bg-indigo-500/20', iconColor: 'text-indigo-600' },
  general: { bgColor: 'bg-gray-500/20', iconColor: 'text-gray-600' },
};

export default marketplaceCategories;
