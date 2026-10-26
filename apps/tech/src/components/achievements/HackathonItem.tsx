import cn from '@ferion/ui/lib/cn.ts';
import { Maximize2 } from 'lucide-react';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Polaroid from '@/components/brand/Polaroid';
import type { Hackathon } from '@/data/hackathons';

export interface HackathonItemProps {
  item: Hackathon;
  tilt: number;
  onOpenPhoto: (item: Hackathon) => void;
}

export default function HackathonItem({ item, tilt, onOpenPhoto }: HackathonItemProps) {
  const isPlacement = item.placement !== null;

  return (
    <Reveal as="li" className="flex flex-col gap-7">
      <button
        type="button"
        onClick={() => onOpenPhoto(item)}
        aria-label={`View photo from ${item.event} ${item.year}`}
        className="group relative mx-2 block rounded-sm text-left sm:mx-3"
      >
        <Polaroid
          src={item.photo}
          alt=""
          caption={`${item.event} · ${item.year}`}
          tilt={tilt}
          width="1600"
          height="1000"
          imageClassName="aspect-[16/10]"
          className="transition-[rotate] duration-300 group-hover:!rotate-0 motion-reduce:transition-none"
        />
        <span className="absolute top-5 right-5 grid size-9 place-items-center rounded-full border-2 border-[#121212] bg-[#fffffc] text-[#121212] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="size-4" aria-hidden="true" />
        </span>
      </button>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <time dateTime={item.year}>{item.year}</time>
          {item.location && <> · {item.location}</>}
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.03em]">{item.event}</h3>
          <span className={cn('ink-pill px-3 py-1 text-[13px]', isPlacement && 'ink-pill-solid')}>{item.result}</span>
        </div>
        <p className="text-base text-body">
          Project: <span className="font-bold text-foreground">{item.project}</span>
        </p>
        <p className="text-[16px] leading-[1.65] text-pretty text-body">{item.description}</p>
      </div>
    </Reveal>
  );
}
