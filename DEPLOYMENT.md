# Saavi Website Deployment Guide

## Overview
This guide explains how to deploy the Saavi website to GitHub Pages using the subdomain `saavi.tuvisminds.com`.

## Domain Configuration
- **Main Domain**: `tuvisminds.com`
- **Subdomain**: `saavi.tuvisminds.com`
- **Wildcard Certificate**: `*.tuvisminds.com` (covers all subdomains)

## DNS Configuration on GoDaddy

### 1. Set up saavi.tuvisminds.com
1. Log into GoDaddy and go to DNS Management for `tuvisminds.com`
2. Add A record:
   - **Type**: A
   - **Name**: `saavi`
   - **Value**: `185.199.108.153` (GitHub Pages IP)
   - **TTL**: 600

### 2. Alternative: CNAME Record
- **Type**: CNAME
- **Name**: `saavi`
- **Value**: `saavi-gifts.github.io`
- **TTL**: 600

## Multiple Subdomains with Wildcard Certificate

Your wildcard certificate `*.tuvisminds.com` automatically covers ALL subdomains. You can create additional subdomains without additional SSL certificates:

### Example Subdomains:
- `admin.tuvisminds.com` - Admin panel
- `api.tuvisminds.com` - API endpoints  
- `blog.tuvisminds.com` - Blog section
- `shop.tuvisminds.com` - E-commerce
- `support.tuvisminds.com` - Customer support

### DNS Records for Additional Subdomains:
```
Type: A
Name: admin
Value: 185.199.108.153

Type: A
Name: blog  
Value: 185.199.108.153
```

## GitHub Pages Setup

1. **Repository**: [https://github.com/saavi-gifts/saavi](https://github.com/saavi-gifts/saavi)
2. **Go to Settings** → **Pages**
3. **Source**: Select "GitHub Actions"
4. **Custom domain**: `saavi.tuvisminds.com`

## Deployment Process

The GitHub Actions workflow automatically:
1. Builds the static export
2. Deploys to GitHub Pages
3. Configures the custom domain `saavi.tuvisminds.com`

## SSL Certificate

- **Provider**: Let's Encrypt
- **Type**: Wildcard certificate for `*.tuvisminds.com`
- **Auto-renewal**: Configured via acme.sh
- **Coverage**: All subdomains automatically secured

## Troubleshooting

### DNS Propagation
- DNS changes can take up to 48 hours to propagate globally
- Use tools like `dig` or [whatsmydns.net](https://whatsmydns.net) to check propagation

### SSL Issues
- Wildcard certificates automatically secure all subdomains
- No additional SSL configuration needed for new subdomains

### GitHub Pages Issues
- Check Actions tab for build/deployment status
- Verify CNAME file is present in the `out/` directory
- Ensure custom domain is configured in repository settings

## Next Steps

1. **Wait for DNS propagation** (usually 15 minutes to 2 hours)
2. **Verify GitHub Actions deployment** in the Actions tab
3. **Test your site** at `saavi.tuvisminds.com`
4. **Add more subdomains** as needed (they'll automatically be SSL-secured)

## Benefits of Subdomain Approach

- **Scalability**: Easy to add new sections/services
- **SSL Security**: All subdomains automatically secured
- **Organization**: Clear separation of concerns
- **Cost-effective**: Single wildcard certificate covers everything
- **Flexibility**: Each subdomain can point to different services
