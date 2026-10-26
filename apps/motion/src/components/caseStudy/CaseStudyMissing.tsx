import { pages } from '@/data/navigation';

// shown when the address names a case study that doesn't exist
export default function CaseStudyMissing() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
      <h1 id="case-study-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
        This case study isn&apos;t here
      </h1>
      <p className="text-muted">The link may be old, or the case study was renamed.</p>
      <a href={pages.caseStudies} className="btn-ink">
        See all case studies
      </a>
    </div>
  );
}
