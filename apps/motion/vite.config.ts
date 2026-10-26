import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Connect, type HtmlTagDescriptor, type Plugin } from 'vite';

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// paper is the default, so dark mode only applies once chosen; it runs before paint to avoid a flash
const THEME_SCRIPT = `try {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    document.querySelector('meta[name="theme-color"]').content = '#111110';
  }
} catch {}`;

const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs });
const link = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'link', attrs });

// the head tags every page shares, so each HTML file only holds its own title, description and URL
const SHARED_HEAD: HtmlTagDescriptor[] = [
  // the plugins, case studies and clips are still samples; drop this once the real content is in
  meta({ name: 'robots', content: 'noindex' }),
  meta({ name: 'theme-color', content: '#f5f3ee' }),
  link({ rel: 'icon', href: '/favicon.ico', sizes: 'any' }),
  link({ rel: 'icon', href: '/favicon-dark.ico', sizes: 'any', media: '(prefers-color-scheme: dark)' }),
  link({ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32.png' }),
  link({ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }),
  meta({ property: 'og:type', content: 'website' }),
  meta({ name: 'twitter:card', content: 'summary' }),
  meta({ name: 'twitter:site', content: '@codewithujjwal' }),
  { tag: 'script', children: THEME_SCRIPT },
];

function sharedHead(): Plugin {
  return { name: 'motion-shared-head', transformIndexHtml: () => SHARED_HEAD };
}

const CASE_STUDY_ROUTE = /^\/case-studies\/[^/?#]+\/?(\?.*)?$/;

// in dev and preview, /case-studies/<slug>/ serves case-study/index.html, as public/_redirects does on Cloudflare
const serveCaseStudy: Connect.NextHandleFunction = (req, _res, next) => {
  if (req.url && CASE_STUDY_ROUTE.test(req.url)) req.url = '/case-study/';
  next();
};

function caseStudyRoutes(): Plugin {
  return {
    name: 'motion-case-study-routes',
    configureServer: server => {
      server.middlewares.use(serveCaseStudy);
    },
    configurePreviewServer: server => {
      server.middlewares.use(serveCaseStudy);
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), sharedHead(), caseStudyRoutes()],
  resolve: {
    alias: {
      '@': fromRoot('./src'),
    },
  },
  // one HTML file per page; Cloudflare Pages serves work/index.html at /work/
  input: {
    home: fromRoot('./index.html'),
    work: fromRoot('./work/index.html'),
    websites: fromRoot('./websites/index.html'),
    plugins: fromRoot('./plugins/index.html'),
    caseStudies: fromRoot('./case-studies/index.html'),
    // the one page behind every /case-studies/<slug>/ address
    caseStudy: fromRoot('./case-study/index.html'),
  },
  server: { port: 5174 },
});
