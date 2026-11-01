import FlowerMark from './FlowerMark';
import SplitCircle from './SplitCircle';

// a handwritten white headline over the video, with the flowers and circles set inline with the words
export default function HeroHeadline() {
  return (
    <h1
      id="top-heading"
      className="mx-auto max-w-5xl text-center font-hand text-5xl leading-[1.08] font-normal text-balance text-snow [text-shadow:0_2px_24px_rgb(0_0_0/0.25)] sm:text-6xl lg:text-[5.25rem]"
    >
      Hi, I&apos;m <FlowerMark className="text-pop-blue" /> Ujjwal <SplitCircle left="#8ee07a" right="#0a2bff" />
      <br className="hidden sm:block" /> <SplitCircle left="#ff5ec4" right="#ff5a1f" /> a motion designer{' '}
      <FlowerMark className="text-pop-lilac" /> <SplitCircle left="#bcd4ff" right="#e8ff6a" /> who works efficiently to
      meet deadlines.
    </h1>
  );
}
