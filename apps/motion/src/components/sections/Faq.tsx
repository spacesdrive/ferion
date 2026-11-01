import Reveal from '@ferion/ui/motion/Reveal.tsx';
import FaqItem from '@/components/faq/FaqItem';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { faqs } from '@/data/copy';

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeader id="faq" index="06" eyebrow="FAQ">
        Frequently asked <Accent>questions</Accent>
      </SectionHeader>

      {/* two columns of grey tiles; items-start keeps an open answer from stretching its neighbour */}
      <Reveal className="mt-12 grid items-start gap-3 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <FaqItem key={faq.question} faq={faq} isOpenByDefault={index === 0} />
        ))}
      </Reveal>
    </Section>
  );
}
