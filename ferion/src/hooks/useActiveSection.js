import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentIdx = 0;

      for (let i = 0; i < sectionIds.length; i++) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4) {
            currentIdx = i;
            break;
          }
        }
      }
      setActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeIndex;
}
