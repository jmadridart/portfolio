# Josh Madrid Portfolio — Static Recreation

Faithful static HTML/CSS recreation of [joshmadrid.co](https://www.joshmadrid.co/) built from the actual Webflow source CSS and HTML.

## What's included

```
joshmadrid/
├── index.html                    ← Homepage
├── css/
│   └── webflow.css               ← Ported directly from the live Webflow CSS
├── js/
│   ├── main.js                   ← Mobile nav, page loader, parallax
│   └── nav.js                    ← Nav HTML helpers (reference)
├── work/
│   ├── index.html                ← Projects grid
│   ├── dc-shoes.html
│   ├── melin.html
│   ├── polarpro.html
│   └── toshiba.html
├── motion-graphics/
│   └── index.html                ← 15 videos with autoplay-on-scroll
├── about/
│   └── index.html
└── contact/
    └── index.html                ← Contact form (Formspree-ready)
```

## Fonts (exact match to live site)
- **Anton SC** — display/heading font
- **Inter** — body text
- **Inconsolata** — monospace accents
- **Gambetta** — italic meta text (loaded from Webflow CDN)

## Deploying to GitHub Pages

1. Create a new repo on GitHub
2. Push this folder's contents to the repo root
3. **Settings → Pages → Source: Deploy from branch → main / (root)**
4. Live at `https://yourusername.github.io/repo-name/`

**Custom domain:** Add a `CNAME` file containing just `joshmadrid.co`, then update DNS to point to GitHub Pages IPs.

## Wiring up the contact form

The form currently simulates success. To make it real:

**Option 1 — Formspree (free, easiest):**
1. Sign up at formspree.io, create a form
2. In `contact/index.html`, find the commented `fetch(...)` block
3. Replace `YOUR_FORM_ID` with your ID and uncomment it
4. Delete the `setTimeout` simulation block above it

**Option 2 — Netlify Forms:**
Add `netlify` and `data-netlify="true"` to the `<form>` tag (only works if hosted on Netlify)

## Images & Videos

All assets reference the original Webflow CDN URLs — they load as long as those CDN assets remain live. To self-host:
1. Download assets
2. Place in an `assets/` folder
3. Find/replace the CDN URLs

## Differences from the live Webflow site

- Webflow's JavaScript-driven scroll animations (IX2) are approximated with CSS transitions and a lightweight IntersectionObserver
- The parallax effect on service section images uses a simpler scroll listener
- The page loader animation is CSS-only rather than Webflow's animation engine
- The color mode toggle (light/dark) is present visually but not functional — add JS to toggle a `.dark` class on `body` if needed
