import type { MarketplaceLink } from '@/types/content';

// lowercase and drop accents, so "cafe" finds "café"
function normalize(text: string): string {
  return text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();
}

function searchableText(link: MarketplaceLink): string {
  return normalize(`${link.name} ${link.category} ${link.description} ${new URL(link.url).host}`);
}

// every word typed must appear somewhere; links whose name matches come first, the rest keep their order
export default function searchMarketplace(links: MarketplaceLink[], query: string): MarketplaceLink[] {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return links;

  const matches = links.filter(link => {
    const text = searchableText(link);
    return words.every(word => text.includes(word));
  });
  const nameMatches = matches.filter(link => words.some(word => normalize(link.name).includes(word)));
  const otherMatches = matches.filter(link => !nameMatches.includes(link));
  return [...nameMatches, ...otherMatches];
}
