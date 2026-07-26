import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blog';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { useClickSound } from '@/hooks/useClickSound';
import { cn } from '@/lib/utils';

export function Blog() {
  const { ref, isVisible } = useIntersectionReveal(0.1);
  const playClick = useClickSound();

  return (
    <section id="writing" ref={ref} className="w-full border-t border-border bg-muted/30 py-24">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-6 transition-all duration-700 lg:px-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="mb-12">
          <span className="mb-3 block text-sm font-medium text-primary">Writing</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Thoughts on dev, design, and building things.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0">
              <div className="aspect-video w-full">
                <a href={post.url} target="_blank" rel="noopener noreferrer" onClick={playClick} className="transition-opacity hover:opacity-80">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </a>
              </div>
              <CardHeader className="pb-2">
                <Badge variant="outline" className="mb-2 w-fit text-xs">{post.label}</Badge>
                <h3 className="text-sm leading-snug font-semibold hover:underline">
                  <a href={post.url} target="_blank" rel="noopener noreferrer" onClick={playClick}>{post.title}</a>
                </h3>
                <p className="text-xs text-muted-foreground">{post.author} - {post.published}</p>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a href={post.url} target="_blank" rel="noopener noreferrer" onClick={playClick} className="flex items-center gap-1 text-xs text-muted-foreground hover:underline">
                  Read more <ArrowRight className="size-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
