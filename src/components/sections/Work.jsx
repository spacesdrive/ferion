import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { RevealText } from '@/components/motion/RevealText';
import { projects } from '@/data/projects';
import { useClickSound } from '@/hooks/useClickSound';
import './Work.css';

export function Work() {
  const playClick = useClickSound();

  return (
    <section id="work" className="work-panel w-full border-t border-border">
      <span className="ghost-word" aria-hidden>
        Cases
      </span>
      <div className="ghost-ring" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative mb-12">
          <RevealText
            as="h2"
            text="Recent Project"
            className="text-4xl font-normal tracking-tight text-foreground uppercase sm:text-5xl"
          />
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.title} className="work-case">
              <div className="flex items-start justify-between">
                <div className="work-case-thumb flex size-14 items-center justify-center bg-muted">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="size-10 object-contain grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    aria-label={`${project.title} source code`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <FaGithub className="size-5" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    aria-label={`${project.title} live demo`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <span className="mb-2 block text-[11px] tracking-widest text-primary uppercase">
                  {project.category}
                </span>
                <h3 className="work-case-title text-2xl font-normal tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-sm font-medium text-muted-foreground">
                  {project.tagline}
                </p>
                <ul className="work-case-desc mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
