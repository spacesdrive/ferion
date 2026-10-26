# motion

The motion design, video editing and web design portfolio at `motion.ujjwal.fyi`, with a free plugin marketplace
and a social media case study.

```bash
npm run dev:motion     # from the repo root, at http://localhost:5174
npm run build:motion   # writes apps/motion/dist
```

## Sections

| Section | Built from | Data |
|---|---|---|
| Hero | designer-pop headline, ugc-blaze card marquee | `src/components/hero/` |
| Made with | ugc-blaze logo strip | `src/data/software.ts` |
| About | ugc-blaze stat cards (counted from the data files) | `src/components/sections/About.tsx` |
| Work | Icon folder, filter chips, 9:16 and 16:9 rows, video player | `src/data/videos.ts` |
| How I work | ugc-blaze process | `src/data/copy.ts` |
| Web design | designer-pop project grid | `src/data/sites.ts` |
| Plugins | GAIA workflow cards | `src/data/plugins.ts`, `src/data/pluginCategories.ts` |
| Case study | ugc-limelight stats band and cards | `src/data/caseStudy.ts` |
| Services, FAQ, Contact, Footer | ugc-limelight | `src/data/copy.ts` |

## Replacing the sample content

Everything marked `isSample: true` shows a lime **Sample** badge on the page. Replace it like this:

1. **Videos.** Put each file in `public/videos/` (MP4, H.264, `-movflags +faststart` so it starts playing before it
   finishes downloading) with a poster image next to it. Add an entry to `src/data/videos.ts` with its `aspect`
   (`'9:16'` or `'16:9'`), the `software` it was made with and `isSample: false`. Files bigger than about 25 MB should go
   to R2 or YouTube instead of the repo; `src` can be any https URL.
2. **Plugins.** Edit `src/data/plugins.ts`: title, description, host app, steps (each step's `toolCategory` picks its
   icon from `pluginCategories.ts`), real download count and `downloadUrl`. The Download button appears once a plugin
   has a `downloadUrl`.
3. **Case study.** Edit `src/data/caseStudy.ts` with the real views, followers and growth per niche.
4. **Search engines.** When nothing is marked as a sample any more, delete the `noindex` meta tag in `index.html` and the
   sample notes in the Work, Plugins and Case study intros.

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
