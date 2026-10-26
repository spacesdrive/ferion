export interface BlogCategory {
  name: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  published_at: string | null;
  reading_minutes: number | null;
  url: string;
  cover_url: string | null;
  categories: BlogCategory[];
}

// the fields of blog.ujjwal.fyi/api/posts.json this site reads; everything else is ignored
export interface RawFeedPost {
  slug?: unknown;
  title?: unknown;
  excerpt?: unknown;
  published_at?: unknown;
  reading_minutes?: unknown;
  url?: unknown;
  cover_url?: unknown;
  categories?: unknown;
}
