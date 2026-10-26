import { person } from '@ferion/profile';
import { useEffect } from 'react';
import CaseStudyArticle from '@/components/caseStudy/CaseStudyArticle';
import CaseStudyMissing from '@/components/caseStudy/CaseStudyMissing';
import NicheGrid from '@/components/caseStudy/NicheGrid';
import Container from '@/components/layout/Container';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import { findNicheCase, nicheCases } from '@/data/caseStudy';
import { caseStudyPath } from '@/data/navigation';
import caseStudySlug from '@/lib/caseStudySlug';

const slug = caseStudySlug();
const niche = slug ? findNicheCase(slug) : undefined;
const others = nicheCases.filter(other => other !== niche).slice(0, 2);

export default function CaseStudyPage() {
  // every case study shares one HTML file, so the title and canonical address are set here
  useEffect(() => {
    if (!niche) return;
    document.title = `${niche.niche} · Case study · ${person.name}`;
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `${person.sites.motion}${caseStudyPath(niche.slug)}`);
  }, []);

  return (
    <PageShell>
      <Section id="case-study" className="pt-12 sm:pt-16">
        {niche ? <CaseStudyArticle niche={niche} /> : <CaseStudyMissing />}
      </Section>

      {niche && others.length > 0 && (
        <section aria-labelledby="more-case-studies-heading" className="pb-[clamp(4rem,9vw,8rem)]">
          <Container>
            <h2 id="more-case-studies-heading" className="text-2xl font-semibold tracking-tight">
              More case studies
            </h2>
            <NicheGrid niches={others} />
          </Container>
        </section>
      )}
    </PageShell>
  );
}
