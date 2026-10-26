import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { NicheCase } from '@/types/content';
import NicheCard from './NicheCard';

export interface NicheGridProps {
  niches: NicheCase[];
}

export default function NicheGrid({ niches }: NicheGridProps) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {niches.map((niche, index) => (
        <Reveal key={niche.niche} delay={0.04 * (index % 2)} className="h-full">
          <NicheCard niche={niche} />
        </Reveal>
      ))}
    </div>
  );
}
