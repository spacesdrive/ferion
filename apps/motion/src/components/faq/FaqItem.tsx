import { Plus } from 'lucide-react';
import type { Faq } from '@/types/content';

export interface FaqItemProps {
  faq: Faq;
  isOpenByDefault?: boolean;
}

// <details> gives keyboard support and open/close state with no script
export default function FaqItem({ faq, isOpenByDefault = false }: FaqItemProps) {
  return (
    <details open={isOpenByDefault} className="group rounded-2xl bg-mist px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
        {faq.question}
        <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
      </summary>
      <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
    </details>
  );
}
