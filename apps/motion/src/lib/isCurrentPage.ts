// true on the linked page and the pages inside it, so a case study highlights Case studies; section links never count
export default function isCurrentPage(href: string): boolean {
  if (href.includes('#')) return false;
  const path = window.location.pathname.replace(/\/?$/, '/');
  if (href === '/') return path === href;
  return path.startsWith(href);
}
