import { ArrowRight } from 'lucide-react';
import { RevealText } from '@/components/motion/RevealText';
import { blogPosts } from '@/data/blog';
import { useClickSound } from '@/hooks/useClickSound';
import './Blog.css';

export function Blog() {
  const playClick = useClickSound();

  return (
    <section id="writing" className="w-full border-t border-border py-10">
      <div className="blog-panel">
        <span className="ghost-word" aria-hidden>
          Blog
        </span>
        <div className="ghost-ring" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="relative mb-12">
            <RevealText
              as="h2"
              text="Thoughts on dev, design, and building things."
              className="text-4xl font-normal tracking-tight text-white sm:text-5xl"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="blog-card grid grid-rows-[auto_1fr_auto] overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <span className="font-sans text-[11px] tracking-widest text-white/70 uppercase">
                    {post.label}
                  </span>
                  <h3 className="text-lg leading-snug font-normal text-white">{post.title}</h3>
                  <p className="line-clamp-3 font-sans text-xs leading-relaxed text-white/70">
                    {post.summary}
                  </p>
                  <p className="mt-1 font-sans text-xs text-white/60">
                    {post.author} - {post.published}
                  </p>
                </div>
                <div className="flex items-center gap-1 px-5 pb-5 font-sans text-xs text-white/70">
                  Read more <ArrowRight className="size-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
