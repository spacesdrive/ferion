export const projects = [
  {
    category: 'AI',
    title: 'Luxe',
    tagline: 'AI Powered E-Commerce Platform',
    description: [
      'Built a full backend with Express, MongoDB, JWT authentication, and Redis caching, with Stripe payments and Cloudinary media handling, plus Pinecone vector search and the Groq LLM API for an AI shopping assistant and product recommendations',
    ],
    url: 'https://github.com/spacesdrive/luxe',
    demoUrl: 'https://luxe.spacesdrive.cc',
    logo: 'https://raw.githubusercontent.com/spacesdrive/luxe/main/frontend/public/favicon.jpg',
  },
  {
    category: 'Web Tools',
    title: 'ShadyShard',
    tagline: 'Client Side Developer Tools Platform',
    description: [
      'Platform of 500+ browser based tools that run entirely client side, with no uploads, accounts, or tracking, built with React, TypeScript, and Vite',
      'Set up a full test and release pipeline: unit tests (Vitest), end to end tests (Playwright), accessibility checks (axe-core), and pre-commit automation (Husky, lint-staged, commitlint)',
    ],
    url: 'https://github.com/spacesdrive/shadyshard',
    demoUrl: 'https://shadyshard.spacesdrive.cc',
    logo: 'https://raw.githubusercontent.com/spacesdrive/shadyshard/main/public/apple-touch-icon.png',
  },
  {
    category: 'Desktop',
    title: 'KineTube',
    tagline: 'Privacy-First Media Downloader',
    description: [
      'Cross-platform Electron desktop app (Windows, macOS, Linux) built with React and Express that downloads YouTube and Instagram videos, Shorts, Reels, and full profiles entirely offline, no accounts and no data leaving the machine',
      'Auto-manages yt-dlp, FFmpeg, and whisper.cpp for local AI transcription in 13 languages, with resumable batch downloads and real-time SSE progress',
    ],
    url: 'https://github.com/spacesdrive/kinetube',
    demoUrl: 'https://github.com/spacesdrive/kinetube/releases',
    logo: 'https://raw.githubusercontent.com/spacesdrive/kinetube/main/frontend/public/favicon.png',
  },
  {
    category: 'Analytics',
    title: 'Twiligent',
    tagline: 'Social Media Analytics Dashboard',
    description: [
      "Self-hosted Cloudflare Workers and Supabase dashboard that pulls YouTube and Instagram stats into one place, runs entirely on infrastructure the user controls, with no subscriptions and no shared data",
    ],
    url: 'https://github.com/spacesdrive/twiligent',
    demoUrl: 'https://twiligent.spacesdrive.cc',
    logo: 'https://raw.githubusercontent.com/spacesdrive/twiligent/main/frontend/public/logo.png',
  },
];
