/**
 * Local file storage implementation
 * Cloud storage (R2, S3, MinIO) has been removed
 * All files are now stored locally
 */

export const getDownloadSignedUrl = async (
  fileKey: string,
  _expiresIn?: number,
  _bucketName?: string,
): Promise<string> => {
  // For local storage, return the file key as-is
  return fileKey;
};

export const getUploadSignedUrl = async (
  fileKey: string,
  _contentLength?: number,
  _expiresIn?: number,
  _bucketName?: string,
): Promise<string> => {
  // For local storage, return the file key as-is
  return fileKey;
};

export const deleteObject = async (fileKey: string, _bucketName?: string): Promise<void> => {
  // For local storage, file deletion is handled by the local file system
  // This method is kept for compatibility but actual deletion is handled by the file system
};
