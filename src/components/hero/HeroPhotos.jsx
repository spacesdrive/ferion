import markSticker from '@/assets/brand/mark-sticker.webp';
import { Polaroid } from '@/components/brand/Polaroid';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';

// The photo and doodle portrait: pinned to the sides on wide screens, a small pair on phones.
export function HeroPhotos({ layout }) {
  const isSides = layout === 'sides';

  return (
    <div
      className={cn(
        isSides
          ? 'pointer-events-none absolute inset-x-0 top-[57%] hidden items-start justify-between xl:flex'
          : 'flex items-end justify-center gap-6 xl:hidden'
      )}
    >
      <Polaroid
        src={profile.portrait}
        alt={`Photo of ${profile.name}`}
        caption="me, irl"
        tilt={-7}
        width="500"
        height="600"
        loading="eager"
        className={isSides ? 'w-40' : 'w-28'}
        imageClassName="aspect-[5/6] object-[42%_28%]"
      />
      <div className={cn('relative', isSides ? 'mt-6 w-44' : 'w-28')}>
        <img
          src={markSticker}
          alt="Doodle self-portrait of Ujjwal"
          width="640"
          height="653"
          fetchPriority="high"
          className="w-full rotate-6 drop-shadow-[0_8px_0_rgb(18_18_18/0.14)]"
        />
        <span aria-hidden="true" className="absolute -top-2 -right-1 rotate-[14deg] font-note text-5xl leading-none">
          ?
        </span>
      </div>
    </div>
  );
}
