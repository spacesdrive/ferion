// reads <slug> from /<section>/<slug>/, since one page is served for every address in that section
export default function slugFromPath(section: string): string | null {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts.length !== 2 || parts[0] !== section) return null;
  return parts[1] ?? null;
}
