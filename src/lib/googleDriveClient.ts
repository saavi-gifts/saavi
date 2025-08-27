// Client-side Google Drive API integration
// This works entirely in the browser without server-side API routes

// Declare global gapi types
declare global {
  interface Window {
    gapi: any;
  }
}

const gapi = typeof window !== 'undefined' ? window.gapi : undefined;

export interface GoogleDriveConfig {
  clientId: string;
  apiKey: string;
}

export class GoogleDriveClient {
  private gapi: any;
  private isInitialized = false;
  private accessToken: string | null = null;
  private folderId: string | null = null;
  private readonly FOLDER_NAME = 'Saavi Product Images';

  constructor(private config: GoogleDriveConfig) {
    // Validate configuration
    if (!config.clientId) {
      console.error('Google Drive Client: Missing required clientId');
      throw new Error('Google Drive Client: Missing required clientId');
    }
    if (!config.apiKey) {
      console.error('Google Drive Client: Missing required apiKey');
      throw new Error('Google Drive Client: Missing required apiKey');
    }
  }

  // Initialize Google API
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      console.log('🚀 Starting Google Drive initialization...');
      
      // Validate configuration before proceeding
      if (!this.config.clientId || !this.config.apiKey) {
        throw new Error(`Invalid configuration: clientId=${!!this.config.clientId}, apiKey=${!!this.config.apiKey}`);
      }
      
      console.log('✅ Configuration validated');

      // Load Google API script
      console.log('📥 Loading Google API script...');
      await this.loadGoogleAPI();
      
      // Wait for gapi to be available
      console.log('⏳ Waiting for Google API to be available...');
      await this.waitForGapi();
      
      // Initialize the API
      console.log('🔧 Initializing Google API...');
      await new Promise<void>((resolve, reject) => {
        if (!window.gapi) {
          reject(new Error('Google API not available'));
          return;
        }

        window.gapi.load('client:auth2', async () => {
          try {
            console.log('Initializing Google API with:', {
              apiKey: this.config.apiKey ? `${this.config.apiKey.substring(0, 10)}...` : 'NOT SET',
              clientId: this.config.clientId ? `${this.config.clientId.substring(0, 10)}...` : 'NOT SET'
            });

            console.log('Step 1: Initializing Google API client...');
            // Initialize the client first
            await window.gapi.client.init({
              apiKey: this.config.apiKey,
              clientId: this.config.clientId
            });
            console.log('✅ Google API client initialized successfully');
            
            console.log('Step 2: Loading Google Drive API...');
            // Load the Drive API specifically
            await window.gapi.client.load('drive', 'v3');
            console.log('✅ Google Drive API loaded successfully');
            
            // Verify Drive API is accessible
            if (!window.gapi.client.drive) {
              throw new Error('Google Drive API failed to load. Please ensure it is enabled in Google Cloud Console.');
            }
            console.log('✅ Google Drive API verified as accessible');
            
            // Wait a moment for the client to be fully ready
            await new Promise(resolve => setTimeout(resolve, 100));
            
            console.log('Step 3: Initializing OAuth2...');
            console.log('OAuth2 init params:', {
              client_id: this.config.clientId,
              scope: 'https://www.googleapis.com/auth/drive.file'
            });
            
            // Initialize OAuth2
            await window.gapi.auth2.init({
              client_id: this.config.clientId,
              scope: 'https://www.googleapis.com/auth/drive.file'
            });
            console.log('✅ OAuth2 initialized successfully');
            
            this.gapi = window.gapi;
            this.isInitialized = true;
            console.log('🎉 Google Drive initialization complete!');
            resolve();
          } catch (error) {
            console.error('Google API initialization error:', error);
            // Ensure we pass the actual error object
            reject(error instanceof Error ? error : new Error(String(error)));
          }
        });
      });
    } catch (error) {
      console.error('Failed to initialize Google API:', error);
      
      // Convert error to string properly
      let errorMessage = 'Unknown error';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (error && typeof error === 'object') {
        errorMessage = JSON.stringify(error);
      }
      
      console.error('Error details:', { error, errorMessage, errorType: typeof error });
      
      // Provide more specific error information
      if (errorMessage.includes('API discovery response missing required fields')) {
        throw new Error('Google Drive API not enabled. Please enable Google Drive API in Google Cloud Console.');
      } else if (errorMessage.includes('API key not valid')) {
        throw new Error('Invalid API key. Please check your Google Cloud Console API key.');
      } else if (errorMessage.includes('client_id')) {
        throw new Error('Invalid client ID. Please check your Google Cloud Console OAuth credentials.');
      }
      
      throw new Error(`Failed to initialize Google Drive: ${errorMessage}`);
    }
  }

  // Load Google API script dynamically
  private loadGoogleAPI(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.gapi) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        console.log('✅ Google API script loaded successfully');
        resolve();
      };
      script.onerror = (error) => {
        console.error('❌ Failed to load Google API script:', error);
        reject(new Error('Failed to load Google API script'));
      };
      document.head.appendChild(script);
    });
  }

  // Wait for gapi to be available after script loads
  private waitForGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds timeout
      
      const checkGapi = () => {
        attempts++;
        
        if (window.gapi && typeof window.gapi.load === 'function') {
          console.log('✅ Google API (gapi) is available');
          resolve();
        } else if (attempts >= maxAttempts) {
          const error = new Error('Google API (gapi) failed to load after 5 seconds');
          console.error('❌', error.message);
          reject(error);
        } else {
          setTimeout(checkGapi, 100);
        }
      };
      
      checkGapi();
    });
  }

  // Sign in user
  async signIn(): Promise<string> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      if (!this.gapi) {
        throw new Error('Google API not initialized');
      }
      
      // Get or create auth instance
      let authInstance = this.gapi.auth2.getAuthInstance();
      
      // If no auth instance exists, create one
      if (!authInstance) {
        await this.gapi.auth2.init({
          client_id: this.config.clientId,
          scope: 'https://www.googleapis.com/auth/drive.file'
        });
        authInstance = this.gapi.auth2.getAuthInstance();
      }
      
      if (!authInstance) {
        throw new Error('Failed to initialize Google OAuth');
      }
      
      // Check if user is already signed in
      if (authInstance.isSignedIn.get()) {
        const user = authInstance.currentUser.get();
        this.accessToken = user.getAuthResponse().access_token;
        return this.accessToken!;
      }
      
      // Trigger sign in (this will show account selection popup)
      const user = await authInstance.signIn({
        prompt: 'select_account' // This ensures account selection popup
      });
      
      this.accessToken = user.getAuthResponse().access_token;
      return this.accessToken!;
    } catch (error) {
      console.error('Sign in failed:', error);
      
      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes('popup_closed')) {
          throw new Error('Sign-in was cancelled. Please try again.');
        } else if (error.message.includes('access_denied')) {
          throw new Error('Access was denied. Please grant the required permissions.');
        } else if (error.message.includes('immediate_failed')) {
          throw new Error('Sign-in failed. Please try again.');
        }
      }
      
      throw new Error('Google sign in failed. Please check your internet connection and try again.');
    }
  }

  // Sign out user
  async signOut(): Promise<void> {
    if (!this.isInitialized || !this.gapi) return;

    try {
      const authInstance = this.gapi.auth2.getAuthInstance();
      await authInstance.signOut();
      this.accessToken = null;
      this.folderId = null;
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }

  // Check if user is signed in
  isSignedIn(): boolean {
    if (!this.isInitialized || !this.gapi) return false;
    try {
      const authInstance = this.gapi.auth2.getAuthInstance();
      return authInstance.isSignedIn.get();
    } catch (error) {
      return false;
    }
  }

  // Get or create the Saavi Product Images folder
  private async getOrCreateFolder(): Promise<string> {
    if (this.folderId) return this.folderId;

    try {
      // Search for existing folder
      const response = await this.gapi.client.drive.files.list({
        q: `name='${this.FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: 'files(id, name)'
      });

      if (response.result.files && response.result.files.length > 0) {
        this.folderId = response.result.files[0].id;
        return this.folderId!;
      }

      // Create new folder if it doesn't exist
      const folderMetadata = {
        name: this.FOLDER_NAME,
        mimeType: 'application/vnd.google-apps.folder'
      };

      const folder = await this.gapi.client.drive.files.create({
        resource: folderMetadata,
        fields: 'id'
      });

      this.folderId = folder.result.id;
      return this.folderId!;
    } catch (error) {
      console.error('Error creating/finding folder:', error);
      throw new Error('Failed to access Google Drive folder');
    }
  }

  // Upload image to Google Drive
  async uploadImage(file: File, fileName: string): Promise<string> {
    if (!this.isInitialized || !this.accessToken) {
      throw new Error('Not authenticated with Google Drive');
    }

    try {
      const folderId = await this.getOrCreateFolder();

      // Convert file to base64 for upload
      const base64Data = await this.fileToBase64(file);

      // Upload file metadata
      const fileMetadata = {
        name: fileName,
        parents: [folderId]
      };

      const media = {
        mimeType: file.type,
        body: base64Data
      };

      const uploadedFile = await this.gapi.client.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
      });

      const fileId = uploadedFile.result.id;

      // Make file publicly readable
      await this.gapi.client.drive.permissions.create({
        fileId: fileId,
        resource: {
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

  // Convert file to base64
  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Delete image from Google Drive
  async deleteImage(fileId: string): Promise<boolean> {
    if (!this.isInitialized || !this.accessToken) {
      throw new Error('Not authenticated with Google Drive');
    }

    try {
      await this.gapi.client.drive.files.delete({ fileId });
      return true;
    } catch (error) {
      console.error('Error deleting from Google Drive:', error);
      return false;
    }
  }

  // List images in the folder
  async listImages(): Promise<Array<{ id: string; name: string; webViewLink: string }>> {
    if (!this.isInitialized || !this.accessToken) {
      throw new Error('Not authenticated with Google Drive');
    }

    try {
      const folderId = await this.getOrCreateFolder();
      
      const response = await this.gapi.client.drive.files.list({
        q: `'${folderId}' in parents and trashed=false`,
        fields: 'files(id, name, webViewLink)',
        orderBy: 'createdTime desc'
      });

      return response.result.files || [];
    } catch (error) {
      console.error('Error listing images:', error);
      return [];
    }
  }
}

// Create singleton instance
const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

// Debug logging
if (typeof window !== 'undefined') {
  console.log('Google Drive Client Config:', {
    clientId: clientId ? `${clientId.substring(0, 10)}...` : 'NOT SET',
    apiKey: apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET',
    hasClientId: !!clientId,
    hasApiKey: !!apiKey
  });
}

export const googleDriveClient = new GoogleDriveClient({
  clientId: clientId || '',
  apiKey: apiKey || ''
});
