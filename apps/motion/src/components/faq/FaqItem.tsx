import { Plus } from 'lucide-react';
import type { Faq } from '@/types/content';

export interface FaqItemProps {
  faq: Faq;
  isOpenByDefault?: boolean;
}

// <details> gives keyboard support and open/close state with no script
export default function FaqItem({ faq, isOpenByDefault = false }: FaqItemProps) {
  return (
    <details open={isOpenByDefault} className="group rounded-2xl border border-line bg-card px-5 py-4 open:pb-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
        {faq.question}
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-pop-violet text-snow transition-transform group-open:rotate-45">
          <Plus className="size-4" aria-hidden="true" />
        </span>
      </summary>
      <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
    </details>
  );
}
