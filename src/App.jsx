import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DepthField } from '@/components/motion/DepthField';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Work } from '@/components/sections/Work';
import { Awards } from '@/components/sections/Awards';
import { Blog } from '@/components/sections/Blog';

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="noise" aria-hidden="true" />
      <DepthField />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Awards />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
