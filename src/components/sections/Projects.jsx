import { FeatureHeading, Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section id="projects">
      <FeatureHeading id="projects" eyebrow="Projects" title="Things I've built">
        AI commerce, client side dev tools, an offline desktop downloader, and a self-hosted analytics
        dashboard.
      </FeatureHeading>

      <div className="grid gap-3 sm:auto-rows-fr sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.05 * (index % 2)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
