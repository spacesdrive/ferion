import { svg as afterEffectsSvg } from '@thesvg/icons/after-effects';
import { svg as claudeSvg } from '@thesvg/icons/claude';
import { svg as davinciSvg } from '@thesvg/icons/davinci-resolve';
// Cavalry is in neither icon set, so this is the app icon from cavalry.studio
import cavalryIcon from '@/assets/software/cavalry.svg';
import svgDataUri from '@/lib/svgDataUri';
import type { Software, SoftwareId } from '@/types/content';

// logos from @thesvg/icons (MIT and CC0); they stay trademarks of their owners
const software: Software[] = [
  { id: 'after-effects', label: 'After Effects', icon: { kind: 'app', src: svgDataUri(afterEffectsSvg) } },
  { id: 'cavalry', label: 'Cavalry', icon: { kind: 'app', src: cavalryIcon } },
  {
    id: 'davinci-resolve',
    label: 'DaVinci Resolve',
    icon: {
      kind: 'glyph',
      src: svgDataUri(davinciSvg, '#ffffff'),
      background: 'linear-gradient(135deg,#2e4a66,#162536)',
    },
  },
  {
    id: 'claude-design',
    label: 'Claude Design',
    icon: { kind: 'glyph', src: svgDataUri(claudeSvg), background: 'linear-gradient(135deg,#faf6ee,#efe6d6)' },
  },
];

export default software;

export function findSoftware(id: SoftwareId): Software {
  const match = software.find(item => item.id === id);
  // the list above is static, so a missing id is a typo in a data file
  if (!match) throw new Error(`Software "${id}" is not in software.ts`);
  return match;
}
