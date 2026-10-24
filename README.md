# Andreas Peintner - Personal Website

Personal and academic website for **Andreas Peintner** (AI Engineer & PhD Candidate at University of Innsbruck), ported to **Astro** using the [Astro Academia](https://github.com/maiobarbero/astro_academia) template and deployed on **GitHub Pages**.

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
- npm

### Installation & Development

```bash
# Install dependencies
npm ci

# Start local development server
npm run dev
```

Visit `http://localhost:4321` to view the website locally.

### Quality Checks & Build

```bash
# Run unit & search tests
npm test

# Check types and Astro components
npm run check

# Lint files
npm run lint

# Build static output for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment to GitHub Pages

The repository is configured with a GitHub Actions workflow in [`.github/workflows/publish.yml`](.github/workflows/publish.yml) which automatically runs tests, builds the Astro site, and deploys the `./dist` folder to GitHub Pages on every push to `main`.
