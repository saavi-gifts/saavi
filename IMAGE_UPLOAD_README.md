# Image Upload Functionality for Admin Gifts Page

## Overview
The Saavi admin gifts page now includes comprehensive image upload functionality with drag and drop support, basic cropping/positioning, and proper server-side storage.

## Features

### ✅ **Drag & Drop Support**
- Drag images directly onto the upload zone
- Visual feedback during drag operations
- Click to upload alternative

### ✅ **File Format Support**
- **JPEG** (.jpg, .jpeg)
- **PNG** (.png)
- Maximum file size: 5MB

### ✅ **Image Cropping & Positioning**
- **Scale**: 0.5x to 2.0x zoom
- **Horizontal Position**: -100px to +100px adjustment
- **Vertical Position**: -100px to +100px adjustment
- Real-time preview of changes

### ✅ **Server-Side Storage**
- Images stored in `/public/uploads/` directory
- Unique filenames using UUID
- Proper file validation and error handling
- Images accessible via public URLs

## Technical Implementation

### **Components**
1. **Enhanced ImageUpload Component** (`src/components/ImageUpload.tsx`)
   - Drag and drop functionality
   - Cropping interface with controls
   - Preview with action buttons

2. **Upload API Route** (`src/app/api/upload/route.ts`)
   - Handles file uploads
   - Validates file types and sizes
   - Stores files on server

3. **Admin Gifts Page Integration** (`src/app/admin/gifts/page.tsx`)
   - Image upload field in gift form
   - Image display in gifts table
   - Proper image URL storage

### **File Storage Structure**
```
public/
  uploads/
    [uuid].jpg
    [uuid].png
    ...
```

### **Database Integration**
- Images are stored as URLs in the `imageUrl` field
- URLs follow pattern: `/uploads/[filename]`
- Images persist across sessions and deployments

## Usage Instructions

### **For Administrators**

1. **Adding/Editing Gifts**
   - Navigate to Admin Gifts page
   - Click "Add New Gift" or "Edit" existing gift
   - Use the image upload section to add product images

2. **Image Upload Process**
   - Drag and drop image onto upload zone, OR
   - Click upload zone to select file
   - Wait for upload to complete
   - Use crop controls if needed
   - Click "Apply Crop" to save changes

3. **Image Management**
   - View uploaded images in gifts table
   - Edit images using crop controls
   - Remove images using remove button

### **Image Optimization**
- Images are automatically compressed to JPEG format
- Quality set to 90% for optimal file size/quality balance
- Cropped images are re-uploaded to maintain quality

## Security Features

### **File Validation**
- Only image files allowed (MIME type validation)
- File size limit: 5MB maximum
- Secure filename generation using UUID

### **Access Control**
- Upload API protected by admin authentication
- Files stored in public directory for web access
- No direct file system access from client

## Error Handling

### **Common Issues & Solutions**

1. **Upload Fails**
   - Check file size (must be < 5MB)
   - Ensure file is JPEG or PNG
   - Verify internet connection

2. **Crop Not Saving**
   - Ensure crop changes are applied before saving
   - Check browser console for errors
   - Verify API endpoint accessibility

3. **Image Not Displaying**
   - Check image URL in database
   - Verify file exists in uploads directory
   - Check file permissions

## Future Enhancements

### **Planned Features**
- Multiple image support per gift
- Image gallery management
- Advanced cropping tools (aspect ratio lock)
- Image compression options
- CDN integration for better performance

### **Performance Optimizations**
- Image lazy loading
- Thumbnail generation
- Progressive image loading
- WebP format support

## Troubleshooting

### **Development Environment**
- Ensure `/public/uploads` directory exists
- Check API route accessibility
- Verify file permissions on uploads directory

### **Production Deployment**
- Ensure uploads directory is writable
- Configure proper file serving
- Monitor disk space usage
- Implement backup strategy for uploaded files

## API Endpoints

### **POST /api/upload**
- **Purpose**: Handle image file uploads
- **Input**: FormData with 'file' field
- **Output**: JSON response with imageUrl
- **Authentication**: None (public endpoint)

### **Response Format**
```json
{
  "success": true,
  "imageUrl": "/uploads/[filename]",
  "message": "Image uploaded successfully"
}
```

## Support

For technical support or feature requests related to image uploads:
- Check browser console for error messages
- Verify file permissions and directory structure
- Review API endpoint accessibility
- Contact development team for advanced issues

---

**Note**: This functionality is designed for admin use only and should not be exposed to public users without proper authentication and rate limiting.
