import usePrefersReducedMotion from '@ferion/ui/lib/usePrefersReducedMotion.ts';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';
import cutout from '@/assets/brand/cutout.webp';

// how far, in pixels, the photo drifts toward the pointer
const DRIFT = 14;
const SPRING = { stiffness: 80, damping: 20 };

// the cut-out photo, fading into the page at the bottom; it leans gently toward the pointer
export default function HeroPortrait() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handlePointerMove = (event: PointerEvent) => {
      x.set(((event.clientX / window.innerWidth) * 2 - 1) * DRIFT);
      y.set(((event.clientY / window.innerHeight) * 2 - 1) * DRIFT * 0.5);
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [prefersReducedMotion, x, y]);

  return (
    <motion.img
      src={cutout}
      alt="Ujjwal Kumar Rai"
      width="679"
      height="1400"
      style={{ x, y }}
      className="mx-auto h-[min(58vh,34rem)] w-auto grayscale [mask-image:linear-gradient(to_bottom,black_72%,transparent)] sm:h-[min(64vh,40rem)]"
    />
  );
}
