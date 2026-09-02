# Titles font: Space Grotesk (was: CY Grotesk STD)

Titles (h1/h2/h3, see `src/App.css`) originally asked for "CY Grotesk STD".
The only file we had for it (`CyGroteskStd-GrandDemi.otf`, from
befonts.com) shipped with `License: Personal Use Only` — not valid for a
commercial site, and not sourced from the original foundry — so it was
never wired in and has been removed from the repo.

Titles now use **Space Grotesk** (`@fontsource/space-grotesk`, SIL Open
Font License — free for commercial/web use), loaded in `src/main.jsx` and
set via the `--font-heading` token in `src/index.css`.

If you get a properly licensed CY Grotesk STD (a commercial web license
from the real foundry, or a marketplace like MyFonts/Fontspring — not a
"personal use" mirror), swap it in:
1. Drop the `.woff2`/`.woff` files under `src/fonts/cy-grotesk/`.
2. Add `@font-face` rules for each weight/style in `src/App.css` (or a new
   `src/fonts/cy-grotesk.css` imported from `main.jsx`).
3. Update `--font-heading` in `src/index.css` back to
   `'CY Grotesk STD', 'Space Grotesk', 'Inter', sans-serif`.
