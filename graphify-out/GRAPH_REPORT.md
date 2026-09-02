# Graph Report - volksoft  (2026-09-01)

## Corpus Check
- Corpus is ~18,261 words - fits in a single context window. You may not need a graph.

## Summary
- 128 nodes · 141 edges · 27 communities (8 shown, 16 thin omitted)
- Extraction: 94% EXTRACTED · 4% INFERRED · 2% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.81)
- Token cost: 246,429 input · 0 output

## Community Hubs (Navigation)
- Dev Tooling & Linting
- Landing Page Sections
- Package Metadata & Scripts
- App Routing & Pages
- Layout & Navigation
- Vite/React Template Docs
- UI Icons & i18n Deps
- Portfolio Image Concepts
- Portfolio Template Asset
- EmailJS Integration
- Poppins Font
- i18next Core
- Language Detection
- i18n HTTP Backend
- React Library
- Calendly Integration
- React DOM
- React Icons
- React Router
- Reactstrap UI Kit
- npm save Dependency
- Tailwind CSS
- Tailwind Vite Plugin
- Favicon Asset

## God Nodes (most connected - your core abstractions)
1. `React + Vite Template README` - 7 edges
2. `scripts` - 5 edges
3. `Volksoft Logo (Light Variant)` - 4 edges
4. `Footer()` - 3 edges
5. `TechCarousel()` - 3 edges
6. `Hero()` - 3 edges
7. `Volksoft Logotype (Light)` - 3 edges
8. `@emailjs/browser` - 2 edges
9. `@fontsource/poppins` - 2 edges
10. `@tailwindcss/vite` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --references--> `Volksoft Logo (Light Variant)`  [EXTRACTED]
  src/components/Footer.jsx → public/assets/logotipo-volksoft-light.png
- `Hero()` --references--> `Volksoft Logo (Light Variant)`  [EXTRACTED]
  src/sections/Hero.jsx → public/assets/logotipo-volksoft-light.png
- `React + Vite Template README` --conceptually_related_to--> `index.html Entry Document`  [INFERRED]
  README.md → index.html
- `Volksoft Logo (Light Variant)` --semantically_similar_to--> `Volksoft Logotype (Light)`  [AMBIGUOUS] [semantically similar]
  public/assets/logo-volksoft-light.png → public/assets/logotipo-light.png
- `Volksoft Logo (Light Variant)` --semantically_similar_to--> `Volksoft Logo (Light Variant)`  [AMBIGUOUS] [semantically similar]
  public/assets/logo-volksoft-light.png → public/assets/logotipo-volksoft-light.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **React Fast Refresh Tooling Options** — concept_vite_plugin_react, concept_babel, concept_vite_plugin_react_swc, concept_swc [INFERRED 0.85]

## Communities (27 total, 16 thin omitted)

### Community 0 - "Dev Tooling & Linting"
Cohesion: 0.11
Nodes (19): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, eslint, @eslint/js (+11 more)

### Community 1 - "Landing Page Sections"
Cohesion: 0.16
Nodes (11): Volksoft Logo (Light Variant), Volksoft Logotype (Light), Volksoft Brand, Volksoft Logo (Light Variant), TechCarousel(), Home(), Services(), About() (+3 more)

### Community 2 - "Package Metadata & Scripts"
Cohesion: 0.15
Nodes (12): author, description, license, name, private, scripts, build, dev (+4 more)

### Community 3 - "App Routing & Pages"
Cohesion: 0.24
Nodes (5): App(), About(), Contact(), Portfolio(), router

### Community 4 - "Layout & Navigation"
Cohesion: 0.24
Nodes (6): Footer(), Header(), LanguageSwitcher(), PageTransition(), SocialSidebar(), Layout()

### Community 5 - "Vite/React Template Docs"
Cohesion: 0.18
Nodes (11): Babel, React, SWC, TypeScript, typescript-eslint, Vite, @vitejs/plugin-react, @vitejs/plugin-react-swc (+3 more)

### Community 6 - "UI Icons & i18n Deps"
Cohesion: 0.40
Nodes (5): boxicons, dependencies, boxicons, react-i18next, react-i18next

### Community 7 - "Portfolio Image Concepts"
Cohesion: 0.67
Nodes (3): Coming Soon Placeholder Page Pattern, Volksoft Coming Soon Placeholder Screenshot, Volksoft Brand Identity (Diamond Logo Mark)

## Ambiguous Edges - Review These
- `Volksoft Logo (Light Variant)` → `Volksoft Logotype (Light)`  [AMBIGUOUS]
  public/assets/logo-volksoft-light.png · relation: semantically_similar_to
- `Volksoft Logo (Light Variant)` → `Volksoft Logo (Light Variant)`  [AMBIGUOUS]
  public/assets/logo-volksoft-light.png · relation: semantically_similar_to
- `Volksoft Logotype (Light)` → `Volksoft Logo (Light Variant)`  [AMBIGUOUS]
  public/assets/logotipo-light.png · relation: semantically_similar_to

## Knowledge Gaps
- **49 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 54 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Volksoft Logo (Light Variant)` and `Volksoft Logotype (Light)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Volksoft Logo (Light Variant)` and `Volksoft Logo (Light Variant)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Volksoft Logotype (Light)` and `Volksoft Logo (Light Variant)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `dependencies` connect `UI Icons & i18n Deps` to `Package Metadata & Scripts`, `EmailJS Integration`, `Poppins Font`, `i18next Core`, `Language Detection`, `i18n HTTP Backend`, `React Library`, `Calendly Integration`, `React DOM`, `React Icons`, `React Router`, `Reactstrap UI Kit`, `npm save Dependency`, `Tailwind CSS`, `Tailwind Vite Plugin`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Tooling & Linting` to `Package Metadata & Scripts`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling & Linting` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._