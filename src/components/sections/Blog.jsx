import { BlogCard } from '@/components/blog/BlogCard';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { blog, posts } from '@/data/blog';

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading id="blog" index="05" label="Writing">
        Long <span className="marker">reads</span>.
      </SectionHeading>

      <div className="flex flex-col gap-7">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={0.05 * index}>
            <BlogCard post={post} platform={blog.platform} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
