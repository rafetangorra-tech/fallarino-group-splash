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

## Email capture

"Request Access" submissions are relayed silently by
[FormSubmit](https://formsubmit.co) — each one arrives as an email to
`dfallarino@cliffcomortgage.com` with the visitor's address (subject:
"Access request — The Fallarino Group"). No account or dashboard; the
inbox is the contact list.

- **One-time activation:** FormSubmit emails an activation link to that
  inbox on the first submission. Until it's clicked, submissions aren't
  delivered.
- To change the recipient or provider, edit `CONFIG.formEndpoint` at the
  top of `js/main.js` (any JSON form endpoint works, e.g. Formspree —
  which also adds a dashboard of submissions if you ever want a backup
  record).

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
