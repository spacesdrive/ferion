import { ArrowUpRight, Download, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Badge } from '@/components/ui/Badge';

const LINK_META = {
  source: { label: 'Source', Icon: FaGithub },
  live: { label: 'Live', Icon: Globe },
  releases: { label: 'Releases', Icon: Download },
};

export function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="dot-grid relative flex h-28 items-center justify-center border-b bg-muted/40">
        <span className="absolute top-3 left-3 rounded-md border bg-background/80 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {project.category}
        </span>
        <div className="grid size-14 place-items-center overflow-hidden rounded-2xl border bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
          <img
            src={project.logo}
            alt=""
            width="40"
            height="40"
            loading="lazy"
            decoding="async"
            className="size-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-tight font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

        <ul className="mt-3 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="text-[13px] leading-relaxed text-pretty text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-1" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.links.map(({ type, href }) => {
            const { label, Icon } = LINK_META[type];
            return (
              <a
                key={type}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${label.toLowerCase()}`}
                className="inline-flex h-7 items-center gap-1.5 rounded-full border bg-background px-2.5 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
                <ArrowUpRight className="size-3 opacity-60" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
