import { FlashIcon, PlayIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import cn from '../lib/cn.ts';
import formatRunCount from './formatRunCount.ts';
import WorkflowActionButton from './WorkflowActionButton.tsx';
import WorkflowCardIcons from './WorkflowCardIcons.tsx';
import type { ToolCategoryConfig, WorkflowCardVariant, WorkflowStep } from './types.ts';

export interface WorkflowCardProps {
  title: string;
  description?: string;
  steps: WorkflowStep[];
  totalExecutions?: number;
  // the word after the count: "runs" in GAIA, "downloads" for a plugin
  executionUnit?: string;
  isActivated?: boolean;
  triggerLabel?: string;
  variant?: WorkflowCardVariant;
  actionLabel?: string;
  actionHref?: string;
  isLoading?: boolean;
  onAction?: () => void;
  onClick?: () => void;
  showDescriptionAsTooltip?: boolean;
  categoryConfig?: Record<string, ToolCategoryConfig>;
  className?: string;
}

// GAIA UI's workflow card (MIT): rotated tool icons, a run count and an action button
export default function WorkflowCard({
  title,
  description,
  steps,
  totalExecutions = 0,
  executionUnit = 'runs',
  isActivated = false,
  triggerLabel,
  variant = 'explore',
  actionLabel,
  actionHref,
  isLoading = false,
  onAction,
  onClick,
  showDescriptionAsTooltip = false,
  categoryConfig,
  className,
}: WorkflowCardProps) {
  const categories = [...new Set(steps.map(step => step.toolCategory))];
  const buttonLabel = actionLabel ?? (variant === 'user' ? 'Run' : 'Create');
  const hasAction = Boolean(onAction || actionHref);

  return (
    <article
      title={showDescriptionAsTooltip ? description : undefined}
      className={cn(
        'group relative z-[1] flex h-full min-h-fit w-full flex-col gap-2 rounded-3xl p-4 outline-1 transition-all select-none',
        'bg-zinc-100 outline-zinc-200 dark:bg-zinc-800 dark:outline-zinc-800/70',
        onClick && 'cursor-pointer hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <WorkflowCardIcons categories={categories} config={categoryConfig} />
        {variant === 'user' && (
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-xs',
              isActivated
                ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-500',
            )}
          >
            {isActivated ? 'Active' : 'Inactive'}
          </span>
        )}
      </div>

      <div>
        <h3 className="line-clamp-2 text-start text-lg font-medium text-zinc-900 dark:text-white">
          {onClick ? (
            <button type="button" onClick={onClick} className="text-start after:absolute after:inset-0">
              {title}
            </button>
          ) : (
            title
          )}
        </h3>
        {!showDescriptionAsTooltip && description && (
          <p className="mt-1 line-clamp-2 min-h-8 flex-1 text-start text-xs text-zinc-500">{description}</p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <div className="space-y-1">
          {triggerLabel && (
            <p className="flex items-center gap-1 text-xs text-zinc-500">
              <HugeiconsIcon icon={FlashIcon} size={12} className="text-zinc-500" />
              <span>{triggerLabel}</span>
            </p>
          )}
          {totalExecutions > 0 && (
            <p className="flex items-center gap-1 text-xs text-zinc-500">
              <HugeiconsIcon icon={PlayIcon} size={12} className="text-zinc-500" />
              <span className="text-nowrap">{formatRunCount(totalExecutions, executionUnit)}</span>
            </p>
          )}
        </div>
        {hasAction && (
          <WorkflowActionButton
            label={buttonLabel}
            isSolid={variant !== 'user'}
            isLoading={isLoading}
            href={actionHref}
            onAction={onAction}
          />
        )}
      </div>
    </article>
  );
}
