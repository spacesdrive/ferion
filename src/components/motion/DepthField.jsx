import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';

/**
 * Fixed, never-scrolling background plane that every section glides over.
 * The rest of the page paints no opaque background of its own (see the
 * `body`/App-root rules in index.css) so this canvas — dot grid warped by an
 * SVG liquid-distortion filter, plus a slow scroll-linked glow — reads
 * through in the negative space around and between sections.
 */
export function DepthField() {
  const turbulenceRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    gsap.to(turbulenceRef.current, {
      attr: { baseFrequency: '0.014 0.02' },
      duration: 16,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.to(glowRef.current, {
      yPercent: 35,
      xPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <svg className="absolute h-0 w-0">
        <filter id="depth-liquid">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" />
        </filter>
      </svg>

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          filter: 'url(#depth-liquid)',
          backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/2 h-[55vh] w-[55vw] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
    </div>
  );
}
