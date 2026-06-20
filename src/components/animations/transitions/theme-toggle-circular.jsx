import { useState } from 'react';

export function ThemeToggleCircular({
  children,
  onToggle,
  className,
  speed = 0.5,
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e) => {
    if (isTransitioning) return;
    if (!document.startViewTransition) {
      onToggle?.();
      return;
    }
    setIsTransitioning(true);
    const x = e.clientX;
    const y = e.clientY;
    const isDark = document.documentElement.classList.contains('dark');
    const targetTheme = isDark ? 'to-light' : 'to-dark';
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
    document.documentElement.style.setProperty('--transition-speed', `${speed}s`);
    document.documentElement.setAttribute('data-theme-transition', targetTheme);
    try {
      const transition = document.startViewTransition(() => {
        onToggle?.();
      });
      await transition.finished;
    } catch (error) {
      console.error('Theme transition error:', error);
    } finally {
      document.documentElement.removeAttribute('data-theme-transition');
      setIsTransitioning(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={className}
      style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}
    >
      {children}
    </div>
  );
}
