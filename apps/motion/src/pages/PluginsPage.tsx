import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import PluginGrid from '@/components/plugins/PluginGrid';
import plugins from '@/data/plugins';

export default function PluginsPage() {
  return (
    <PageShell>
      <Section id="plugins" className="pt-12 sm:pt-16">
        <SectionHeader
          id="plugins"
          level="h1"
          eyebrow="Plugin marketplace"
          intro="Every plugin I've built for my own edits. All of them are free to download. These listings are samples for now, the real plugins are on their way."
        >
          Free plugins for <Accent>editors</Accent>
        </SectionHeader>
        <PluginGrid plugins={plugins} />
      </Section>
    </PageShell>
  );
}
