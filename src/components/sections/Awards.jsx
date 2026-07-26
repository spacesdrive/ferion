import { BentoCard } from '@/components/spectrumui/bento-card';
import { ImageZoom } from '@/components/ui/image-zoom';
import { awards } from '@/data/awards';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { cn } from '@/lib/utils';

export function Awards() {
  const { ref, isVisible } = useIntersectionReveal(0.1);

  return (
    <section id="awards" ref={ref} className="w-full border-t border-border py-24">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-6 transition-all duration-700 lg:px-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="mb-12">
          <span className="mb-3 block text-sm font-medium text-primary">Recognition</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Awards</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {awards.map((award) => (
            <BentoCard key={award.name} spotlight borderAnim={false}>
              <div className="flex items-start gap-4">
                <ImageZoom className="shrink-0">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="h-16 w-24 cursor-zoom-in rounded-lg object-cover"
                  />
                </ImageZoom>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-primary">{award.year}</span>
                  <h3 className="mt-1 text-sm leading-snug font-semibold text-foreground">{award.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
