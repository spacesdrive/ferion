import { MotionConfig } from 'motion/react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ToolStrip from '@/components/marquee/ToolStrip';
import About from '@/components/sections/About';
import CaseStudy from '@/components/sections/CaseStudy';
import Contact from '@/components/sections/Contact';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import Plugins from '@/components/sections/Plugins';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import Websites from '@/components/sections/Websites';
import Work from '@/components/sections/Work';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main">
        <Hero />
        <ToolStrip />
        <About />
        <Work />
        <Process />
        <Websites />
        <Plugins />
        <CaseStudy />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
