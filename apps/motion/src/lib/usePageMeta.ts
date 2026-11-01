import { person } from '@ferion/profile';
import { useEffect } from 'react';

// pages that serve many addresses from one HTML file set their own title and canonical address here
export default function usePageMeta(title: string | null, path: string | null) {
  useEffect(() => {
    if (!title || !path) return;
    document.title = `${title} · ${person.name}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${person.sites.motion}${path}`);
  }, [title, path]);
}
