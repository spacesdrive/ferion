import PageShell from '@/components/layout/PageShell';
import CaseStudy from '@/components/sections/CaseStudy';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import Plugins from '@/components/sections/Plugins';
import Services from '@/components/sections/Services';
import Websites from '@/components/sections/Websites';
import Work from '@/components/sections/Work';

export default function HomePage() {
  return (
    <PageShell hasHero>
      <Hero />
      <Work />
      <Websites />
      <Plugins />
      <CaseStudy />
      <Services />
      <Faq />
    </PageShell>
  );
}
