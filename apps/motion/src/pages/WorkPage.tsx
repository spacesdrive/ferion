import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import WorkBrowser from '@/components/work/WorkBrowser';

export default function WorkPage() {
  return (
    <PageShell>
      <Section id="work" className="pt-12 sm:pt-16">
        <SectionHeader
          id="work"
          level="h1"
          eyebrow="All work"
          intro="Launch films, reels, explainers and a few rebuilds. Open the folder to see everything, or press a tool to see only what I made with it."
        >
          Every video, sorted by <Accent>the tool</Accent> that made it
        </SectionHeader>
        <WorkBrowser />
      </Section>
    </PageShell>
  );
}
