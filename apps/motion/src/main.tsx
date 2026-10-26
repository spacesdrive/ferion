import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/geist-mono';
import '@fontsource/instrument-serif/400-italic.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('index.html is missing the #root element');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
