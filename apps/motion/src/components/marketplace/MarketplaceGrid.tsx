import WorkflowCard from '@ferion/ui/workflow-card/WorkflowCard.tsx';
import type { ToolCategoryConfig } from '@ferion/ui/workflow-card/types.ts';
import { AnimatePresence, motion } from 'motion/react';
import type { MarketplaceLink } from '@/types/content';

export interface MarketplaceGridProps {
  links: MarketplaceLink[];
}

// the card's icon slot shows the site's own favicon
function faviconConfig(link: MarketplaceLink): Record<string, ToolCategoryConfig> {
  const bgColor = link.isFaviconLight ? 'bg-night' : 'bg-white ring-1 ring-black/5';
  return { [link.name]: { imageUrl: link.favicon, bgColor, iconColor: '' } };
}

// cards fade and slide into place as a search narrows or widens the list
export default function MarketplaceGrid({ links }: MarketplaceGridProps) {
  return (
    <motion.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {links.map(link => (
          <motion.li
            key={link.url}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="h-full"
          >
            <WorkflowCard
              title={link.name}
              description={link.description}
              steps={[{ id: link.name, title: link.name, toolCategory: link.name }]}
              categoryConfig={faviconConfig(link)}
              triggerLabel={link.category}
              actionLabel="Visit site"
              actionHref={link.url}
              actionAriaLabel={`Visit ${link.name}`}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
