import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import projects from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        index="02"
        label="Projects"
        intro="AI red teaming, AI commerce, an offline desktop downloader and a self-hosted analytics dashboard."
      >
        Things I&apos;ve <span className="marker">built</span>.
      </SectionHeading>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.05 * (index % 4)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
