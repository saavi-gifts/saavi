# GitHub Pages Deployment Guide

## Overview
This Next.js application has been configured for static export and deployment to GitHub Pages.

## What's Been Configured

### 1. Next.js Configuration
- `output: 'export'` enabled in `next.config.js`
- Static export generates files in the `out/` directory
- All pages are pre-rendered as static HTML

### 2. GitHub Actions Workflow
- Automatic build and deployment on push to main/master branch
- Uses `peaceiris/actions-gh-pages@v3` action
- Publishes from `./out` directory
- Custom domain: `tuvisminds.com`

### 3. Static Data
- API routes removed for static export compatibility
- Sample gift data included in `CatalogGrid` component
- Image upload functionality uses local file previews

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure custom domain is set to `tuvisminds.com`

### 3. DNS Configuration
Add these DNS records at your domain registrar:
```
Type: CNAME
Name: @
Value: your-username.github.io

Type: CNAME  
Name: www
Value: your-username.github.io
```

## Build Commands

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Build for GitHub Pages
```bash
npm run build:gh-pages
```

## File Structure After Build
```
out/
├── index.html          # Home page
├── admin/             # Admin pages
├── catalog/           # Catalog page
├── corporate/         # Corporate page
├── leadership/        # Leadership page
├── _next/            # Next.js assets
├── img/              # Images
└── CNAME             # Custom domain
```

## Notes
- The application is now fully static and compatible with GitHub Pages
- Authentication features are disabled for static export
- All functionality works with client-side JavaScript
- Images are served from the `public/img/` directory

## Troubleshooting
- If build fails, check for any remaining API calls
- Ensure all components use static data or client-side functionality
- Verify CNAME file is present in the `out/` directory
