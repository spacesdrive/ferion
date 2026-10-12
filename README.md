<p align="center">
  <img src="public/icon-512.png" alt="ujjwal mark" width="140" />
</p>

<h1 align="center">ferion</h1>

<p align="center">
  The personal portfolio of Ujjwal Kumar Rai at <code>tech.ujjwal.fyi</code>: projects, experience, hackathon results and writing.
</p>

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white" alt="React 19" /></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-ff0055?style=flat-square" alt="License MIT" /></a>
</p>

<p align="center">
  <a href="#features">Features</a> &middot;
  <a href="#getting-started">Getting Started</a> &middot;
  <a href="#project-structure">Project Structure</a> &middot;
  <a href="#editing-content">Editing Content</a> &middot;
  <a href="#contributing">Contributing</a>
</p>

---

ferion is a single-page React app that builds to static HTML, CSS, and JavaScript. There is no backend, API, database, or environment configuration. Every piece of content lives in plain data files under `src/data`.

## Features

| Feature | Details |
|---|---|
| Brand system | Built on the Ujjwal brand kit v2.0: ink on warm paper with no hues, dot-paper ground, Snow cards with a 2px ink border and hard offset shadow, numbered mono section labels and one marker-highlighted word per headline. Type is Bricolage Grotesque, Gochi Hand for handwritten notes, and Geist Mono for labels and domains. |
| Imagery | The hand-inked doodle mark leads; real photos (the portrait and hackathon shots) are always shown as taped, tilted polaroids. Every photo and logo renders in grayscale. |
| macOS-style dock | Bottom navigation with spring-based magnification, tooltips on hover and keyboard focus, and the active section filled in ink. Magnification only follows a mouse; touch devices get a compact dock sized for 320px screens that sits clear of the iOS home indicator. |
| Paper and ink themes | Paper is the default, as the brand specifies. The dock toggles to ink, and the choice persists in `localStorage`. An inline script in `index.html` applies it before first paint, so there is no flash. The Contact block is an `.inverse` surface that always takes the opposite theme. |
| Sections | Hero, About, Experience, Projects, Hackathons, Writing, and Contact. |
| Hackathon photo viewer | Built on the native `<dialog>` element: focus moves into the viewer, Escape closes it, focus returns to the photo you opened, and the page stops scrolling underneath. |
| Motion | Sections fade in as they scroll into view. `MotionConfig reducedMotion="user"` turns off movement for visitors who prefer reduced motion, and CSS smooth scrolling is limited to the same group. |
| Accessibility | Semantic landmarks and headings, a skip link, visible focus rings, labelled icon links, and text contrast checked against WCAG AA. |

## Tech Stack

| Tool | Role |
|---|---|
| [React 19](https://react.dev) | UI |
| [Vite 8](https://vitejs.dev) | Dev server and bundler |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling, with design tokens defined in CSS (`src/index.css`) |
| [Motion](https://motion.dev) | Dock physics, scroll reveals, lightbox transition |
| [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [Gochi Hand](https://fonts.google.com/specimen/Gochi+Hand), [Geist Mono](https://vercel.com/font) | Brand fonts, self-hosted via Fontsource |
| [lucide-react](https://lucide.dev) and [react-icons](https://react-icons.github.io/react-icons) | Interface icons and brand icons |

## Getting Started

Requires Node.js 20.19+ or 22.12+ (the minimum for Vite 8).

```bash
git clone https://github.com/spacesdrive/ferion.git
cd ferion
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint 10
```

## Project Structure

```
src/
├── assets/
│   ├── brand/              # doodle mark (ink, paper, sticker) and portrait, from the brand kit
│   └── hackathons/         # event photos
├── components/
│   ├── achievements/       # HackathonItem, PhotoLightbox
│   ├── blog/               # BlogCard
│   ├── brand/              # Mark (theme-aware), Polaroid
│   ├── experience/         # ExperienceItem
│   ├── layout/             # Container, Section, SectionHeading, Header, Footer
│   ├── navigation/         # Dock primitives and SiteDock (the configured site dock)
│   ├── projects/           # ProjectCard
│   ├── sections/           # one component per page section
│   └── ui/                 # Reveal, SocialIcon
├── data/                   # all content: profile, experience, projects, hackathons, blog
├── hooks/                  # useActiveSection, useClickSound, useMediaQuery, useTheme
├── lib/                    # cn() class helper, date formatting, click sound data
├── App.jsx                 # page composition
├── main.jsx                # React entry, font imports
└── index.css               # brand tokens, paper and ink themes, ink-card, ink-pill, marker, note
resume-viewer/              # standalone page deployed to resume.tech.ujjwal.fyi (see its README)
```

## Editing Content

| What | Where |
|---|---|
| Name, tagline, roles, intro, portrait, resume link, About text, social links and handles | `src/data/profile.js` |
| Work experience (use `end: null` for a current role) | `src/data/experience.js` |
| Projects and links (`source`, `live`, `releases`) | `src/data/projects.js` |
| Hackathon results and photos | `src/data/hackathons.js` |
| Blog posts (`readingTime` is optional) | `src/data/blog.js` |
| Dock items | `SECTIONS` in `src/components/navigation/SiteDock.jsx` |
| Colors and fonts | `:root`, `.dark`, and `@theme` in `src/index.css` |
| Page title and meta description | `index.html` |

## Deployment

`npm run build` writes a fully static site to `dist/`. It needs no server-side configuration and can be deployed to Vercel, Netlify, Cloudflare Pages, or GitHub Pages as a standard Vite project (build command `npm run build`, output directory `dist`).

## Credits

The dock is adapted from a Motion-based macOS dock implementation, converted to JavaScript, and changed to use real links and buttons, keyboard-visible labels, and mouse-only magnification.

## Contributing

Contributions are welcome: bug fixes, accessibility improvements, or features that make sense for a portfolio.

```bash
git checkout -b feat/your-feature-name
# make your changes
npm run lint && npm run build
git commit -m "feat: describe your change"
git push origin feat/your-feature-name
```

Then open a pull request against `main`. Before submitting, test in both light and dark mode and at a mobile width, since the dock behaves differently there.

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Be respectful, be constructive, and assume good faith.

## License

Released under the [MIT License](LICENSE).

Copyright (c) 2026 Ujjwal Kumar Rai.

## Contact

- Bug reports and feature requests: [open a GitHub issue](https://github.com/spacesdrive/ferion/issues).
- Connect with the author: [LinkedIn](https://www.linkedin.com/in/u-k-r/), [X](https://x.com/codewithujjwal), [Instagram](https://www.instagram.com/ujjwal.fyi) or [YouTube](https://www.youtube.com/@rec709.studio).
