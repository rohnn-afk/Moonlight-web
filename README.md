# Moonlight Feels

Premium ecommerce storefront for luxury nightwear, built with Next.js and deployed as a static GitHub Pages site.

## Features

- Editorial storefront with collections, product pages, cart drawer, account, policies, and checkout flow.
- Admin panel at `/admin` for product upload, image preview, status control, and inventory tracking.
- Static export configuration for GitHub Pages.
- GitHub Actions workflow for automatic Pages deployment from `main`.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Gates

```bash
npm run check
npm run build
```

For GitHub Pages, the workflow builds with `GITHUB_PAGES=true` and publishes the generated `out` directory.
