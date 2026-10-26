import { useState } from 'react';
import HackathonItem from '@/components/achievements/HackathonItem';
import PhotoLightbox, { type LightboxPhoto } from '@/components/achievements/PhotoLightbox';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import hackathons, { type Hackathon } from '@/data/hackathons';

// alternating tilts read as photos pinned by hand rather than a uniform grid
const TILTS = [-3, 2, 2, -3];

export default function Hackathons() {
  const [photo, setPhoto] = useState<LightboxPhoto | null>(null);

  const handleOpenPhoto = (item: Hackathon) =>
    setPhoto({ src: item.photo, caption: `${item.event} ${item.year} · ${item.result} · ${item.project}` });

  return (
    <Section id="hackathons">
      <SectionHeading
        id="hackathons"
        index="03"
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
            tilt={TILTS[index % TILTS.length] ?? 0}
            onOpenPhoto={handleOpenPhoto}
          />
        ))}
      </ol>

      <PhotoLightbox photo={photo} onClose={() => setPhoto(null)} />
    </Section>
  );
}
