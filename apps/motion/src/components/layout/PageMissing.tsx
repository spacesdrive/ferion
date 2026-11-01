export interface PageMissingProps {
  title: string;
  backHref: string;
  backLabel: string;
}

// shown when an address names a case study or website that doesn't exist
export default function PageMissing({ title, backHref, backLabel }: PageMissingProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
      <p className="text-muted">The link may be old, or the page was renamed.</p>
      <a href={backHref} className="btn-ink">
        {backLabel}
      </a>
    </div>
  );
}
