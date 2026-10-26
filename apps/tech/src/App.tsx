import { MotionConfig } from 'motion/react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SiteDock from '@/components/navigation/SiteDock';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hackathons from '@/components/sections/Hackathons';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import useBlogPosts from '@/hooks/useBlogPosts';

export default function App() {
  const posts = useBlogPosts();
  const hasPosts = posts.length > 0;

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="ink-pill fixed top-3 left-3 z-50 -translate-y-20 px-4 py-2 text-sm focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Hackathons />
        <Blog posts={posts} />
        <Contact index={hasPosts ? '05' : '04'} />
      </main>
      <Footer />

      <SiteDock showWriting={hasPosts} />
    </MotionConfig>
  );
}
