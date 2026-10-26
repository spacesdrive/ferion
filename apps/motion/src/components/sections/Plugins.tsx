import Reveal from '@ferion/ui/motion/Reveal.tsx';
import WorkflowCard from '@ferion/ui/workflow-card/WorkflowCard.tsx';
import Accent from '@/components/layout/Accent';
import SampleBadge from '@/components/layout/SampleBadge';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import pluginCategories from '@/data/pluginCategories';
import plugins from '@/data/plugins';

export default function Plugins() {
  return (
    <Section id="plugins">
      <SectionHeader
        id="plugins"
        eyebrow="Plugin marketplace"
        intro="Tools I built for my own edits, free to download. These listings are samples for now, the real plugins are on their way."
      >
        Free plugins for <Accent>editors</Accent>
      </SectionHeader>

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
              actionLabel="Download"
              actionHref={plugin.downloadUrl}
            />
            {plugin.isSample && <SampleBadge className="absolute top-4 right-4 z-[3]" />}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
