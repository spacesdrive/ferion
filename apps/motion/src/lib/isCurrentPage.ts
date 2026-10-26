// true when a page link points at the page being viewed; links to a home page section never count
export default function isCurrentPage(href: string): boolean {
  if (href.includes('#')) return false;
  const path = window.location.pathname.replace(/\/?$/, '/');
  return path === href;
}
