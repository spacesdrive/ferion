import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { DomainsDock } from '@/components/layout/DomainsDock';
import { About } from '@/components/sections/About';
import { ContentCreationPortfolio } from '@/components/sections/ContentCreationPortfolio';
import { DevPortfolio } from '@/components/sections/DevPortfolio';

export default function App() {
  const [isContentPortfolioOpen, setIsContentPortfolioOpen] = useState(false);
  const [isDevPortfolioOpen, setIsDevPortfolioOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-28">
        <About />
      </main>
      <DomainsDock
        onContentCreationClick={() => setIsContentPortfolioOpen(true)}
        onTechnologyClick={() => setIsDevPortfolioOpen(true)}
      />
      <ContentCreationPortfolio
        isOpen={isContentPortfolioOpen}
        onClose={() => setIsContentPortfolioOpen(false)}
      />
      <DevPortfolio
        isOpen={isDevPortfolioOpen}
        onClose={() => setIsDevPortfolioOpen(false)}
      />
    </div>
  );
}
