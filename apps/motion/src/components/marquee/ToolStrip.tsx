import Container from '@/components/layout/Container';
import SoftwareTile from '@/components/software/SoftwareTile';
import software from '@/data/software';
import Marquee from './Marquee';

// the "trusted by" logo strip from ugc-blaze, here showing the tools every piece is made with
export default function ToolStrip() {
  const repeated = [...software, ...software];

  return (
    <section aria-label="Tools I use" className="py-10">
      <Container className="flex flex-col items-center gap-6">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Made with</p>
      </Container>
      <Marquee duration={30} className="mt-6">
        {repeated.map((item, index) => (
          <span
            key={`${item.id}-${index}`}
            className="flex items-center gap-3 rounded-full border border-line bg-card px-5 py-3 text-lg font-semibold tracking-tight whitespace-nowrap"
          >
            <SoftwareTile software={item} className="size-8" />
            {item.label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
