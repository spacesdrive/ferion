import { useMotionValue, useSpring, useTransform } from 'motion/react';

export function useTilt(containerRef, { range = 12, perspective = 900 } = {}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [range, -range]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-range, range]);
  const translateZ = useTransform(springX, [-0.5, 0, 0.5], [0, 24, 0]);

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    onMouseMove,
    onMouseLeave,
    style: {
      rotateX,
      rotateY,
      translateZ,
      transformPerspective: perspective,
    },
  };
}
