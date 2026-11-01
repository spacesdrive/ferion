import cn from '@ferion/ui/lib/cn.ts';
import { SocialLogo, type SocialLogoProps } from 'social-logos';
import type { NicheCase } from '@/types/content';

export interface CaseCoverProps {
  niche: NicheCase;
  className?: string;
}

// each platform's own colors behind its logo, used until a case study has a real cover image
const PLATFORM_COVERS: Record<string, { logo: SocialLogoProps['icon']; background: string }> = {
  instagram: { logo: 'instagram', background: 'linear-gradient(135deg, #feda75, #fa7e1e 30%, #d62976 60%, #4f5bd5)' },
  tiktok: { logo: 'tiktok', background: 'linear-gradient(135deg, #111111 40%, #25f4ee 75%, #fe2c55)' },
  youtube: { logo: 'youtube', background: 'linear-gradient(135deg, #ff4e45, #c4302b)' },
  x: { logo: 'x', background: 'linear-gradient(135deg, #2b2b2b, #000000)' },
};

const FALLBACK = { logo: 'share' as const, background: 'linear-gradient(135deg, #3f9cf5, #0e0e0e)' };

export default function CaseCover({ niche, className }: CaseCoverProps) {
  if (niche.image) {
    return <img src={niche.image} alt="" loading="lazy" className={cn('object-cover', className)} />;
  }

  const cover = PLATFORM_COVERS[niche.platform.toLowerCase()] ?? FALLBACK;
  return (
    <div
      aria-hidden="true"
      className={cn('grid place-items-center', className)}
      style={{ background: cover.background }}
    >
      <SocialLogo icon={cover.logo} size={88} className="fill-white opacity-95 drop-shadow-lg" />
    </div>
  );
}
