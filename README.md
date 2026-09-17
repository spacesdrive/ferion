<p align="center">
  <img src="public/favicon.png" alt="ferion logo" width="160" />
</p>

<h1 align="center">ferion</h1>

<p align="center">
  The personal portfolio of Ujjwal Kumar Rai: projects, experience, hackathon results, and writing.
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
| macOS-style dock | Bottom navigation with spring-based magnification, tooltips on hover and keyboard focus, and an active-section indicator. Magnification only follows a mouse; touch devices get a compact dock sized for 320px screens that sits clear of the iOS home indicator. |
| Light and dark themes | Follows the system preference until toggled, then persists in `localStorage`. An inline script in `index.html` applies the theme before first paint, so there is no flash. |
| Sections | Hero, About, Stack, Experience, Projects, Hackathons, Writing, and Contact. |
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
| [Geist and Geist Mono](https://vercel.com/font) | Self-hosted variable fonts via Fontsource |
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
├── assets/                 # hackathon photos, blog cover, resume PDF
├── components/
│   ├── achievements/       # HackathonItem, PhotoLightbox
│   ├── blog/               # BlogCard
│   ├── experience/         # ExperienceItem
│   ├── layout/             # Section primitives (Section, SectionLabel, FeatureHeading, HatchBand), Footer
│   ├── navigation/         # Dock primitives and SiteDock (the configured site dock)
│   ├── projects/           # ProjectCard
│   ├── sections/           # one component per page section
│   └── ui/                 # Badge, Reveal, SocialIcon
├── data/                   # all content: profile, skills, experience, projects, hackathons, blog
├── hooks/                  # useActiveSection, useClickSound, useMediaQuery, useTheme
├── lib/                    # cn() class helper, date formatting, click sound data
├── App.jsx                 # page composition
├── main.jsx                # React entry, font imports
└── index.css               # Tailwind import, theme tokens, base styles
```

## Editing Content

| What | Where |
|---|---|
| Name, role, tagline, avatar, resume, About text, social links | `src/data/profile.js` |
| Stack groups | `src/data/skills.js` |
| Work experience (use `end: null` for a current role) | `src/data/experience.js` |
| Projects, tech tags, and links (`source`, `live`, `releases`) | `src/data/projects.js` |
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
- Connect with the author: [LinkedIn](https://www.linkedin.com/in/u-k-r/), [Reddit](https://www.reddit.com/user/mrujjwalkr/), or [Hacker News](https://news.ycombinator.com/user?id=valzor).
