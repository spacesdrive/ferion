import Reveal from '@ferion/ui/motion/Reveal.tsx';
import WorkflowCard from '@ferion/ui/workflow-card/WorkflowCard.tsx';
import marketplaceCategories from '@/data/marketplaceCategories';
import type { MarketplaceLink } from '@/types/content';

export interface MarketplaceGridProps {
  links: MarketplaceLink[];
}

// each card names the site, says what it is for in two lines and opens it in a new tab
export default function MarketplaceGrid({ links }: MarketplaceGridProps) {
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link, index) => (
        <Reveal key={link.url} delay={0.04 * (index % 3)} className="h-full">
          <WorkflowCard
            title={link.name}
            description={link.description}
            steps={link.tags.map(tag => ({ id: tag, title: tag, toolCategory: tag }))}
            categoryConfig={marketplaceCategories}
            triggerLabel={link.category}
            actionLabel="Visit site"
            actionHref={link.url}
            actionAriaLabel={`Visit ${link.name}`}
          />
        </Reveal>
      ))}
    </div>
  );
}
