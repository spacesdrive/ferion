import { useEffect, useState } from 'react';

// a section is active once its top crosses 40% of the viewport; the page bottom always activates the last one
export default function useActiveSection(ids: string[]): string | undefined {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (isAtBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const threshold = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ids]);

  return active;
}
