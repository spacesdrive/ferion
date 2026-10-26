import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import PluginGrid from '@/components/plugins/PluginGrid';
import { pages } from '@/data/navigation';
import plugins from '@/data/plugins';

// one row of three; the rest live on the plugins page
const HOME_LIMIT = 3;

export default function Plugins() {
  return (
    <Section id="plugins">
      <SectionHeader
        id="plugins"
        eyebrow="Plugin marketplace"
        intro="My newest plugins, free to download. These listings are samples for now, the real plugins are on their way."
      >
        Free plugins for <Accent>editors</Accent>
      </SectionHeader>
      <PluginGrid plugins={plugins.slice(0, HOME_LIMIT)} />
      <SeeAllLink href={pages.plugins} label={`See all ${plugins.length} plugins`} />
    </Section>
  );
}
