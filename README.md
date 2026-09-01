# The Fallarino Group — Splash Page

Single-viewport splash page for The Fallarino Group: entrepreneur & real-estate
investor platform. Static HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Structure

```
index.html        the page
css/style.css     all styling (ink & champagne palette, reveal choreography)
js/main.js        email-capture handling + CONFIG
assets/           photography (three sizes) + og.jpg social card
favicon.svg       FG monogram favicon
404.html          redirects stray URLs home
```

## Wiring up the email capture (2 minutes)

The "Request Access" form works out of the box but has nowhere to send
addresses until you give it one. Open `js/main.js` and fill in `CONFIG`:

1. Create a free form at [formspree.io](https://formspree.io) →
   copy the endpoint (looks like `https://formspree.io/f/xyzabcde`) →
   paste it as `formEndpoint`. Submissions land in your inbox/dashboard.
2. Alternatively set `fallbackEmail` to David's email — the button will open a
   pre-filled email instead.

Until one of those is set, submitting shows "Access requests open shortly."

## Pointing the Squarespace domain at GitHub Pages

1. In this repo on GitHub: **Settings → Pages** → set *Custom domain* to the
   domain (e.g. `fallarinogroup.com`) and tick **Enforce HTTPS** once DNS
   propagates. GitHub will commit a `CNAME` file to the repo.
2. In Squarespace: **Settings → Domains → (your domain) → DNS Settings**, then:
   - Delete Squarespace's default A records.
   - Add four **A records**, host `@`, pointing at:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a **CNAME record**, host `www`, value `rafetangorra-tech.github.io`
3. Give DNS 30–60 minutes, then verify at the domain and enable HTTPS.

## Design notes

- The photograph ships clean; every word on the page is a real HTML text
  layer — crisp on retina, selectable, indexable, restyleable.
- One typeface trio: Marcellus (wordmark), Cormorant Garamond italic
  (thesis line), Inter (micro-caps). One gold: `#c9a25e`.
- The composition is split: brand in the sky, action on the asphalt, so the
  building signage and the cars stay unobstructed.
- Update `og:image`/`og:title` in `index.html` if branding changes; `og.jpg`
  is a 1200×630 crop of the storefront.
