export interface PhotoPillProps {
  src: string;
  alt: string;
}

// a photo set into the headline as a capsule, sized in em so it scales with the text
export default function PhotoPill({ src, alt }: PhotoPillProps) {
  return (
    <span className="inline-flex h-[0.72em] w-[1.7em] overflow-hidden rounded-full align-middle ring-1 ring-ink/10">
      <img src={src} alt={alt} width="320" height="320" className="h-full w-full object-cover object-[50%_35%]" />
    </span>
  );
}
