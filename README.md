# Moonlight Web

Premium ecommerce storefront for luxury nightwear, built with Next.js and prepared for static deployment on GitHub Pages.

## Features

- Editorial storefront with collections, product pages, cart drawer, account, policies, and checkout placeholder.
- Admin panel at `/admin` for product upload, image preview, status control, and inventory tracking.
- Static export configuration for GitHub Pages.
- GitHub Actions workflow for automatic Pages deployment from `main`.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

For GitHub Pages, the workflow builds with `GITHUB_PAGES=true` and publishes the generated `out` directory.
