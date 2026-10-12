import { useState } from 'react';
import { HackathonItem } from '@/components/achievements/HackathonItem';
import { PhotoLightbox } from '@/components/achievements/PhotoLightbox';
import { Section, SectionHeading } from '@/components/layout/Section';
import { hackathons } from '@/data/hackathons';

// Alternating tilts read as photos pinned by hand rather than a uniform grid.
const TILTS = [-3, 2, 2, -3];

export function Hackathons() {
  const [photo, setPhoto] = useState(null);

  const openPhoto = (item) =>
    setPhoto({ src: item.photo, caption: `${item.event} ${item.year} · ${item.result} · ${item.project}` });

  return (
    <Section id="hackathons">
      <SectionHeading
        id="hackathons"
        index="04"
        label="Hackathons"
        intro="Placements and mentions from hackathons and pitch competitions across 2025 and 2026."
      >
        Built under <span className="marker">pressure</span>.
      </SectionHeading>

      <ol className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
        {hackathons.map((item, index) => (
          <HackathonItem
            key={`${item.event}-${item.year}`}
            item={item}
            tilt={TILTS[index % TILTS.length]}
            onOpenPhoto={openPhoto}
          />
        ))}
      </ol>

      <PhotoLightbox photo={photo} onClose={() => setPhoto(null)} />
    </Section>
  );
}
