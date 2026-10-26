export interface NavLink {
  label: string;
  href: string;
}

const navigation: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Websites', href: '#websites' },
  { label: 'Plugins', href: '#plugins' },
  { label: 'Case study', href: '#case-study' },
  { label: 'FAQ', href: '#faq' },
];

export default navigation;
