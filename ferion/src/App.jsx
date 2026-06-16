import { Header } from '@/components/layout/Header';
import { DomainsDock } from '@/components/layout/DomainsDock';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-28">
        <Hero />
        <About />
      </main>
      <DomainsDock />
    </div>
  );
}
