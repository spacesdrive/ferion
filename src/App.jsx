import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Work } from '@/components/sections/Work';
import { Content } from '@/components/sections/Content';
import { Awards } from '@/components/sections/Awards';
import { Blog } from '@/components/sections/Blog';
import { Connect } from '@/components/sections/Connect';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Content />
        <Awards />
        <Blog />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
