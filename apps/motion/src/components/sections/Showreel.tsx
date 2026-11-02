import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Accent from '@/components/layout/Accent';
import Container from '@/components/layout/Container';
import ShowreelPlayer from '@/components/showreel/ShowreelPlayer';
import SoftwareTile from '@/components/software/SoftwareTile';
import { pages } from '@/data/navigation';
import { findSoftware } from '@/data/software';
import { findVideo } from '@/data/videos';

const SHOWREEL = findVideo('intro-recreation');

// the first thing under the hero: a short intro reel playing on its own, with a line on what it is
export default function Showreel() {
  const tools = SHOWREEL.software.map(findSoftware);

  return (
    <section aria-labelledby="showreel-heading" className="scroll-mt-24 pt-[clamp(2rem,5vw,4rem)]">
      <Container>
        <Reveal className="grid items-center gap-10 rounded-[2.5rem] border border-line bg-mist p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="order-2 flex flex-col items-start gap-6 px-2 pb-4 sm:px-4 lg:order-1 lg:pb-0">
            <span className="eyebrow">/ Watch first</span>
            <h2
              id="showreel-heading"
              className="text-4xl leading-[1.02] font-medium tracking-[-0.03em] text-balance sm:text-5xl"
            >
              More than a <Accent>motion designer</Accent>
            </h2>
            <p className="flex items-center gap-2.5 text-sm text-muted">
              {tools.map(tool => (
                <SoftwareTile key={tool.id} software={tool} className="size-7" />
              ))}
              Made in {tools.map(tool => tool.label).join(' and ')}
            </p>
            <a href={pages.work} className="btn-lime">
              See all videos
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <ShowreelPlayer video={SHOWREEL} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
