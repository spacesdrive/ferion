import Reveal from '@ferion/ui/motion/Reveal.tsx';
import BlogCard from '@/components/blog/BlogCard';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import type { BlogPost } from '@/types/blog';

export interface BlogProps {
  posts: BlogPost[];
}

// renders only when blog.ujjwal.fyi has published posts
export default function Blog({ posts }: BlogProps) {
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
