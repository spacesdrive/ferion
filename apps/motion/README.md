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
| `/` | `index.html` | `src/pages/HomePage.tsx` | the latest 4 vertical and 2 horizontal videos, 6 websites, 3 plugins, 2 case studies |
| `/work/` | `work/index.html` | `src/pages/WorkPage.tsx` | every video |
| `/websites/` | `websites/index.html` | `src/pages/WebsitesPage.tsx` | every website |
| `/plugins/` | `plugins/index.html` | `src/pages/PluginsPage.tsx` | every plugin, each with a Download button |
| `/case-studies/` | `case-studies/index.html` | `src/pages/CaseStudiesPage.tsx` | every case study |

Keep the data files newest first. The home page takes the first few items and links to the full page; the limits are
the `HOME_LIMIT` constants in `src/components/sections/`.

## Home page sections

| Section | Built from | Data |
|---|---|---|
| Hero | designer-pop headline | `src/components/hero/` |
| Work | Icon folder, filter chips, 9:16 and 16:9 rows, video player | `src/data/videos.ts` |
| How I work | ugc-blaze process | `src/data/copy.ts` |
| Web design | designer-pop project grid | `src/data/sites.ts` |
| Plugins | GAIA workflow cards | `src/data/plugins.ts`, `src/data/pluginCategories.ts` |
| Case study | ugc-limelight stats band and cards | `src/data/caseStudy.ts` |
| Services, FAQ, Contact, Footer | ugc-limelight | `src/data/copy.ts` |

## Light and dark

The site opens in light mode. The sun and moon button in the navbar switches themes and remembers the choice. Dark
mode swaps the `paper`, `ink`, `muted`, `card` and `line` colors in `src/index.css`. Text on the bright accents and on
video uses `night` and `snow`, which stay the same in both themes.

## Replacing the sample content

Everything marked `isSample: true` shows a lime **Sample** badge on the page. Replace it like this:

1. **Videos.** Put each file in `public/videos/` (MP4, H.264, `-movflags +faststart` so it starts playing before it
   finishes downloading) with a poster image next to it. Add an entry to `src/data/videos.ts` with its `aspect`
   (`'9:16'` or `'16:9'`), the `software` it was made with and `isSample: false`. Files bigger than about 25 MB should go
   to R2 or YouTube instead of the repo; `src` can be any https URL.
2. **Plugins.** Edit `src/data/plugins.ts`: title, description, host app, steps (each step's `toolCategory` picks its
   icon from `pluginCategories.ts`), real download count and `downloadUrl`. Without a `downloadUrl` the button reads
   Coming soon and can't be pressed.
   - For a file up to 25 MB, put it in `public/plugins/` (for example `public/plugins/auto-subtitles.zip`) and set
     `downloadUrl: '/plugins/auto-subtitles.zip'`. The button then saves the file straight away.
   - Cloudflare Pages won't serve a bigger file, so upload it to a GitHub release or R2 and use that https link. It
     opens in a new tab, since browsers only start a direct download for files on the same site.
3. **Case study.** Edit `src/data/caseStudy.ts` with the real views, followers and growth per niche.
4. **Search engines.** When nothing is marked as a sample any more, delete the `noindex` tag from `SHARED_HEAD` in
   `vite.config.ts` and the sample notes in the Work, Plugins and Case study intros.

The sample clips in `public/videos/samples/` were rendered with ffmpeg for this site and can be deleted once real
videos are in.

## Credits

- Icon folder adapted from the 21st.dev component you supplied.
- Video player adapted from [Joly UI](https://www.jolyui.dev/docs/components/creative/video-player) (MIT).
- Workflow card adapted from [GAIA UI](https://github.com/theexperiencecompany/gaia-ui) (MIT).
- Brand logos from [@thesvg/icons](https://www.npmjs.com/package/@thesvg/icons); the Cavalry icon is from
  cavalry.studio. Logos remain trademarks of their owners.
- Step icons from [Solar Icons](https://github.com/saoudi-h/solar-icons), social icons from
  [social-logos](https://github.com/Automattic/social-logos).
