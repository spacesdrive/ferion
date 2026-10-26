export interface NavLink {
  label: string;
  href: string;
}

// the pages of the site; each one has its own HTML file listed in vite.config.ts
export const pages = {
  home: '/',
  work: '/work/',
  websites: '/websites/',
  plugins: '/plugins/',
  caseStudies: '/case-studies/',
};

const navigation: NavLink[] = [
  { label: 'Work', href: pages.work },
  { label: 'Websites', href: pages.websites },
  { label: 'Plugins', href: pages.plugins },
  { label: 'Case studies', href: pages.caseStudies },
  { label: 'FAQ', href: '/#faq' },
];

export default navigation;
