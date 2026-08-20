import { ImageZoom } from '@/components/ui/image-zoom';
import { awards } from '@/data/awards';
import './Awards.css';

export function Awards() {
  return (
    <section id="awards" className="awards-panel w-full border-t border-border py-24">
      <span className="ghost-word" aria-hidden>
        Awards
      </span>
      <div className="ghost-ring" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-normal tracking-tight text-foreground uppercase sm:text-5xl">
          Awards
        </h2>

        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.name} className="award-case">
              <span className="text-xs font-semibold text-primary">{award.year}</span>
              <h3 className="award-case-title mt-1 text-lg leading-snug font-semibold text-foreground">
                {award.name}
              </h3>
              <p className="award-case-desc mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {award.description}
              </p>

              <ImageZoom className="award-case-photo">
                <img
                  src={award.image}
                  alt={award.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
                />
              </ImageZoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
