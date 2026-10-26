import Reveal from '@ferion/ui/motion/Reveal.tsx';
import WorkflowCard from '@ferion/ui/workflow-card/WorkflowCard.tsx';
import SampleBadge from '@/components/layout/SampleBadge';
import pluginCategories from '@/data/pluginCategories';
import type { Plugin } from '@/types/content';

export interface PluginGridProps {
  plugins: Plugin[];
}

// every plugin is free, so the button downloads it; one with no file yet shows a disabled "Coming soon"
export default function PluginGrid({ plugins }: PluginGridProps) {
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {plugins.map((plugin, index) => (
        <Reveal key={plugin.title} delay={0.04 * (index % 3)} className="relative h-full">
          <WorkflowCard
            title={plugin.title}
            description={plugin.description}
            steps={plugin.steps}
            categoryConfig={pluginCategories}
            totalExecutions={plugin.downloadCount}
            executionUnit="downloads"
            triggerLabel={`For ${plugin.host}`}
            actionLabel={plugin.downloadUrl ? 'Download' : 'Coming soon'}
            actionHref={plugin.downloadUrl}
            actionAriaLabel={plugin.downloadUrl ? `Download ${plugin.title}` : `${plugin.title} is coming soon`}
            isActionDownload
            isActionDisabled={!plugin.downloadUrl}
          />
          {plugin.isSample && <SampleBadge className="absolute top-4 right-4 z-[3]" />}
        </Reveal>
      ))}
    </div>
  );
}
