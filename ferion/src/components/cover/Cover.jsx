import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { SparklesCore } from '@/components/ui/sparkles';

// Adapted from Aceternity UI's "Cover" component. Converted to JSX (types
// stripped) and the `framer-motion` import swapped for the already-installed
// `motion` package (same library, current name).
export function Cover({ children, className }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth ?? 0);

      const height = ref.current.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10);
      const positions = Array.from({ length: numberOfBeams }, (_, i) => (i + 1) * (height / (numberOfBeams + 1)));
      setBeamPositions(positions);
    }
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className="group/cover relative inline-block rounded-sm bg-neutral-100 px-2 py-2 transition duration-200 hover:bg-neutral-900 dark:bg-neutral-900"
    >
      <AnimatePresence>
        {hovered && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="absolute inset-0 h-full w-full overflow-hidden"
          >
            <Motion.div
              animate={{ translateX: ['-50%', '0%'] }}
              transition={{ translateX: { duration: 10, ease: 'linear', repeat: Infinity } }}
              className="flex h-full w-[200%]"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={500}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={500}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={Math.random() * 2 + 1}
          delay={Math.random() * 2 + 1}
          width={containerWidth}
          style={{ top: `${position}px` }}
        />
      ))}

      <Motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
          y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
        }}
        exit={{ filter: 'none', scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.2,
          x: { duration: 0.2, repeat: Infinity, repeatType: 'loop' },
          y: { duration: 0.2, repeat: Infinity, repeatType: 'loop' },
          scale: { duration: 0.2 },
          filter: { duration: 0.2 },
        }}
        className={cn(
          'relative z-20 inline-block text-neutral-900 transition duration-200 group-hover/cover:text-white dark:text-white',
          className
        )}
      >
        {children}
      </Motion.span>

      <CircleIcon className="absolute -top-[2px] -right-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" />
      <CircleIcon className="absolute -top-[2px] -left-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" />
    </div>
  );
}

function Beam({ className, delay, duration, hovered, width = 600, ...svgProps }) {
  const id = useId();

  return (
    <Motion.svg
      width={width ?? 600}
      height="1"
      viewBox={`0 0 ${width ?? 600} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute inset-x-0 w-full', className)}
      {...svgProps}
    >
      <Motion.path d={`M0 0.5H${width ?? 600}`} stroke={`url(#svgGradient-${id})`} />
      <defs>
        <Motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: '0%', x2: hovered ? '-10%' : '-5%', y1: 0, y2: 0 }}
          animate={{ x1: '110%', x2: hovered ? '100%' : '105%', y1: 0, y2: 0 }}
          transition={{
            duration: hovered ? 0.5 : duration ?? 2,
            ease: 'linear',
            repeat: Infinity,
            delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
            repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : delay ?? 1,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </Motion.linearGradient>
      </defs>
    </Motion.svg>
  );
}

function CircleIcon({ className }) {
  return (
    <div
      className={cn(
        'group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover/cover:hidden group-hover/cover:bg-white group-hover/cover:opacity-100 dark:bg-white',
        className
      )}
    />
  );
}
