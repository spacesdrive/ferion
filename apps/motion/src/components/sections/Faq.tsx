import Reveal from '@ferion/ui/motion/Reveal.tsx';
import FaqItem from '@/components/faq/FaqItem';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { faqs } from '@/data/copy';

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeader id="faq" eyebrow="FAQ">
        Frequently asked <Accent>questions</Accent>
      </SectionHeader>

      <Reveal className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
        {faqs.map((faq, index) => (
          <FaqItem key={faq.question} faq={faq} isOpenByDefault={index === 0} />
        ))}
      </Reveal>
    </Section>
  );
}
