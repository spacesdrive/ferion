import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { setLenisInstance } from '@/lib/lenis-instance';

// Lenis owns the raf loop; disabling autoRaf hands that loop to gsap.ticker below
// so scroll interpolation and every GSAP tween share a single frame clock.
const LENIS_OPTIONS = {
  autoRaf: false,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  // Native touch scroll already feels smooth on mobile; syncing it through
  // Lenis tends to add latency and hurt battery life for no visual gain.
  syncTouch: false,
};

// <ReactLenis root> only populates its instance on the render *after* its own
// mount effect runs, so reading it via a ref in a sibling effect (the
// pattern shown in Lenis's own docs) captures `undefined` and never updates.
// useLenis() subscribes to Lenis's internal store instead, so it re-fires
// correctly once the instance actually exists.
function LenisGsapBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    setLenisInstance(lenis);
    if (import.meta.env.DEV) window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      setLenisInstance(null);
    };
  }, [lenis]);

  return null;
}

export function SmoothScrollProvider({ children }) {
  return (
    <>
      <ReactLenis root options={LENIS_OPTIONS} />
      <LenisGsapBridge />
      {children}
    </>
  );
}
