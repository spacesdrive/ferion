import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { NicheCase } from '@/types/content';
import CaseCard from './CaseCard';
import CaseFeatureCard from './CaseFeatureCard';

export interface CaseListProps {
  niches: NicheCase[];
  // the first case study gets the wide card; "more case studies" lists turn it off
  hasFeature?: boolean;
}

// laid out like a blog index: the newest wide on top, the rest two across
export default function CaseList({ niches, hasFeature = true }: CaseListProps) {
  const [first, ...rest] = niches;
  const featured = hasFeature ? first : undefined;
  const cards = featured ? rest : niches;

  return (
    <div className="mt-6 flex flex-col gap-5">
      {featured && (
        <Reveal>
          <CaseFeatureCard niche={featured} />
        </Reveal>
      )}
      {cards.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((niche, index) => (
            <Reveal key={niche.slug} delay={0.04 * (index % 2)} className="h-full">
              <CaseCard niche={niche} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
