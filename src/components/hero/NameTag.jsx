import { CurlyArrow } from '@/components/hero/CurlyArrow';
import { NoteSticker } from '@/components/hero/NoteSticker';
import { PillSticker } from '@/components/hero/PillSticker';
import { RoughBox } from '@/components/hero/RoughBox';
import { Squiggle } from '@/components/hero/Squiggle';
import { profile } from '@/data/profile';

const [firstSticker, secondSticker] = profile.stickers;

// Stickers and notes float around the name on wide screens and stack in the flow on phones.
export function NameTag() {
  return (
    <div className="flex flex-col items-center">
      <p className="flex flex-col items-center gap-1">
        <span className="note text-[1.75rem] sm:text-4xl">hi, i&apos;m</span>
        <Squiggle className="text-muted-foreground" />
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3 md:hidden">
        <PillSticker tilt={-4}>{firstSticker}</PillSticker>
        <PillSticker tilt={3}>{secondSticker}</PillSticker>
      </div>

      <div className="relative mt-6 md:mt-10">
        <PillSticker tilt={-7} className="absolute -top-9 -left-36 hidden md:inline-flex">
          {firstSticker}
        </PillSticker>
        <PillSticker tilt={6} className="absolute -top-7 -right-36 hidden md:inline-flex">
          {secondSticker}
        </PillSticker>

        <h1
          id="hero-heading"
          className="relative px-[clamp(1.25rem,4vw,2.75rem)] pt-[clamp(0.25rem,1vw,0.75rem)] pb-[clamp(0.75rem,1.8vw,1.5rem)]"
        >
          <span className="sr-only">{profile.name} </span>
          <span
            aria-hidden="true"
            className="block text-[clamp(4.75rem,17vw,11rem)] leading-[0.95] font-extrabold tracking-[-0.06em]"
          >
            {profile.wordmark}
          </span>
          <RoughBox />
        </h1>

        <div className="absolute -bottom-16 -left-44 hidden items-end gap-1 md:flex">
          <NoteSticker tilt={-4}>{profile.notes.role}</NoteSticker>
          <CurlyArrow className="mb-10" />
        </div>
        <div className="absolute -right-40 -bottom-14 hidden items-end gap-1 md:flex">
          <CurlyArrow className="mb-10 -scale-x-100" />
          <NoteSticker tilt={3}>{profile.notes.fact}</NoteSticker>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-4 md:hidden">
        <NoteSticker tilt={-3}>{profile.notes.role}</NoteSticker>
        <NoteSticker tilt={2}>{profile.notes.fact}</NoteSticker>
      </div>
    </div>
  );
}
