// a bold "Hi I'm Ujjwal" over a big italic serif role, which runs across the top of the portrait
export default function HeroHeadline() {
  return (
    <h1 id="top-heading" className="text-center text-ink">
      <span className="block text-[3.6rem] leading-[0.95] font-medium tracking-[-0.05em] sm:text-8xl lg:text-[8.5rem]">
        Hi I&apos;m Ujjwal
      </span>
      <span className="block font-serif text-[3.9rem] leading-[0.95] font-normal tracking-[-0.03em] italic sm:text-8xl lg:text-[9.5rem]">
        Motion Designer
      </span>
    </h1>
  );
}
