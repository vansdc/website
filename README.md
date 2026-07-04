# Vanessa Dávila Conn — personal site

A small, static SvelteKit site for Vanessa Dávila Conn, physician and
epidemiologist (UC San Diego / San Diego State University).

Design follows a Dieter Rams and Bruno Munari sensibility: quiet order, one bold
signal, a warm "paper" palette. The signature element is a **generative HIV
transmission network** (`src/lib/components/Network.svelte`): the same growth
rule produces a different network on every load; tap it to regrow. Clay nodes are
"newly diagnosed" cases, a nod to Vanessa's molecular-epidemiology research on
how new diagnoses shape transmission.

## Stack

- SvelteKit 2 + Svelte 5, static adapter (fully prerendered)
- Self-hosted fonts: Fraunces (display serif), Spectral (body serif), IBM Plex Mono (mono)
- Palette: warm oat paper, plum structure, clay signal, defined in `src/app.css`

## Bilingual (English / Spanish)

Every page is bilingual. The current language lives in a small reactive store,
`src/lib/i18n.svelte.js`, and the EN / ES toggle sits in the navbar. Each page
component holds its own `copy = { en: {...}, es: {...} }` object and selects the
active language with `$derived(copy[locale.current])`.

- The choice is saved to `localStorage` and applied on the next visit.
- On a first visit the browser language is used (`es*` shows Spanish).
- Prerendered HTML is English; the client switches to the saved choice on load,
  which is why `initLang()` runs in `onMount` (avoids a hydration mismatch).

To add a string: add the key under both `en` and `es` in that page's `copy`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in ./build
npm run preview  # preview the production build
```

## Content

All content pages are `.svelte` (bilingual). Design tokens live in `src/app.css`.

| Route           | Source file                            |
| --------------- | -------------------------------------- |
| `/`             | `src/routes/+page.svelte` (Hero + About teaser) |
| `/about`        | `src/routes/about/+page.svelte`        |
| `/research`     | `src/routes/research/+page.svelte`     |
| `/publications` | `src/routes/publications/+page.svelte` |
| `/teaching`     | `src/routes/teaching/+page.svelte`     |
| `/cv`           | `src/routes/cv/+page.svelte`           |
| `/contact`      | `src/routes/contact/+page.svelte`      |

## Photos

Two photos were carried over from Vanessa's original Wix site and self-hosted in
`static/`:

- `vanessa-portrait.jpg` — her portrait (home + About pages)
- `autumn.jpg` — the autumn image, used as a quote band on the About page beneath
  her line "From autumn I learned that although the leaves fall, the tree stays
  standing."

`static/portrait.svg` remains as a fallback monogram. To change the portrait,
replace `static/vanessa-portrait.jpg`.

## Things to personalize

- **Links** — LinkedIn is wired in (sidebar footer + `/contact`). The Google
  Scholar link uses a name search; replace with Vanessa's exact Scholar / ORCID
  URLs in `/contact` and `/publications` once known.
- **Contact details** — her home address and personal mobile from the CV were
  intentionally left off the public site.
- **CV PDF** — the downloadable CV PDF was removed from this public repo because
  it contains her home address and personal mobile (it is git-ignored via
  `static/vanessa-davila-conn-cv.pdf`). To re-enable the "Download CV" link,
  add a redacted PDF at that path and restore the link in `src/routes/cv/` and
  `src/routes/contact/`. The full CV is already presented on the `/cv` page.

## Publications

The publications list is curated by hand from the CV in
`src/routes/publications/+page.svelte`. To keep it in sync with an external
source later (e.g. ORCID), it could be switched to a data-loading `+page.js`;
for now a static list keeps the build self-contained.
