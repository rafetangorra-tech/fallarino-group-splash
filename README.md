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

## Domain

Live at **https://thefallarinogroup.com** (www redirects to the apex).
DNS is managed in Squarespace (Domains → thefallarinogroup.com → DNS Settings):

- Four **A records**, host `@` → `185.199.108.153` / `.109.153` / `.110.153` / `.111.153`
- **CNAME**, host `www` → `rafetangorra-tech.github.io`
- The Email Security preset (SPF/DMARC/DKIM TXT records) is intentionally kept —
  it stops spoofed mail from this domain. Don't delete it.

GitHub Pages holds the custom domain via the `CNAME` file in this repo, with
HTTPS enforced. If the domain ever changes, update it in repo Settings → Pages
and swap the `og:` URLs in `index.html` and the redirect in `404.html`.

## Design notes

- The photograph ships clean; every word on the page is a real HTML text
  layer — crisp on retina, selectable, indexable, restyleable.
- One typeface trio: Marcellus (wordmark), Cormorant Garamond italic
  (thesis line), Inter (micro-caps). One gold: `#c9a25e`.
- The composition is split: brand in the sky, action on the asphalt, so the
  building signage and the cars stay unobstructed.
- Update `og:image`/`og:title` in `index.html` if branding changes; `og.jpg`
  is a 1200×630 crop of the storefront.
