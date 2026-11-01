import usePrefersReducedMotion from '@ferion/ui/lib/usePrefersReducedMotion.ts';

const POSTER = '/hero/autumn-lake.webp';

// a short loop of autumn trees over a lake behind the headline; phones get the lighter 720p file
export default function HeroVideo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      {prefersReducedMotion ? (
        <img src={POSTER} alt="" className="size-full object-cover" />
      ) : (
        <video autoPlay muted loop playsInline preload="auto" poster={POSTER} className="size-full object-cover">
          <source src="/hero/autumn-lake-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/hero/autumn-lake.mp4" type="video/mp4" />
        </video>
      )}
      {/* darkens the bright sky just enough for white text */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/20 to-night/40" />
    </div>
  );
}
