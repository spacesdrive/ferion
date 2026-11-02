# motion

The motion design, video editing and web design portfolio at `motion.ujjwal.fyi`, with a marketplace of useful links for design and marketing
and case studies on how I grow audiences.

```bash
npm run dev:motion     # from the repo root, at http://localhost:5174
npm run build:motion   # writes apps/motion/dist
```

## Pages

Each page has its own HTML file, so it has its own title and URL. `vite.config.ts` lists them and adds the head tags
they share (icons and the theme script).

| URL | HTML | Component | Shows |
|---|---|---|---|
| `/` | `index.html` | `src/pages/HomePage.tsx` | four 16:9 films (the two newest, then the pinned ones), 6 websites, 3 marketplace links, 3 case studies |
| `/work/` | `work/index.html` | `src/pages/WorkPage.tsx` | every video |
| `/websites/` | `websites/index.html` | `src/pages/WebsitesPage.tsx` | every website |
| `/websites/<slug>/` | `website/index.html` | `src/pages/WebsitePage.tsx` | one website: its story, the full first screen and a link to the live site |
| `/marketplace/` | `marketplace/index.html` | `src/pages/MarketplacePage.tsx` | every marketplace link (`/plugins/` redirects here) |
| `/case-studies/` | `case-studies/index.html` | `src/pages/CaseStudiesPage.tsx` | the growth totals and every case study from the blog |

Every website page comes from the one `website/index.html`. On Cloudflare, `public/_redirects` serves it for any
`/websites/<slug>/` address, and `vite.config.ts` does the same in dev. The page reads the slug from the address, so a
new website only needs an entry with a `slug` in `src/data/sites.ts`. The old `/case-studies/<slug>/` sample pages
redirect to `/case-studies/`. Website screenshots are the first
screen of a 1440x900 window, captured at 2x (2880x1800) so text stays sharp.

Keep the data files newest first. The home page takes the first few items and links to the full page; the limits are
the `HOME_LIMIT` and `HOME_PREVIEW` constants in `src/components/sections/`. A video with `isPinned: true` always
shows on the home page, right after the two newest.

## Home page sections

The look follows a light studio style: a lime-glow hero, a frosted navbar, a `/Label (01)` row over each big
left-aligned headline, white rounded cards and lime buttons with a small dark icon square (`ButtonIcon`).

| Section | Built from | Data |
|---|---|---|
| Hero | name, serif role, cut-out portrait, availability and tools | `src/components/hero/` |
| Watch first | the intro reel playing muted on a loop, with a Sound on button | `src/components/sections/Showreel.tsx` |
| Work | Icon folder, filter chips, one untitled row of 16:9 films, video player | `src/data/videos.ts` |
| Web design | big screenshot cards that stack as you scroll and open the website's page | `src/data/sites.ts` |
| Marketplace | search bar and GAIA workflow cards with each site's favicon and a Visit site button | `src/data/marketplace.ts`, `src/assets/favicons/` |
| Case study | growth totals, then the blog's case studies: the newest wide, the rest two across | `src/data/growthStats.ts`, the blog |
| Services, FAQ, Contact, Footer | service cards, a two-column FAQ, the sky behind the contact card | `src/data/copy.ts` |

The hero follows a lime-glow portfolio layout: "Hi I'm Ujjwal" over an italic serif "Motion Designer", the
cut-out portrait `src/assets/brand/cutout.webp` (background removed with rembg's BiRefNet portrait model) leaning
gently toward the pointer, and four small notes around it.


## Light and dark

The site opens in light mode. The sun and moon button in the navbar switches themes and remembers the choice. Dark
mode swaps the `paper`, `ink`, `muted`, `card` and `line` colors in `src/index.css`. Text on the bright accents and on
video uses `night` and `snow`, which stay the same in both themes.

## Adding videos

1. Put the MP4 in `public/videos/` with a `.webp` poster of the same name next to it. Encode it as H.264 with AAC
   audio and `-movflags +faststart`, so it starts playing before it finishes downloading. Keep each file under 25 MB,
   because Cloudflare Pages won't serve anything bigger. A longer film can go on R2 or YouTube; `src` takes any https
   URL.
2. Add an entry at the top of `src/data/videos.ts` with its `aspect` (`'9:16'`, `'16:9'` or `'1:1'`), the `software` it was made
   with and its `format` (Reel, Launch film, Explainer). Leave `software` empty if you don't know it yet; the video then
   only shows under Everything.

The current clips came from the Social Media library and the ai-resolve templates. The same film often sits in both
places, so each one is listed once.

## Adding to the marketplace

Add an entry to `src/data/marketplace.ts` with the site's `name`, `url`, a `category` (shown at the bottom of the card),
its favicon and a one-line `description`. Save the favicon as a 128px PNG (or SVG) in `src/assets/favicons/`; set
`isFaviconLight: true` if it is white, so it sits on a dark tile. The search bar looks through the name, category,
description and address, and `/` jumps to it.
Keep the description to about 100 characters, because the card shows two lines. Newest first: the home page shows the
first three.

## Case studies

The case studies are posts on blog.ujjwal.fyi tagged **motion case study**. The site reads them from
`https://blog.ujjwal.fyi/api/posts.json?tag=motion-case-study` when the page loads, so tagging a post on the blog adds it
here, newest first and up to 12. While they load the section shows grey placeholders; if the blog can't be reached it
links to the tag page instead. The totals in the dark band are in `src/data/growthStats.ts`.

## Credits

- Icon folder adapted from the 21st.dev component you supplied.
- Video player adapted from [Joly UI](https://www.jolyui.dev/docs/components/creative/video-player) (MIT).
- Workflow card adapted from [GAIA UI](https://github.com/theexperiencecompany/gaia-ui) (MIT).
- Brand logos from [@thesvg/icons](https://www.npmjs.com/package/@thesvg/icons); the Cavalry icon is from
  cavalry.studio. Logos remain trademarks of their owners.
- Step icons from [Solar Icons](https://github.com/saoudi-h/solar-icons), social icons from
  [social-logos](https://github.com/Automattic/social-logos).
