import { Download, Rocket } from 'lucide-react';
import { BentoCard } from '@/components/spectrumui/bento-card';
import { profile } from '@/data/profile';
import { experience, startups } from '@/data/experience';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { useClickSound } from '@/hooks/useClickSound';
import { cn } from '@/lib/utils';

export function Experience() {
  const { ref, isVisible } = useIntersectionReveal(0.1);
  const playClick = useClickSound();

  return (
    <section id="experience" ref={ref} className="w-full py-24">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-6 transition-all duration-700 lg:px-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-3 block text-sm font-medium text-primary">Career</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Experience
            </h2>
          </div>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </div>

        <ul className="mb-14 divide-y divide-border border-y border-border">
          {experience.map((exp) => (
            <li key={exp.company} className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-muted-foreground md:w-1/5">{exp.period}</div>
              <div className="md:w-3/5">
                <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
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
        </ul>

        <div className="mb-5 flex items-center gap-2">
          <Rocket className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Co-founding</span>
        </div>

        {startups.map((s) => (
          <BentoCard key={s.name} tilt className="p-0" spotlight borderAnim>
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">
              <div className="flex flex-col justify-between gap-6 lg:col-span-2 lg:border-r lg:border-border lg:pr-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <img src={s.logo} alt={s.name} className="size-10 shrink-0 rounded-lg object-contain" />
                    <div>
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold tracking-tight text-foreground hover:underline">
                        {s.name}
                      </a>
                      <p className="text-xs font-medium text-primary">
                        {s.role} &middot; {s.focus}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/80">{s.description}</p>
                </div>
              </div>
              <div className="flex gap-8 self-center lg:flex-col">
                {s.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <p className="text-4xl font-medium text-foreground">{stat.value}</p>
                    <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
