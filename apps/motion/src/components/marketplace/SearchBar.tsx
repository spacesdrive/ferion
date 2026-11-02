import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}

// "/" jumps here from anywhere on the page, the way many search boxes work; Esc clears it
export default function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isTyping = target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
      if (event.key !== '/' || isTyping) return;
      event.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <label className="flex items-center gap-3 rounded-full border border-line bg-card px-5 py-3.5 shadow-[0_6px_24px_rgb(0_0_0/0.05)] transition focus-within:border-ink focus-within:shadow-[0_6px_24px_rgb(0_0_0/0.1)]">
        <Search className="size-5 shrink-0 text-muted" aria-hidden="true" />
        <span className="sr-only">Search the marketplace</span>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={event => onChange(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Escape') onChange('');
          }}
          placeholder="Search sounds, fonts, 3D, ASCII..."
          autoComplete="off"
          spellCheck={false}
          className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="grid size-7 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-mist hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        )}
      </label>
      <p aria-live="polite" className="mt-3 text-center text-sm text-muted">
        {value ? `${resultCount} ${resultCount === 1 ? 'result' : 'results'} for "${value.trim()}"` : ''}
      </p>
    </div>
  );
}
