import { ArrowUpRight } from 'lucide-react';
import { BentoGrid } from '@/components/spectrumui/bento-grid';
import { BentoCard } from '@/components/spectrumui/bento-card';
import { projects } from '@/data/projects';
import { useClickSound } from '@/hooks/useClickSound';

export function Work() {
  const playClick = useClickSound();

  return (
    <section id="work" className="w-full border-t border-border py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-12">
          <span className="mb-3 block text-sm font-medium text-primary">Selected work</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Projects</h2>
        </div>

        <BentoGrid>
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="contents"
            >
              <BentoCard tilt colSpan={2}>
                <div className="flex items-start justify-between">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="size-11 rounded-lg object-contain"
                  />
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="mt-6">
                  <span className="mb-1.5 block text-[11px] font-semibold tracking-widest text-primary uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </BentoCard>
            </a>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
