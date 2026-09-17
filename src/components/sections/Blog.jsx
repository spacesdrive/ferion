import { ArrowUpRight } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { Section, SectionLabel } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { blog, posts } from '@/data/blog';

export function Blog() {
  return (
    <Section id="blog">
      <SectionLabel id="blog">Writing</SectionLabel>

      <div className="space-y-3">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={0.05 * index}>
            <BlogCard post={post} platform={blog.platform} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <a
          href={blog.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          All articles on {blog.platform}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
