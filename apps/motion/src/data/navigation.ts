export interface NavLink {
  label: string;
  href: string;
}

// the pages of the site; each one has its own HTML file listed in vite.config.ts
export const pages = {
  home: '/',
  work: '/work/',
  websites: '/websites/',
  marketplace: '/marketplace/',
  caseStudies: '/case-studies/',
};

// one case study's or website's own page; public/_redirects serves each kind from one HTML file
export const caseStudyPath = (slug: string) => `${pages.caseStudies}${slug}/`;
export const websitePath = (slug: string) => `${pages.websites}${slug}/`;

const navigation: NavLink[] = [
  { label: 'Work', href: pages.work },
  { label: 'Websites', href: pages.websites },
  { label: 'Marketplace', href: pages.marketplace },
  { label: 'Case studies', href: pages.caseStudies },
  { label: 'FAQ', href: '/#faq' },
];

export default navigation;
