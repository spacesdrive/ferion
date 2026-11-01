import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';
import Contact from '@/components/sections/Contact';
import Footer from './Footer';
import Navbar from './Navbar';

export interface PageShellProps {
  // the home page hero runs under the floating navbar; every other page starts below it
  hasHero?: boolean;
  children: ReactNode;
}

// the frame every page shares; the contact block sits on each page so "Work with me" always has a target
export default function PageShell({ hasHero = false, children }: PageShellProps) {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main" className={hasHero ? undefined : 'pt-20'}>
        {children}
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
