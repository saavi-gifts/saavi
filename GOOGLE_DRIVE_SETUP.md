# Google Drive API Setup Guide for Saavi (Client-Side)

## Overview
This guide explains how to set up Google Drive API integration for image uploads in the Saavi admin panel using **client-side authentication** (works with static export and GitHub Pages).

## Prerequisites
- Google account with Google Drive
- Access to Google Cloud Console

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Drive API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

## Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Set authorized JavaScript origins:
   - Production: `https://yourdomain.com`
   - Development: `http://localhost:3000`
5. **Important**: Do NOT set redirect URIs for client-side auth
6. Note down your **Client ID**

## Step 3: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Restrict the API key to Google Drive API only
4. Note down your **API Key**

## Step 4: OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in app information:
   - App name: "Saavi Admin"
   - User support email: your email
   - Developer contact information: your email
4. Add scopes:
   - `https://www.googleapis.com/auth/drive.file`
5. Add test users (your email)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Google Drive API Configuration (Client-Side)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key_here
```

## Step 6: Test the Integration

1. Start your development server
2. Go to `/admin/gifts`
3. Click "Connect Google Drive"
4. Complete OAuth flow in popup
5. Try uploading an image

## How It Works (Client-Side)

### Authentication Flow
1. Admin clicks "Connect Google Drive"
2. Google OAuth popup opens
3. Admin grants permissions
4. Access token stored in browser
5. No server-side code needed

### Image Upload Process
1. Admin selects image file
2. Image uploaded directly to Google Drive from browser
3. File stored in "Saavi Product Images" folder
4. File made publicly readable
5. Public URL generated and stored in product
6. Images load directly from Google's CDN

## Benefits of Client-Side Approach

### ✅ **Works with Static Export**
- Compatible with GitHub Pages
- No server-side API routes needed
- No deployment platform restrictions

### ✅ **Better Security**
- OAuth happens entirely in browser
- No server-side token storage
- Google handles all security

### ✅ **Cost Effective**
- No server costs
- No API route hosting fees
- Google's free tier covers everything

### ✅ **Scalable**
- Unlimited image views (direct URLs)
- Google's CDN handles bandwidth
- No server resource limitations

## Security Features

- **OAuth 2.0**: Secure authentication
- **Limited scopes**: Only file access, not full Drive access
- **Public links**: Images accessible without API calls
- **Client-side tokens**: No server-side token storage

## Troubleshooting

### Common Issues

1. **"Invalid origin"**
   - Check JavaScript origins in Google Cloud Console
   - Ensure domain matches exactly

2. **"Access denied"**
   - Check OAuth consent screen settings
   - Verify scopes are added
   - Add your email as test user

3. **"API not enabled"**
   - Enable Google Drive API in Cloud Console

4. **"Quota exceeded"**
   - Check API quotas in Cloud Console
   - Free tier: 1,000 requests/day

### Support

For Google API issues:
- Check [Google Drive API documentation](https://developers.google.com/drive/api)
- Review [OAuth 2.0 guide](https://developers.google.com/identity/protocols/oauth2)

For Saavi integration issues:
- Check browser console for errors
- Verify environment variables
- Test OAuth flow step by step

## Cost Analysis

### Free Tier (No Cost)
- **Storage**: 15GB included
- **API calls**: 1,000 per day
- **Bandwidth**: Unlimited for public files

### When You Might Pay
- **Storage**: Over 15GB ($0.023/GB/month)
- **API calls**: Over 1,000/day ($5 per 1,000)

### For Saavi's Scale
- **100-500 product images**: FREE
- **Typical admin usage**: FREE
- **Customer viewing**: FREE (direct URLs)

## Best Practices

1. **Environment variables**: Use NEXT_PUBLIC_ prefix for client-side
2. **Error handling**: Provide clear error messages
3. **Fallback support**: Local upload as backup
4. **Monitoring**: Track API usage and costs
5. **Backup strategy**: Consider multiple storage options

## Deployment

### GitHub Pages ✅
- **Fully compatible** with static export
- **No additional setup** required
- **Works immediately** after deployment

### Other Static Hosts ✅
- **Netlify**: Works with static export
- **Vercel**: Works with static export
- **Any static host**: Compatible

### Server Hosts ✅
- **Vercel**: Full Node.js support
- **Netlify**: Serverless functions
- **Railway/Render**: Full Node.js support

---

**Note**: This client-side setup provides enterprise-grade image hosting with zero ongoing costs and full compatibility with static export and GitHub Pages deployment.
