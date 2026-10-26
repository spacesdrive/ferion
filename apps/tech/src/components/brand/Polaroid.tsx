import cn from '@ferion/ui/lib/cn.ts';

export interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  tilt?: number;
  width: string;
  height: string;
  imageClassName?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

// a taped, tilted print; the frame stays light in dark mode because it reads as paper
export default function Polaroid({
  src,
  alt,
  caption,
  tilt = -3,
  width,
  height,
  imageClassName,
  className,
  loading = 'lazy',
}: PolaroidProps) {
  return (
    <figure
      style={{ rotate: `${tilt}deg` }}
      className={cn(
        'relative m-0 bg-[#fffffc] p-2.5 pb-11 text-[#121212] shadow-[0_8px_0_rgb(18_18_18/0.14)] sm:p-3 sm:pb-12',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-[5deg] bg-[rgb(200_199_194/0.8)]"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={cn('mono-img block w-full object-cover', imageClassName)}
      />
      {caption && (
        <figcaption className="absolute inset-x-2 bottom-2.5 truncate text-center font-note text-xl leading-none sm:bottom-3 sm:text-[22px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
