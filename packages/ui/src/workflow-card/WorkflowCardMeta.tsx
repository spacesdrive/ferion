import { FlashIcon, PlayIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import formatRunCount from './formatRunCount.ts';

export interface WorkflowCardMetaProps {
  triggerLabel?: string;
  totalExecutions: number;
  executionUnit: string;
}

// the small trigger and run count lines at the bottom left of the card
export default function WorkflowCardMeta({ triggerLabel, totalExecutions, executionUnit }: WorkflowCardMetaProps) {
  return (
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
  );
}
