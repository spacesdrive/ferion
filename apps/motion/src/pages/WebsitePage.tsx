import Container from '@/components/layout/Container';
import PageMissing from '@/components/layout/PageMissing';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SiteStack from '@/components/websites/SiteStack';
import WebsiteDetail from '@/components/websites/WebsiteDetail';
import { pages, websitePath } from '@/data/navigation';
import sites, { findSite } from '@/data/sites';
import slugFromPath from '@/lib/slugFromPath';
import usePageMeta from '@/lib/usePageMeta';

const slug = slugFromPath('websites');
const site = slug ? findSite(slug) : undefined;
const others = sites.filter(other => other !== site).slice(0, 2);

export default function WebsitePage() {
  usePageMeta(site ? `${site.name} · Website` : null, site ? websitePath(site.slug) : null);

  return (
    <PageShell>
      <Section id="website" className="pt-12 sm:pt-16">
        {site ? (
          <WebsiteDetail site={site} />
        ) : (
          <PageMissing title="This website isn't here" backHref={pages.websites} backLabel="See all websites" />
        )}
      </Section>

      {site && (
        <section aria-labelledby="more-websites-heading" className="pb-[clamp(3.5rem,7vw,6rem)]">
          <Container>
            <h2 id="more-websites-heading" className="text-3xl font-medium tracking-tight">
              More websites
            </h2>
            <SiteStack sites={others} />
          </Container>
        </section>
      )}
    </PageShell>
  );
}
