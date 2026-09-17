# resume-viewer

A minimal, dependency-free static page that displays `resume.pdf` inline with a download
button. It is deployed separately from the main portfolio, at `resume.tech.ujjwal.fyi`, and
is what the portfolio's "Download CV" / "Resume" buttons link to.

There is no build step — `index.html` and `resume.pdf` are served as-is.

## Updating the résumé

Replace `resume.pdf` in this folder with the new file (keep the same filename) and redeploy.

## Deploying

Point any static host at this folder as the site root.

### Vercel

1. New Project → import this repo → set **Root Directory** to `resume-viewer`.
2. Framework preset: **Other** (no build command, no output directory override needed).
3. Project Settings → Domains → add `resume.tech.ujjwal.fyi`.

### Netlify

1. New site from Git → **Base directory**: `resume-viewer`, **Publish directory**: `resume-viewer`,
   no build command.
2. Site settings → Domain management → add the custom domain.

### Cloudflare Pages

1. Create a project from this repo → **Build output directory**: `resume-viewer`, no build command.
2. Custom domains → add `resume.tech.ujjwal.fyi`.

Whichever host you use, add a `CNAME` record for `resume.tech.ujjwal.fyi` pointing at the
address the host gives you.
