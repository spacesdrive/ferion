// a handwritten white headline over the video, plain words with no shapes, set on two lines as in the reference
export default function HeroHeadline() {
  return (
    <h1
      id="top-heading"
      className="text-center font-hand text-[2.75rem] leading-[1.15] font-normal text-snow [text-shadow:0_2px_24px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-[3.25rem] xl:text-[4.25rem]"
    >
      {/* each half stays on one line from laptop width up; the sizes above were measured to fit */}
      <span className="block text-balance lg:whitespace-nowrap">Hi, I&apos;m Ujjwal, a motion designer</span>
      <span className="block text-balance lg:whitespace-nowrap">who works efficiently to meet deadlines.</span>
    </h1>
  );
}
