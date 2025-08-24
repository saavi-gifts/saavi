# Saavi Admin System - Setup & Configuration

## Current Status ✅
- **Authentication**: Currently using username/password (admin/Admin@123)
- **File Storage**: Images stored in `public/uploads/`
- **Data Storage**: Gift data stored in `data/gifts.json`
- **Admin Access**: Available at `/admin/login` (hidden URL)

## Google OAuth Setup Instructions 🔧

When you're ready to switch to Google OAuth, follow these steps:

### 1. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth 2.0 Client IDs"
5. Set Application type to "Web application"
6. Add Authorized JavaScript origins:
   - `http://localhost:3000` (development)
   - `https://yourdomain.com` (production)
7. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
8. Copy the Client ID and Client Secret

### 2. Environment Configuration
Update your `.env.local` file:

```bash
# Change this line from 'credentials' to 'google'
AUTH_TYPE=google

# Add your Google OAuth credentials
GOOGLE_CLIENT_ID=your_actual_google_client_id_here
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret_here

# Generate a random secret key (32+ characters)
NEXTAUTH_SECRET=your_random_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```

### 3. Generate NextAuth Secret
Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

### 4. Restart the Application
After updating the environment variables:
```bash
npm run dev
```

### 5. Test Google Authentication
- Visit `/admin/login`
- You should now see a "Sign in with Google" button
- Click it to test the OAuth flow

## Switching Back to Credentials
If you need to switch back to username/password authentication, simply change:
```bash
AUTH_TYPE=credentials
```

## Current Admin Credentials (Temporary)
- **Username**: admin
- **Password**: Admin@123

## File Structure
```
├── public/uploads/          # Uploaded product images
├── data/gifts.json         # Gift items database
├── src/app/admin/
│   ├── login/page.tsx      # Login page
│   └── gifts/page.tsx      # Gift management
├── src/lib/
│   ├── auth.ts            # Authentication configuration
│   └── storage.ts         # Data storage utilities
└── .env.local             # Environment configuration
```

## Security Notes 🔒
- Never commit real credentials to version control
- Use strong passwords and secrets in production
- Consider implementing user role management for multiple admins
- Regularly rotate OAuth credentials and secrets

## Production Deployment Checklist
- [ ] Set up Google OAuth with production domain
- [ ] Update NEXTAUTH_URL to production URL
- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS for production
- [ ] Set up proper backup for `data/gifts.json`
- [ ] Configure file upload limits for production