// a white pill with a pulsing green dot, saying new work is welcome
export default function AvailabilityPill() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-card px-4 py-2.5 text-sm font-medium text-ink shadow-[0_6px_24px_rgb(0_0_0/0.08)]">
      <span aria-hidden="true" className="relative grid size-2.5 place-items-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-pop-green opacity-75 motion-reduce:animate-none" />
        <span className="relative size-2.5 rounded-full bg-pop-green" />
      </span>
      Available for new projects
    </span>
  );
}
