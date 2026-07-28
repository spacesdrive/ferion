import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { experience, startups } from '@/data/experience';
import { useClickSound } from '@/hooks/useClickSound';
import { formatPeriod } from '@/lib/utils';
import './Experience.css';

export function Experience() {
  const playClick = useClickSound();

  return (
    <section id="experience" className="experience-panel w-full">
      <span className="ghost-word" aria-hidden>
        Career
      </span>
      <div className="ghost-ring" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="sr-only">Experience</h2>
        <div className="relative mb-12">
          <a
            href={profile.cvUrl}
            download="Ujjwal_Kumar_Rai_Resume.pdf"
            onClick={playClick}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </div>

        <ul className="experience-list mb-14 divide-y divide-border">
          {experience.map((exp) => (
            <li key={exp.company} className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-muted-foreground md:w-1/5">{exp.period}</div>
              <div className="md:w-3/5">
                <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 md:w-1/5 md:justify-end">
                <img src={exp.logo} alt={exp.company} className="size-6 shrink-0 rounded object-contain" />
                {exp.link && exp.link !== '#' ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground">{exp.company}</span>
                )}
              </div>
            </li>
          ))}

          {startups.map((s) => (
            <li key={s.name} className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-muted-foreground md:w-1/5">{formatPeriod(s.foundedDate)}</div>
              <div className="md:w-3/5">
                <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-foreground">
                  {s.role}
                </h3>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 md:w-1/5 md:justify-end">
                <img src={s.logo} alt={s.name} className="size-6 shrink-0 rounded object-contain" />
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:underline"
                >
                  {s.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
