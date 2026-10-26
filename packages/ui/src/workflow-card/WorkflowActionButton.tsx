import { FlashIcon, Loading03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import cn from '../lib/cn.ts';

export interface WorkflowActionButtonProps {
  label: string;
  isSolid: boolean;
  isLoading: boolean;
  href?: string;
  onAction?: () => void;
}

const BASE = 'relative z-[2] flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors';
const SOLID = 'bg-sky-500 text-white hover:bg-sky-600';
const FLAT = 'bg-sky-500/10 text-blue-600 hover:bg-sky-500/20 dark:text-blue-400 dark:hover:bg-sky-500/20';

// sits above the card's stretched click target, so the two never nest
export default function WorkflowActionButton({ label, isSolid, isLoading, href, onAction }: WorkflowActionButtonProps) {
  const className = cn(BASE, isSolid ? SOLID : FLAT, isLoading && 'cursor-not-allowed opacity-50');
  const content = isLoading ? (
    <HugeiconsIcon icon={Loading03Icon} size={16} className="animate-spin" />
  ) : (
    <>
      {label}
      <HugeiconsIcon icon={FlashIcon} size={16} />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onAction} disabled={isLoading} className={className}>
      {content}
    </button>
  );
}
