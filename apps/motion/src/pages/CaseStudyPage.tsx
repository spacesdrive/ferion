import CaseList from '@/components/caseStudy/CaseList';
import CaseStudyArticle from '@/components/caseStudy/CaseStudyArticle';
import Container from '@/components/layout/Container';
import PageMissing from '@/components/layout/PageMissing';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import { findNicheCase, nicheCases } from '@/data/caseStudy';
import { caseStudyPath, pages } from '@/data/navigation';
import slugFromPath from '@/lib/slugFromPath';
import usePageMeta from '@/lib/usePageMeta';

const slug = slugFromPath('case-studies');
const niche = slug ? findNicheCase(slug) : undefined;
const others = nicheCases.filter(other => other !== niche).slice(0, 2);

export default function CaseStudyPage() {
  usePageMeta(niche ? `${niche.niche} · Case study` : null, niche ? caseStudyPath(niche.slug) : null);

  return (
    <PageShell>
      <Section id="case-study" className="pt-12 sm:pt-16">
        {niche ? (
          <CaseStudyArticle niche={niche} />
        ) : (
          <PageMissing
            title="This case study isn't here"
            backHref={pages.caseStudies}
            backLabel="See all case studies"
          />
        )}
      </Section>

      {niche && others.length > 0 && (
        <section aria-labelledby="more-case-studies-heading" className="pb-[clamp(3.5rem,7vw,6rem)]">
          <Container>
            <h2 id="more-case-studies-heading" className="text-3xl font-medium tracking-tight">
              More case studies
            </h2>
            <CaseList niches={others} hasFeature={false} />
          </Container>
        </section>
      )}
    </PageShell>
  );
}
