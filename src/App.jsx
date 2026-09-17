import { Fragment } from 'react';
import { MotionConfig } from 'motion/react';
import { Footer } from '@/components/layout/Footer';
import { HatchBand } from '@/components/layout/Section';
import { SiteDock } from '@/components/navigation/SiteDock';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hackathons } from '@/components/sections/Hackathons';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

const SECTIONS = [Hero, About, Skills, Experience, Projects, Hackathons, Blog, Contact];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-16 rounded-md bg-foreground px-3 py-2 text-sm text-background focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="mx-auto min-h-dvh max-w-2xl border-x">
        <HatchBand className="h-10 border-t-0" />
        <main id="main">
          {SECTIONS.map((SectionComponent, index) => (
            <Fragment key={index}>
              {index > 0 && <HatchBand />}
              <SectionComponent />
            </Fragment>
          ))}
        </main>
        <Footer />
      </div>

      <SiteDock />
    </MotionConfig>
  );
}
