import { SupportedFormat } from '@/types';

export const SUPPORTED_FORMATS: SupportedFormat[] = [
  // Document formats
  { extension: 'pdf', mimeType: 'application/pdf', name: 'PDF Document', category: 'document' },
  { extension: 'doc', mimeType: 'application/msword', name: 'Word Document', category: 'document' },
  { extension: 'docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', name: 'Word Document', category: 'document' },
  { extension: 'txt', mimeType: 'text/plain', name: 'Text File', category: 'document' },
  { extension: 'rtf', mimeType: 'application/rtf', name: 'Rich Text Format', category: 'document' },
  
  // Presentation formats
  { extension: 'ppt', mimeType: 'application/vnd.ms-powerpoint', name: 'PowerPoint Presentation', category: 'presentation' },
  { extension: 'pptx', mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', name: 'PowerPoint Presentation', category: 'presentation' },
  
  // Spreadsheet formats
  { extension: 'xls', mimeType: 'application/vnd.ms-excel', name: 'Excel Spreadsheet', category: 'spreadsheet' },
  { extension: 'xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', name: 'Excel Spreadsheet', category: 'spreadsheet' },
  { extension: 'csv', mimeType: 'text/csv', name: 'CSV File', category: 'spreadsheet' },
  
  // Image formats
  { extension: 'jpg', mimeType: 'image/jpeg', name: 'JPEG Image', category: 'image' },
  { extension: 'jpeg', mimeType: 'image/jpeg', name: 'JPEG Image', category: 'image' },
  { extension: 'png', mimeType: 'image/png', name: 'PNG Image', category: 'image' },
  { extension: 'gif', mimeType: 'image/gif', name: 'GIF Image', category: 'image' },
  { extension: 'bmp', mimeType: 'image/bmp', name: 'BMP Image', category: 'image' },
  { extension: 'webp', mimeType: 'image/webp', name: 'WebP Image', category: 'image' },
  { extension: 'svg', mimeType: 'image/svg+xml', name: 'SVG Image', category: 'image' },
];

export const CONVERSION_RULES: Record<string, string[]> = {
  // From PDF
  'pdf': ['doc', 'docx', 'txt', 'jpg', 'png'],
  
  // From Word documents
  'doc': ['pdf', 'docx', 'txt', 'rtf'],
  'docx': ['pdf', 'doc', 'txt', 'rtf'],
  
  // From PowerPoint
  'ppt': ['pdf', 'pptx', 'jpg', 'png'],
  'pptx': ['pdf', 'ppt', 'jpg', 'png'],
  
  // From Excel
  'xls': ['pdf', 'xlsx', 'csv'],
  'xlsx': ['pdf', 'xls', 'csv'],
  'csv': ['xlsx', 'xls', 'pdf'],
  
  // From Images
  'jpg': ['png', 'gif', 'bmp', 'webp', 'pdf'],
  'jpeg': ['png', 'gif', 'bmp', 'webp', 'pdf'],
  'png': ['jpg', 'gif', 'bmp', 'webp', 'pdf'],
  'gif': ['jpg', 'png', 'bmp', 'webp'],
  'bmp': ['jpg', 'png', 'gif', 'webp'],
  'webp': ['jpg', 'png', 'gif', 'bmp'],
  'svg': ['jpg', 'png', 'pdf'],
  
  // From Text
  'txt': ['pdf', 'doc', 'docx', 'rtf'],
  'rtf': ['pdf', 'doc', 'docx', 'txt'],
};

export const MAX_FILE_SIZE = parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '10485760'); // 10MB default