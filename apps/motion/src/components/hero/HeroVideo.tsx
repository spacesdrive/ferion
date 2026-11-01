import usePrefersReducedMotion from '@ferion/ui/lib/usePrefersReducedMotion.ts';

const POSTER = '/hero/sky-field.webp';

// the looping sky and flower field behind the headline; phones get the lighter 720p file
export default function HeroVideo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      {prefersReducedMotion ? (
        <img src={POSTER} alt="" className="size-full object-cover" />
      ) : (
        <video autoPlay muted loop playsInline preload="auto" poster={POSTER} className="size-full object-cover">
          <source src="/hero/sky-field-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/hero/sky-field.mp4" type="video/mp4" />
        </video>
      )}
      {/* darkens the bright clouds just enough for white text, and fades the field into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/35 via-night/5 to-night/30" />
    </div>
  );
}
