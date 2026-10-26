import { Download04Icon, FlashIcon, Loading03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import cn from '../lib/cn.ts';

export interface WorkflowActionButtonProps {
  label: string;
  isSolid: boolean;
  isLoading: boolean;
  href?: string;
  // saves the file at `href` instead of opening it
  isDownload?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
  onAction?: () => void;
}

const BASE = 'relative z-[2] flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors';
const SOLID = 'bg-sky-500 text-white hover:bg-sky-600';
const FLAT = 'bg-sky-500/10 text-blue-600 hover:bg-sky-500/20 dark:text-blue-400 dark:hover:bg-sky-500/20';
const DISABLED = 'cursor-not-allowed bg-zinc-200 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400';

const isExternal = (href: string) => href.startsWith('https:') || href.startsWith('http:');

// sits above the card's stretched click target, so the two never nest
export default function WorkflowActionButton({
  label,
  isSolid,
  isLoading,
  href,
  isDownload = false,
  isDisabled = false,
  ariaLabel,
  onAction,
}: WorkflowActionButtonProps) {
  const className = cn(
    BASE,
    isSolid ? SOLID : FLAT,
    isLoading && 'cursor-not-allowed opacity-50',
    isDisabled && DISABLED,
  );
  const icon = isDownload ? Download04Icon : FlashIcon;
  const content = isLoading ? (
    <HugeiconsIcon icon={Loading03Icon} size={16} className="animate-spin" />
  ) : (
    <>
      {label}
      {!isDisabled && <HugeiconsIcon icon={icon} size={16} />}
    </>
  );

  if (href && !isDisabled) {
    // browsers only honor the download attribute for files on this site, so other hosts open in a new tab
    const opensElsewhere = !isDownload || isExternal(href);
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        download={isDownload ? '' : undefined}
        target={opensElsewhere ? '_blank' : undefined}
        rel={opensElsewhere ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onAction}
      disabled={isLoading || isDisabled}
      aria-label={ariaLabel}
      className={className}
    >
      {content}
    </button>
  );
}
