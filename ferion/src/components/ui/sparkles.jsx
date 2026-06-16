import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Lightweight canvas-based stand-in for Aceternity UI's tsparticles-powered
// SparklesCore — avoids pulling in @tsparticles/react + @tsparticles/engine
// + @tsparticles/slim just to render a handful of twinkling dots behind a
// few words of text.
export function SparklesCore({
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 400,
  particleColor = '#FFFFFF',
  className,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: minSize + Math.random() * (maxSize - minSize),
      speed: 0.05 + Math.random() * 0.15,
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      const count = Math.max(15, Math.round(((canvas.width * canvas.height) / 10000) * (particleDensity / 100)));
      particles = Array.from({ length: count }, createParticle);
    };

    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        const twinkle = (Math.sin(time * 0.002 + p.phase) + 1) / 2;
        ctx.globalAlpha = 0.2 + twinkle * 0.8;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(render);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();
    animationId = requestAnimationFrame(render);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return <canvas ref={canvasRef} className={cn('block h-full w-full', className)} style={{ background }} />;
}
