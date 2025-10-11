export interface ConversionRequest {
  id: string;
  originalFile: File;
  fromFormat: string;
  toFormat: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  error?: string;
  createdAt: Date;
}

export interface ConversionHistory {
  id: string;
  fileName: string;
  fromFormat: string;
  toFormat: string;
  fileSize: number;
  status: 'completed' | 'failed';
  downloadUrl?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface SupportedFormat {
  extension: string;
  mimeType: string;
  name: string;
  category: 'document' | 'image' | 'presentation' | 'spreadsheet';
}

export interface ConversionStats {
  totalConversions: number;
  successfulConversions: number;
  failedConversions: number;
}