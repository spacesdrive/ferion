export const projects = [
  {
    title: 'Luxe',
    category: 'AI',
    tagline: 'AI powered e-commerce platform',
    highlights: [
      'Built a full backend with Express, MongoDB, JWT authentication, and Redis caching, with Stripe payments and Cloudinary media handling, plus Pinecone vector search and the Groq LLM API for an AI shopping assistant and product recommendations',
    ],
    tech: ['Express', 'MongoDB', 'Redis', 'JWT', 'Stripe', 'Cloudinary', 'Pinecone', 'Groq'],
    logo: 'https://raw.githubusercontent.com/spacesdrive/luxe/main/frontend/public/favicon.jpg',
    links: [
      { type: 'source', href: 'https://github.com/spacesdrive/luxe' },
      { type: 'live', href: 'https://luxe.spacesdrive.cc' },
    ],
  },
  {
    title: 'ShadyShard',
    category: 'Web Tools',
    tagline: 'Client side developer tools platform',
    highlights: [
      'Platform of 500+ browser based tools that run entirely client side, with no uploads, accounts, or tracking',
      'Full test and release pipeline: unit tests (Vitest), end to end tests (Playwright), accessibility checks (axe-core), and pre-commit automation (Husky, lint-staged, commitlint)',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'axe-core', 'Husky'],
    logo: 'https://raw.githubusercontent.com/spacesdrive/shadyshard/main/public/apple-touch-icon.png',
    links: [
      { type: 'source', href: 'https://github.com/spacesdrive/shadyshard' },
      { type: 'live', href: 'https://shadyshard.spacesdrive.cc' },
    ],
  },
  {
    title: 'KineTube',
    category: 'Desktop',
    tagline: 'Privacy-first media downloader',
    highlights: [
      'Cross-platform desktop app (Windows, macOS, Linux) that downloads YouTube and Instagram videos, Shorts, Reels, and full profiles entirely offline, no accounts and no data leaving the machine',
      'Auto-manages yt-dlp, FFmpeg, and whisper.cpp for local AI transcription in 13 languages, with resumable batch downloads and real-time SSE progress',
    ],
    tech: ['Electron', 'React', 'Express', 'yt-dlp', 'FFmpeg', 'whisper.cpp'],
    logo: 'https://raw.githubusercontent.com/spacesdrive/kinetube/main/frontend/public/favicon.png',
    links: [
      { type: 'source', href: 'https://github.com/spacesdrive/kinetube' },
      { type: 'releases', href: 'https://github.com/spacesdrive/kinetube/releases' },
    ],
  },
  {
    title: 'Twiligent',
    category: 'Analytics',
    tagline: 'Social media analytics dashboard',
    highlights: [
      'Self-hosted dashboard that pulls YouTube and Instagram stats into one place, runs entirely on infrastructure the user controls, with no subscriptions and no shared data',
    ],
    tech: ['Cloudflare Workers', 'Supabase'],
    logo: 'https://raw.githubusercontent.com/spacesdrive/twiligent/main/frontend/public/logo.png',
    links: [
      { type: 'source', href: 'https://github.com/spacesdrive/twiligent' },
      { type: 'live', href: 'https://twiligent.spacesdrive.cc' },
    ],
  },
];
