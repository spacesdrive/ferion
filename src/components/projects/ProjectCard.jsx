import { Download, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const LINK_META = {
  source: { label: 'Source', Icon: FaGithub },
  live: { label: 'Live', Icon: Globe },
  releases: { label: 'Releases', Icon: Download },
};

export function ProjectCard({ project }) {
  return (
    <article className="ink-card group flex h-full flex-col overflow-hidden">
      <div className="dot-paper relative flex h-40 items-center justify-center border-b-2 border-line bg-background">
        <span className="label absolute top-3.5 left-4">{project.category}</span>
        <div className="grid size-[4.5rem] -rotate-3 place-items-center overflow-hidden rounded-2xl border-2 border-line bg-[#fffffc] p-2.5 shadow-[3px_3px_0_var(--line)] transition-transform duration-300 group-hover:rotate-0 motion-reduce:transition-none">
          <img
            src={project.logo}
            alt=""
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            className="mono-img size-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 lg:px-4">
        <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.03em]">{project.title}</h3>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.links.map(({ type, href }) => {
            const { label, Icon } = LINK_META[type];
            return (
              <a
                key={type}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${label.toLowerCase()}`}
                className="ink-pill press gap-1 px-2.5 py-1 text-[13px]"
              >
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
