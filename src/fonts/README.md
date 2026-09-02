# CY Grotesk STD

Titles (h1/h2/h3, see `src/App.css`) are set to use "CY Grotesk STD", but no
font files are in this repo — it's a commercial typeface and needs a
license. Until real files are added, the `font-family` stack silently falls
back to Inter, so nothing is broken.

To wire up the real font once you have licensed `.woff2`/`.woff` files (or
an embed kit from wherever you licensed it, e.g. Adobe Fonts/Fontshare):

1. Drop the font files under `src/fonts/cy-grotesk/` (e.g.
   `CYGroteskSTD-Bold.woff2`, `CYGroteskSTD-Regular.woff2`).
2. Add `@font-face` rules for each weight/style you have, pointing at those
   files, in `src/App.css` (or a new `src/fonts/cy-grotesk.css` imported
   from `main.jsx`).
3. The `h1, h2, h3 { font-family: 'CY Grotesk STD', 'Inter', sans-serif; }`
   rule already in `src/App.css` needs no further changes — it'll pick up
   the real font automatically once the `@font-face` is declared.
