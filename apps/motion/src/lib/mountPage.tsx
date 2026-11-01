import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/geist-mono';
import '@fontsource/instrument-serif/400-italic.css';
import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';

// every page's entry file calls this with its page component
export default function mountPage(page: ReactNode) {
  const root = document.getElementById('root');
  if (!root) throw new Error('the page HTML is missing the #root element');

  createRoot(root).render(<StrictMode>{page}</StrictMode>);
}
