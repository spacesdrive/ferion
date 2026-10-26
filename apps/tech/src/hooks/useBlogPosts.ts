import { useEffect, useState } from 'react';
import { fetchTopPosts } from '@/lib/blogClient';
import type { BlogPost } from '@/types/blog';

// top posts from blog.ujjwal.fyi; empty while loading, when there are none, or if the blog can't be reached
export default function useBlogPosts(): BlogPost[] {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchTopPosts(controller.signal)
      .then(setPosts)
      .catch(() => setPosts([]));
    return () => controller.abort();
  }, []);

  // the section only exists once posts arrive, so honour a #blog link afterwards
  useEffect(() => {
    if (posts.length > 0 && window.location.hash === '#blog') {
      document.getElementById('blog')?.scrollIntoView();
    }
  }, [posts]);

  return posts;
}
