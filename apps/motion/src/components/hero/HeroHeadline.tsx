import avatar from '@/assets/brand/avatar.webp';
import FlowerMark from './FlowerMark';
import PhotoPill from './PhotoPill';
import SplitPill from './SplitPill';

// the designer-pop headline: serif italics, flowers and pills set inline with the words
export default function HeroHeadline() {
  return (
    <h1
      id="top-heading"
      className="mx-auto max-w-6xl text-center text-[2.6rem] leading-[1.12] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
    >
      <span className="serif-accent">Hi, I&apos;m</span> <FlowerMark className="text-pop-blue" /> Ujjwal{' '}
      <PhotoPill src={avatar} alt="Photo of Ujjwal" />
      <br className="hidden sm:block" /> <SplitPill left="#ff5ec4" right="#ff5a1f" />{' '}
      <span className="serif-accent">a motion designer</span> <FlowerMark className="text-pop-lilac" />{' '}
      <SplitPill left="#bcd4ff" right="#e8ff6a" /> who <span>cuts videos people replay.</span>
    </h1>
  );
}
