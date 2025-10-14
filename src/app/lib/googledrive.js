import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

// Authenticate with Google Drive
const authenticateGoogleDrive = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'googledrive.json', // Path to your service account key file
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  return google.drive('v3');
};

// Function to upload a file to Google Drive
const uploadFileToDrive = async (fileBuffer, fileName, mimeType) => {
  const drive = await authenticateGoogleDrive();

  const res = await drive.files.create({
    media: {
      body: fileBuffer,
    },
    requestBody: {
      name: fileName, // The name of the file on Google Drive
      mimeType: mimeType, // MIME type of the file (image, pdf, etc.)
    },
    fields: 'id, webViewLink', // Return the file ID and the public view URL
  });

  return res.data.webViewLink; // This URL can be shared to access the file
};

export { uploadFileToDrive };
