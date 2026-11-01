import sites from '@/data/sites';

// the brands I've built for, sliding past slowly; it pauses while the pointer is over it
export default function BrandStrip() {
  const names = sites.map(site => site.name);

  return (
    <div className="edge-fade group overflow-hidden py-8">
      <p className="sr-only">Brands I&apos;ve designed for: {names.join(', ')}</p>
      {/* the list is drawn twice so the loop never shows a gap; the copy is hidden from screen readers */}
      <div aria-hidden="true" className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
        {[...names, ...names].map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="text-2xl font-semibold tracking-tight whitespace-nowrap text-ink/25"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
