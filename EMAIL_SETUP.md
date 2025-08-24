# Email Setup Guide for Saavi Website

This guide explains how to set up automatic email sending for the contact forms on your Saavi website.

## Current Status

The website now has **automatic email sending** implemented with multiple fallback options:

1. **EmailJS** (Primary method - recommended)
2. **Web3Forms** (Secondary method - free)
3. **Mailto fallback** (Always works as backup)

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or your preferred email provider)
4. Connect your email account (saavi.gifts@gmail.com)
5. Note down the **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```html
Subject: Sales Inquiry - Saavi

Hi Saavi Team,

You have received a new sales inquiry:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}
Inquiry Type: {{inquiry_type}}
Budget Range: {{budget_range}}
Message: {{message}}

Please respond to this inquiry within 24 hours.

Best regards,
Saavi Website
```

4. Note down the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Option 2: Web3Forms Setup (Alternative)

### Step 1: Get Access Key
1. Go to [Web3Forms.com](https://web3forms.com/)
2. Click "Get Access Key"
3. Enter your email (saavi.gifts@gmail.com)
4. Check your email for the access key

### Step 2: Update Configuration
In `src/lib/emailConfig.ts`, replace:
```typescript
formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
```
with your actual access key.

## How It Works Now

### ✅ **Automatic Email Sending**
- When users fill out the contact form, emails are sent **automatically**
- No need for users to manually send emails
- Professional and seamless user experience

### ✅ **Multiple Fallback Options**
- **Primary**: EmailJS sends emails directly to your inbox
- **Secondary**: Web3Forms handles form submissions
- **Fallback**: Opens user's email client if other methods fail

### ✅ **Professional Email Format**
- All form data is properly formatted
- Includes user's contact information
- Ready for immediate follow-up

## Testing the Email Functionality

### Before Setup
- Forms will use the mailto fallback
- Users will see their email client open
- Still functional but not automatic

### After Setup
- Emails are sent automatically
- Users see success message immediately
- Professional experience for your customers

## Benefits of Automatic Email Sending

1. **Better User Experience**
   - No manual email steps
   - Immediate confirmation
   - Professional appearance

2. **Improved Lead Capture**
   - Higher completion rates
   - No lost inquiries
   - Better follow-up opportunities

3. **Professional Image**
   - Automated workflow
   - Consistent communication
   - Brand credibility

## Troubleshooting

### Emails Not Being Sent
1. Check environment variables are set correctly
2. Verify EmailJS service is connected
3. Check browser console for errors
4. Ensure fallback methods are working

### Environment Variables Not Working
1. Restart your development server
2. Check `.env.local` file location
3. Verify variable names are correct
4. Ensure no spaces around `=` signs

## Next Steps

1. **Choose your preferred email service** (EmailJS recommended)
2. **Follow the setup steps** above
3. **Test the contact forms** to ensure emails are sent
4. **Monitor your inbox** for incoming inquiries

## Support

If you need help setting up email functionality:
1. Check the EmailJS documentation
2. Review the Web3Forms setup guide
3. Check browser console for error messages
4. Ensure all environment variables are configured

---

**Note**: The website will work immediately with the mailto fallback, but setting up automatic email sending will provide a much better user experience and professional appearance.
