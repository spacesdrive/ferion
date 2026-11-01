import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { LayoutGrid } from 'lucide-react';
import ButtonIcon from './ButtonIcon';

export interface SeeAllLinkProps {
  href: string;
  label: string;
}

// closes a home page section that only shows the latest few items
export default function SeeAllLink({ href, label }: SeeAllLinkProps) {
  return (
    <Reveal className="mt-14 flex justify-center">
      <a href={href} className="btn-lime">
        {label}
        <ButtonIcon icon={LayoutGrid} />
      </a>
    </Reveal>
  );
}
