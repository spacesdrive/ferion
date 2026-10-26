<p align="center">
  <img src="apps/tech/public/icon-512.png" alt="ujjwal mark" width="140" />
</p>

<h1 align="center">ferion</h1>

<p align="center">
  The personal sites of Ujjwal Kumar Rai: the tech portfolio at <code>tech.ujjwal.fyi</code>, the motion and web design portfolio at <code>motion.ujjwal.fyi</code>, and the resume viewer.
</p>

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-6-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" /></a>
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

ferion is an npm workspaces monorepo of static React sites written in strict TypeScript. There is no backend, API, database, or environment configuration. Every piece of content lives in plain data files under each app's `src/data`, and the two React apps share components through `packages/`.

| App | Domain | What it is |
|---|---|---|
| `apps/tech` | tech.ujjwal.fyi | Projects, experience, hackathon results and writing, in the ink-on-paper brand kit |
| `apps/motion` | motion.ujjwal.fyi | Motion design, video edits, web design, a free plugin marketplace and a social case study (see [its README](apps/motion/README.md)) |
| `apps/resume` | resume.tech.ujjwal.fyi | A plain HTML page that shows the resume PDF (see [its README](apps/resume/README.md)) |

The feature list below describes `apps/tech`.

## Features

| Feature | Details |
|---|---|
| Brand system | Built on the Ujjwal brand kit v2.0: ink on warm paper with no hues, dot-paper ground, Snow cards with a 2px ink border and hard offset shadow, numbered mono section labels and one marker-highlighted word per headline. Type is Bricolage Grotesque, Gochi Hand for handwritten notes, and Geist Mono for labels and domains. |
| Imagery | The hand-inked doodle mark leads; real photos (the portrait and hackathon shots) are always shown as taped, tilted polaroids. Every photo and logo renders in grayscale. |
| macOS-style dock | Bottom navigation with spring-based magnification, tooltips on hover and keyboard focus, and the active section filled in ink. Magnification only follows a mouse; touch devices get a compact dock sized for 320px screens that sits clear of the iOS home indicator. |
| Paper and ink themes | Paper is the default, as the brand specifies. The dock toggles to ink, and the choice persists in `localStorage`. An inline script in `index.html` applies it before first paint, so there is no flash. The Contact block is an `.inverse` surface that always takes the opposite theme. |
| Sections | Hero, Experience, Projects, Hackathons, Writing, and Contact. Writing shows the top four posts from blog.ujjwal.fyi, loaded live, and only appears once the blog has posts. |
| Hackathon photo viewer | Built on the native `<dialog>` element: focus moves into the viewer, Escape closes it, focus returns to the photo you opened, and the page stops scrolling underneath. |
| Motion | Sections fade in as they scroll into view. `MotionConfig reducedMotion="user"` turns off movement for visitors who prefer reduced motion, and CSS smooth scrolling is limited to the same group. |
| Accessibility | Semantic landmarks and headings, a skip link, visible focus rings, labelled icon links, and text contrast checked against WCAG AA. |

## Tech Stack

| Tool | Role |
|---|---|
| [React 19](https://react.dev) | UI |
| [Vite 8](https://vitejs.dev) | Dev server and bundler |
| [TypeScript 6](https://www.typescriptlang.org) | Strict mode, erasable syntax only, checked with `tsc --noEmit` |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling, with design tokens defined in each app's `src/index.css` |
| [Motion](https://motion.dev) | Dock physics, scroll reveals, lightbox transition |
| [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [Gochi Hand](https://fonts.google.com/specimen/Gochi+Hand), [Geist Mono](https://vercel.com/font) | Brand fonts, self-hosted via Fontsource |
| [lucide-react](https://lucide.dev) and [react-icons](https://react-icons.github.io/react-icons) | Interface icons and brand icons |

## Getting Started

Requires Node.js 20.19+ or 22.12+ (the minimum for Vite 8).

```bash
git clone https://github.com/spacesdrive/ferion.git
cd ferion
npm install
npm run dev:tech       # tech portfolio at http://localhost:5173
npm run dev:motion     # motion portfolio at http://localhost:5174
npm run build          # builds both into apps/tech/dist and apps/motion/dist
npm run typecheck      # tsc --noEmit for every workspace and the config files
npm run lint           # ESLint 10 with typescript-eslint
npm run format         # Prettier
```

## Project Structure

```
apps/
├── tech/                   # tech.ujjwal.fyi
│   ├── public/             # favicons, og.png, robots.txt, sitemap.xml, llms.txt, 404.html
│   └── src/
│       ├── assets/         # brand mark, portrait, avatar, hackathon photos
│       ├── components/     # achievements, blog, brand, experience, hero, layout, navigation, projects, sections, ui
│       ├── data/           # profile, experience, projects, hackathons, blog feed URL
│       ├── hooks/          # useActiveSection, useBlogPosts, useClickSound, useMediaQuery, useTheme
│       ├── lib/            # blog feed client, date formatting, click sound
│       ├── types/          # the blog feed's types
│       ├── App.tsx, main.tsx, index.css
├── motion/                 # motion.ujjwal.fyi (see apps/motion/README.md)
│   ├── public/videos/      # video files and posters
│   └── src/                # components by section, data, types
└── resume/                 # resume.tech.ujjwal.fyi, plain HTML with no build step
packages/
├── ui/                     # @ferion/ui: cn, Reveal, IconFolder, VideoPlayer, WorkflowCard
└── profile/                # @ferion/profile: name, links and social profiles shared by both apps
eslint.config.ts, tsconfig.base.json, tsconfig.node.json, .prettierrc.json
```

## Editing Content

| What | Where |
|---|---|
| Name, resume link, site links, social links and handles (both apps) | `packages/profile/src/` |
| Hero roles (top, left, right, bottom) and avatar | `apps/tech/src/data/profile.ts` |
| Work experience (use `end: null` for a current role) | `apps/tech/src/data/experience.ts` |
| Projects and links (`source`, `live`) | `apps/tech/src/data/projects.ts` |
| Hackathon results and photos | `apps/tech/src/data/hackathons.ts` |
| Blog feed URL (posts themselves are published on blog.ujjwal.fyi) | `apps/tech/src/data/blog.ts` |
| Dock items | `SECTIONS` in `apps/tech/src/components/navigation/SiteDock.tsx` |
| Colors and fonts | `:root`, `.dark`, and `@theme` in `apps/tech/src/index.css` |
| Page title and meta description | `apps/tech/index.html` |
| Everything on motion.ujjwal.fyi | `apps/motion/src/data/` (see [its README](apps/motion/README.md)) |

## Deployment

Every app is a static site on Cloudflare Pages, built from this repo on each push to `main`.

| Pages project | Build command | Output directory | Rebuilds when these change |
|---|---|---|---|
| `ferion` (tech.ujjwal.fyi) | `npm run build:tech` | `apps/tech/dist` | `apps/tech/**`, `packages/**` |
| `motion` (motion.ujjwal.fyi) | `npm run build:motion` | `apps/motion/dist` | `apps/motion/**`, `packages/**` |
| `resume` (resume.tech.ujjwal.fyi) | none, deployed by `.github/workflows/deploy-resume.yml` | `apps/resume` | `apps/resume/**` |

## Credits

The dock is adapted from a Motion-based macOS dock implementation and changed to use real links and buttons, keyboard-visible labels, and mouse-only magnification. Credits for the motion site's components are in [its README](apps/motion/README.md).

## Contributing

Contributions are welcome: bug fixes, accessibility improvements, or features that make sense for a portfolio.

```bash
git checkout -b feat/your-feature-name
# make your changes
npm run typecheck && npm run lint && npm run build
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
