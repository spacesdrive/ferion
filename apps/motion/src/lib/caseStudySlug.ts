// reads <slug> from /case-studies/<slug>/, since one page is served for every case study address
export default function caseStudySlug(): string | null {
  const match = /^\/case-studies\/([^/]+)\/?$/.exec(window.location.pathname);
  return match?.[1] ?? null;
}
