import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Google Drive API configuration
const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

const FOLDER_NAME = 'Saavi Product Images';

export interface GoogleDriveConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export class GoogleDriveService {
  private oauth2Client: OAuth2Client;
  private drive: any;
  private folderId: string | null = null;

  constructor(config: GoogleDriveConfig) {
    this.oauth2Client = new google.auth.OAuth2(
      config.clientId,
      config.clientSecret,
      config.redirectUri
    );
  }

  // Set access token (called after OAuth flow)
  setAccessToken(accessToken: string) {
    this.oauth2Client.setCredentials({ access_token: accessToken });
    this.drive = google.drive({ version: 'v3', auth: this.oauth2Client });
  }

  // Get OAuth URL for admin authentication
  getAuthUrl(): string {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent'
    });
  }

  // Exchange authorization code for access token
  async getAccessToken(code: string): Promise<{ access_token: string; refresh_token?: string }> {
    const { tokens } = await this.oauth2Client.getToken(code);
    return {
      access_token: tokens.access_token!,
      refresh_token: tokens.refresh_token || undefined
    };
  }

  // Get or create the Saavi Product Images folder
  private async getOrCreateFolder(): Promise<string> {
    if (this.folderId) return this.folderId;

    try {
      // Search for existing folder
      const response = await this.drive.files.list({
        q: `name='${FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: 'files(id, name)'
      });

      if (response.data.files && response.data.files.length > 0) {
        this.folderId = response.data.files[0].id;
        return this.folderId!;
      }

      // Create new folder if it doesn't exist
      const folderMetadata = {
        name: FOLDER_NAME,
        mimeType: 'application/vnd.google-apps.folder'
      };

      const folder = await this.drive.files.create({
        resource: folderMetadata,
        fields: 'id'
      });

      this.folderId = folder.data.id;
      return this.folderId!;
    } catch (error) {
      console.error('Error creating/finding folder:', error);
      throw new Error('Failed to access Google Drive folder');
    }
  }

  // Upload image to Google Drive
  async uploadImage(file: File, fileName: string): Promise<string> {
    try {
      const folderId = await this.getOrCreateFolder();

      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Upload file metadata
      const fileMetadata = {
        name: fileName,
        parents: [folderId]
      };

      const media = {
        mimeType: file.type,
        body: buffer
      };

      const uploadedFile = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
      });

      const fileId = uploadedFile.data.id;

      // Make file publicly readable
      await this.drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      });

      // Return public URL
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    } catch (error) {
      console.error('Error uploading to Google Drive:', error);
      throw new Error('Failed to upload image to Google Drive');
    }
  }

  // Delete image from Google Drive
  async deleteImage(fileId: string): Promise<boolean> {
    try {
      await this.drive.files.delete({ fileId });
      return true;
    } catch (error) {
      console.error('Error deleting from Google Drive:', error);
      return false;
    }
  }

  // List images in the folder
  async listImages(): Promise<Array<{ id: string; name: string; webViewLink: string }>> {
    try {
      const folderId = await this.getOrCreateFolder();
      
      const response = await this.drive.files.list({
        q: `'${folderId}' in parents and trashed=false`,
        fields: 'files(id, name, webViewLink)',
        orderBy: 'createdTime desc'
      });

      return response.data.files || [];
    } catch (error) {
      console.error('Error listing images:', error);
      return [];
    }
  }
}

// Create singleton instance
export const googleDriveService = new GoogleDriveService({
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  redirectUri: process.env.GOOGLE_REDIRECT_URI || ''
});
