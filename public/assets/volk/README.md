# Volk brand assets

Drop the real Volk logo file(s) here (e.g. `logo.svg` or `logo.png`).

Until then, `src/components/Logo.jsx` renders a text-based "VOLK" wordmark
placeholder so nothing links to a missing image. Once you add the real file,
update `Logo.jsx` to render an `<img src="/assets/volk/logo.svg" ... />`
(or equivalent) instead of the text markup — it's the only place that needs
to change, since Header, Footer, and Hero all import that one component.
