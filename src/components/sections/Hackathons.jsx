import { useState } from 'react';
import { HackathonItem } from '@/components/achievements/HackathonItem';
import { PhotoLightbox } from '@/components/achievements/PhotoLightbox';
import { FeatureHeading, Section } from '@/components/layout/Section';
import { hackathons } from '@/data/hackathons';

export function Hackathons() {
  const [photo, setPhoto] = useState(null);

  const openPhoto = (item) =>
    setPhoto({ src: item.photo, caption: `${item.event} ${item.year} · ${item.result} · ${item.project}` });

  return (
    <Section id="hackathons">
      <FeatureHeading id="hackathons" eyebrow="Hackathons" title="Built under pressure">
        Placements and mentions from hackathons and pitch competitions across 2025 and 2026.
      </FeatureHeading>

      <ol className="mx-auto max-w-xl">
        {hackathons.map((item, index) => (
          <HackathonItem
            key={`${item.event}-${item.year}`}
            item={item}
            isLast={index === hackathons.length - 1}
            onOpenPhoto={openPhoto}
          />
        ))}
      </ol>

      <PhotoLightbox photo={photo} onClose={() => setPhoto(null)} />
    </Section>
  );
}
