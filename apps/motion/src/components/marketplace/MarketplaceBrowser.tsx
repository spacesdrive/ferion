import { useDeferredValue, useMemo, useState } from 'react';
import marketplace from '@/data/marketplace';
import searchMarketplace from '@/lib/searchMarketplace';
import MarketplaceGrid from './MarketplaceGrid';
import SearchBar from './SearchBar';

export interface MarketplaceBrowserProps {
  // how many links to show before anything is typed; a search always looks through every link
  limit?: number;
}

export default function MarketplaceBrowser({ limit }: MarketplaceBrowserProps) {
  const [query, setQuery] = useState('');
  // typing stays instant; the list catches up a moment later if a render is slow
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => searchMarketplace(marketplace, deferredQuery), [deferredQuery]);
  const isSearching = deferredQuery.trim() !== '';
  const shown = isSearching || limit === undefined ? results : results.slice(0, limit);

  return (
    <>
      <SearchBar value={query} onChange={setQuery} resultCount={results.length} />
      {shown.length > 0 ? (
        <MarketplaceGrid links={shown} />
      ) : (
        <p className="mt-8 rounded-[1.75rem] border border-line bg-card px-6 py-12 text-center text-muted">
          Nothing matches &quot;{deferredQuery.trim()}&quot;. Try a word like sound, fonts or 3D.
        </p>
      )}
    </>
  );
}
