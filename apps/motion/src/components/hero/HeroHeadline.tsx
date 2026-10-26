import FlowerMark from './FlowerMark';
import SplitCircle from './SplitCircle';

// the designer-pop headline: serif italics, flowers and circles set inline with the words
export default function HeroHeadline() {
  return (
    <h1
      id="top-heading"
      className="mx-auto max-w-6xl text-center text-[2.6rem] leading-[1.12] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
    >
      <span className="serif-accent">Hi, I&apos;m</span> <FlowerMark className="text-pop-blue" /> Ujjwal{' '}
      <SplitCircle left="#8ee07a" right="#0a2bff" />
      <br className="hidden sm:block" /> <SplitCircle left="#ff5ec4" right="#ff5a1f" />{' '}
      <span className="serif-accent">a motion designer</span> <FlowerMark className="text-pop-lilac" />{' '}
      <SplitCircle left="#bcd4ff" right="#e8ff6a" /> who <span>cuts videos people replay.</span>
    </h1>
  );
}
