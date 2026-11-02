import PageShell from '@/components/layout/PageShell';
import CaseStudy from '@/components/sections/CaseStudy';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import Marketplace from '@/components/sections/Marketplace';
import Services from '@/components/sections/Services';
import Showreel from '@/components/sections/Showreel';
import Websites from '@/components/sections/Websites';
import Work from '@/components/sections/Work';

export default function HomePage() {
  return (
    <PageShell hasHero>
      <Hero />
      <Showreel />
      <Work />
      <Websites />
      <Marketplace />
      <CaseStudy />
      <Services />
      <Faq />
    </PageShell>
  );
}
