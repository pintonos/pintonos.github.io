# Andreas Peintner - Personal Website

Personal and academic website for **Andreas Peintner** (AI Engineering Lead at doc2me, PhD in Computer Science), ported to **Astro** using the [Astro Academia](https://github.com/maiobarbero/astro_academia) template and deployed on **GitHub Pages**.

## Features

- **Blazing Fast**: Static HTML with zero unused JavaScript runtime.
- **Academic Sections**:
  - Bio & Research Overview
  - Research Highlights & Statement
  - Publications (12 papers with DOI links, downloadable PDFs, and BibTeX citations)
  - Curriculum Vitae (Education, Work Experience, Skills, and PDF CV download)
  - Search across publications and blog posts powered by client-side indexing
  - Light & Dark mode support
  - Responsive layout for mobile and desktop

## Getting Started

### Prerequisites

- Node.js (version 20+ recommended, see `.nvmrc`)
- pnpm (version 10+)

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev
```

Visit `http://localhost:4321` to view the website locally.

### Quality Checks & Build

```bash
# Run unit & search tests
pnpm test

# Check types and Astro components
pnpm check

# Lint files
pnpm lint

# Build static output for production
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment to GitHub Pages

The repository is configured with a GitHub Actions workflow in [`.github/workflows/publish.yml`](.github/workflows/publish.yml) which automatically runs tests, builds the Astro site, and deploys the `./dist` folder to GitHub Pages on every push to `main`.
