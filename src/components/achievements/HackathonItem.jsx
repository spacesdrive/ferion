import { Award, Maximize2, MapPin, Trophy } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function HackathonItem({ item, isLast, onOpenPhoto }) {
  const isPlacement = item.placement !== null;
  const Icon = isPlacement ? Trophy : Award;

  return (
    <Reveal as="li" className="relative grid grid-cols-[auto_1fr] gap-x-4 pb-10 last:pb-0">
      {!isLast && (
        <span aria-hidden="true" className="absolute top-11 bottom-1 left-[19.5px] w-px bg-border" />
      )}

      <div className="relative grid size-10 place-items-center rounded-full border bg-card shadow-xs ring-4 ring-background">
        <Icon className="size-4 text-foreground" aria-hidden="true" />
      </div>

      <div className="min-w-0 pt-0.5">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-muted-foreground">
          <time dateTime={item.year}>{item.year}</time>
          {item.location && (
            <>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" aria-hidden="true" />
                {item.location}
              </span>
            </>
          )}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
          <h3 className="text-base leading-tight font-semibold">{item.event}</h3>
          <span
            className={cn(
              'rounded-full border px-2 py-0.5 text-[11px] leading-4 font-medium',
              isPlacement
                ? 'border-accent/30 bg-accent/10 text-accent'
                : 'bg-muted text-muted-foreground'
            )}
          >
            {item.result}
          </span>
        </div>

        <p className="mt-1.5 text-sm">
          <span className="text-muted-foreground">Project </span>
          <span className="font-medium">{item.project}</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{item.description}</p>

        <button
          type="button"
          onClick={() => onOpenPhoto(item)}
          aria-label={`View photo from ${item.event} ${item.year}`}
          className="group relative mt-4 block aspect-[16/10] w-full overflow-hidden rounded-xl border bg-muted sm:max-w-sm"
        >
          <img
            src={item.photo}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span className="absolute right-2.5 bottom-2.5 grid size-8 place-items-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="size-3.5" aria-hidden="true" />
          </span>
        </button>
      </div>
    </Reveal>
  );
}
