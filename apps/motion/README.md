# motion

The motion design, video editing and web design portfolio at `motion.ujjwal.fyi`, with a free plugin marketplace
and a social media case study.

```bash
npm run dev:motion     # from the repo root, at http://localhost:5174
npm run build:motion   # writes apps/motion/dist
```

## Pages

Each page has its own HTML file, so it has its own title and URL. `vite.config.ts` lists them and adds the head tags
they share (icons, the theme script, `noindex`).

| URL | HTML | Component | Shows |
|---|---|---|---|
| `/` | `index.html` | `src/pages/HomePage.tsx` | four 16:9 films (the two newest, then the pinned ones), 6 websites, 3 plugins, 3 case studies |
| `/work/` | `work/index.html` | `src/pages/WorkPage.tsx` | every video |
| `/websites/` | `websites/index.html` | `src/pages/WebsitesPage.tsx` | every website |
| `/websites/<slug>/` | `website/index.html` | `src/pages/WebsitePage.tsx` | one website: its story, the full first screen and a link to the live site |
| `/plugins/` | `plugins/index.html` | `src/pages/PluginsPage.tsx` | every plugin, each with a Download button |
| `/case-studies/` | `case-studies/index.html` | `src/pages/CaseStudiesPage.tsx` | every case study, each with a Read button |
| `/case-studies/<slug>/` | `case-study/index.html` | `src/pages/CaseStudyPage.tsx` | one case study in full |

Every case study page comes from the one `case-study/index.html`, and every website page from `website/index.html`.
On Cloudflare, `public/_redirects` serves them for any `/case-studies/<slug>/` or `/websites/<slug>/` address, and
`vite.config.ts` does the same in dev. The page reads the slug from the address, so a new case study or website only
needs an entry with a `slug` in `src/data/caseStudy.ts` or `src/data/sites.ts`. Website screenshots are the first
screen of a 1440x900 window, captured at 2x (2880x1800) so text stays sharp.

Keep the data files newest first. The home page takes the first few items and links to the full page; the limits are
the `HOME_LIMIT` and `HOME_PREVIEW` constants in `src/components/sections/`. A video with `isPinned: true` always
shows on the home page, right after the two newest.

## Home page sections

The look follows a light studio style: a full-screen video hero, a frosted navbar, a `/Label (01)` row over each big
left-aligned headline, white rounded cards and lime buttons with a small dark icon square (`ButtonIcon`).

| Section | Built from | Data |
|---|---|---|
| Hero | looping video with a two-line handwritten (Gochi Hand) headline | `src/components/hero/`, `public/hero/` |
| Work | Icon folder, filter chips, one untitled row of 16:9 films, video player | `src/data/videos.ts` |
| Web design | big screenshot cards that stack as you scroll and open the website's page | `src/data/sites.ts` |
| Plugins | GAIA workflow cards | `src/data/plugins.ts`, `src/data/pluginCategories.ts` |
| Case study | stats band, then blog-style cards: the newest wide, the rest two across | `src/data/caseStudy.ts` |
| Services, FAQ, Contact, Footer | service cards, a two-column FAQ, the sky behind the contact card | `src/data/copy.ts` |

The hero video is `public/hero/sunrise.mp4` (1080p, 60fps) with `sunrise-720.mp4` for phones and `sunrise.webp` as
the poster and for people who turn off motion. It is 1:24.7 to 1:27.9 of `apps/motion/video.mp4`, inside one shot, with
the end faded into the start so it loops. That source file is about 1 GB, so `.gitignore` keeps it out of git.

Case study cards show the platform's colors and logo until a case study has an `image`.

## Light and dark

The site opens in light mode. The sun and moon button in the navbar switches themes and remembers the choice. Dark
mode swaps the `paper`, `ink`, `muted`, `card` and `line` colors in `src/index.css`. Text on the bright accents and on
video uses `night` and `snow`, which stay the same in both themes.

## Adding videos

1. Put the MP4 in `public/videos/` with a `.webp` poster of the same name next to it. Encode it as H.264 with AAC
   audio and `-movflags +faststart`, so it starts playing before it finishes downloading. Keep each file under 25 MB,
   because Cloudflare Pages won't serve anything bigger. A longer film can go on R2 or YouTube; `src` takes any https
   URL.
2. Add an entry at the top of `src/data/videos.ts` with its `aspect` (`'9:16'` or `'16:9'`), the `software` it was made
   with and its `format` (Reel, Launch film, Explainer). Leave `software` empty if you don't know it yet; the video then
   only shows under Everything.

The current clips came from the Social Media library and the ai-resolve templates. The same film often sits in both
places, so each one is listed once.

## Replacing the sample content

The plugins and case studies are still samples, marked `isSample: true` with a lime **Sample** badge.

1. **Plugins.** Edit `src/data/plugins.ts`: title, description, host app, steps (each step's `toolCategory` picks its
   icon from `pluginCategories.ts`), real download count and `downloadUrl`. Without a `downloadUrl` the button reads
   Coming soon and can't be pressed.
   - For a file up to 25 MB, put it in `public/plugins/` (for example `public/plugins/auto-subtitles.zip`) and set
     `downloadUrl: '/plugins/auto-subtitles.zip'`. The button then saves the file straight away.
   - Cloudflare Pages won't serve a bigger file, so upload it to a GitHub release or R2 and use that https link. It
     opens in a new tab, since browsers only start a direct download for files on the same site.
2. **Case study.** Edit `src/data/caseStudy.ts` with the real views, followers and growth per niche, and the
   write-up in `story` that the Read page shows.
3. **Search engines.** When nothing is marked as a sample any more, delete the `noindex` tag from `SHARED_HEAD` in
   `vite.config.ts` and the sample notes in the Plugins and Case study intros.

## Credits

- Icon folder adapted from the 21st.dev component you supplied.
- Video player adapted from [Joly UI](https://www.jolyui.dev/docs/components/creative/video-player) (MIT).
- Workflow card adapted from [GAIA UI](https://github.com/theexperiencecompany/gaia-ui) (MIT).
- Brand logos from [@thesvg/icons](https://www.npmjs.com/package/@thesvg/icons); the Cavalry icon is from
  cavalry.studio. Logos remain trademarks of their owners.
- Step icons from [Solar Icons](https://github.com/saoudi-h/solar-icons), social icons from
  [social-logos](https://github.com/Automattic/social-logos).
