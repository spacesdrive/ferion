import { BlogCard } from '@/components/blog/BlogCard';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

// Renders only when blog.ujjwal.fyi has published posts.
export function Blog({ posts }) {
  if (posts.length === 0) return null;

  return (
    <Section id="blog">
      <SectionHeading id="blog" index="04" label="Writing">
        Long <span className="marker">reads</span>.
      </SectionHeading>

      <div className="grid gap-7 md:grid-cols-2">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={0.05 * (index % 2)} className="h-full">
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
