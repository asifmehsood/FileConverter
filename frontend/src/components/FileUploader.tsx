'use client';
import { useState, useRef, useCallback } from 'react';

interface ConversionOption {
  id: string;
  from: string;
  to: string;
  fromIcon: string;
  toIcon: string;
  description: string;
  gradient: string;
}

interface FileUploaderProps {
  conversionType: ConversionOption;
  onBack: () => void;
}

interface UploadedFile {
  file: File;
  id: string;
  status: 'uploaded' | 'converting' | 'completed' | 'error';
  progress: number;
  downloadUrl?: string;
  error?: string;
}

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB in bytes

const FileUploader: React.FC<FileUploaderProps> = ({ conversionType, onBack }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds 100MB limit. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`;
    }

    // Check file type based on conversion
    const allowedTypes = getAcceptedFileTypes(conversionType.from);
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (!fileExtension || !allowedTypes.includes(fileExtension)) {
      return `Invalid file type. Expected: ${allowedTypes.join(', ')}`;
    }

    return null;
  }, [conversionType.from]);

  const getAcceptedFileTypes = (fromFormat: string): string[] => {
    switch (fromFormat.toLowerCase()) {
      case 'pdf':
        return ['pdf'];
      case 'word':
        return ['doc', 'docx'];
      case 'powerpoint':
        return ['ppt', 'pptx'];
      case 'excel':
        return ['xls', 'xlsx'];
      default:
        return [];
    }
  };

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;

    setUploadError('');
    const newFiles: UploadedFile[] = [];

    Array.from(files).forEach((file) => {
      const validationError = validateFile(file);
      if (validationError) {
        setUploadError(validationError);
        return;
      }

      const fileId = Date.now() + Math.random().toString(36).substr(2, 9);
      newFiles.push({
        file,
        id: fileId,
        status: 'uploaded',
        progress: 0
      });
    });

    if (newFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  }, [validateFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  }, [handleFileSelect]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
  }, [handleFileSelect]);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const convertFile = async (fileId: string) => {
    const fileToConvert = uploadedFiles.find(f => f.id === fileId);
    if (!fileToConvert) return;

    setUploadedFiles(prev => prev.map(f => 
      f.id === fileId ? { ...f, status: 'converting', progress: 0 } : f
    ));

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', fileToConvert.file);
    formData.append('conversionType', conversionType.id);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadedFiles(prev => prev.map(f => {
          if (f.id === fileId && f.status === 'converting') {
            const newProgress = Math.min(f.progress + Math.random() * 20, 90);
            return { ...f, progress: newProgress };
          }
          return f;
        }));
      }, 500);

      // Make API call
      const response = await fetch('http://localhost:3001/api/conversion/document', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const result = await response.json();
      
      setUploadedFiles(prev => prev.map(f => 
        f.id === fileId ? { 
          ...f, 
          status: 'completed', 
          progress: 100,
          downloadUrl: `http://localhost:3001${result.downloadUrl}`
        } : f
      ));
    } catch (error) {
      setUploadedFiles(prev => prev.map(f => 
        f.id === fileId ? { 
          ...f, 
          status: 'error', 
          error: 'Conversion failed. Please try again.' 
        } : f
      ));
    }
  };

  const convertAllFiles = () => {
    uploadedFiles
      .filter(f => f.status === 'uploaded')
      .forEach(f => convertFile(f.id));
  };

  const downloadFile = (file: UploadedFile) => {
    if (!file.downloadUrl) return;
    
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.download = `${file.file.name.split('.')[0]}_converted.${getOutputExtension()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getOutputExtension = (): string => {
    switch (conversionType.to.toLowerCase()) {
      case 'pdf':
        return 'pdf';
      case 'word':
        return 'docx';
      case 'powerpoint':
        return 'pptx';
      case 'excel':
        return 'xlsx';
      default:
        return 'pdf';
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const clearAllFiles = () => {
    setUploadedFiles([]);
    setUploadError('');
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const acceptedTypes = getAcceptedFileTypes(conversionType.from);
  const hasUploadedFiles = uploadedFiles.length > 0;
  const hasCompletedFiles = uploadedFiles.some(f => f.status === 'completed');
  const isConverting = uploadedFiles.some(f => f.status === 'converting');

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <div className="glass-light p-8 rounded-2xl">
        <div
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
            isDragOver
              ? 'border-purple-400 bg-purple-400/10'
              : 'border-white/30 hover:border-white/50 hover:bg-white/5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={acceptedTypes.map(type => `.${type}`).join(',')}
            onChange={handleInputChange}
            className="hidden"
          />
          
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Drop your {conversionType.from} files here
          </h3>
          <p className="text-white/70 mb-6">
            or click to browse and select files
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {acceptedTypes.map(type => (
              <span
                key={type}
                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
              >
                .{type}
              </span>
            ))}
          </div>
          
          <p className="text-white/50 text-sm">
            Maximum file size: 100MB
          </p>
        </div>

        {uploadError && (
          <div className="mt-4 p-4 bg-red-400/15 text-red-100 border border-red-400/30 rounded-xl text-center">
            {uploadError}
          </div>
        )}
      </div>

      {/* Uploaded Files */}
      {hasUploadedFiles && (
        <div className="glass-light p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">
              Uploaded Files ({uploadedFiles.length})
            </h3>
            <div className="flex gap-3">
              {uploadedFiles.some(f => f.status === 'uploaded') && (
                <button
                  onClick={convertAllFiles}
                  disabled={isConverting}
                  className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isConverting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : `bg-gradient-to-r ${conversionType.gradient} hover:shadow-lg hover:scale-105`
                  }`}
                >
                  {isConverting ? 'Converting...' : 'Convert All'}
                </button>
              )}
              <button
                onClick={clearAllFiles}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {uploadedFiles.map((uploadedFile) => (
              <div
                key={uploadedFile.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{conversionType.fromIcon}</div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {uploadedFile.file.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {formatFileSize(uploadedFile.file.size)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {uploadedFile.status === 'uploaded' && (
                      <button
                        onClick={() => convertFile(uploadedFile.id)}
                        className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${conversionType.gradient} hover:shadow-lg transition-all duration-300`}
                      >
                        Convert
                      </button>
                    )}
                    
                    {uploadedFile.status === 'completed' && (
                      <button
                        onClick={() => downloadFile(uploadedFile)}
                        className="px-4 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download</span>
                      </button>
                    )}
                    
                    <button
                      onClick={() => removeFile(uploadedFile.id)}
                      className="p-2 text-white/60 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Status and Progress */}
                {uploadedFile.status === 'converting' && (
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Converting...</span>
                      <span>{Math.round(uploadedFile.progress)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${conversionType.gradient} transition-all duration-300`}
                        style={{ width: `${uploadedFile.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {uploadedFile.status === 'completed' && (
                  <div className="flex items-center text-green-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Conversion completed successfully!
                  </div>
                )}

                {uploadedFile.status === 'error' && (
                  <div className="flex items-center text-red-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {uploadedFile.error}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Actions */}
      {hasCompletedFiles && (
        <div className="glass-light p-8 rounded-2xl text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Conversion Completed!
          </h3>
          <p className="text-white/70 mb-6">
            Your files have been converted successfully. You can download them or convert more files.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={clearAllFiles}
              className={`px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${conversionType.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Convert More Files
            </button>
            <button
              onClick={onBack}
              className="px-8 py-3 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Choose Different Conversion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;