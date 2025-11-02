'use client';
import { useState } from 'react';
import Link from 'next/link';
import FileUploader from '@/components/FileUploader';

interface ConversionOption {
  id: string;
  from: string;
  to: string;
  fromIcon: string;
  toIcon: string;
  description: string;
  gradient: string;
}

const conversionOptions: ConversionOption[] = [
  {
    id: 'pdf-to-word',
    from: 'PDF',
    to: 'Word',
    fromIcon: '📄',
    toIcon: '📝',
    description: 'Convert PDF documents to editable Word format',
    gradient: 'from-red-500 to-blue-500'
  },
  {
    id: 'word-to-pdf',
    from: 'Word',
    to: 'PDF',
    fromIcon: '📝',
    toIcon: '📄',
    description: 'Convert Word documents to PDF format',
    gradient: 'from-blue-500 to-red-500'
  },
  {
    id: 'pdf-to-ppt',
    from: 'PDF',
    to: 'PowerPoint',
    fromIcon: '📄',
    toIcon: '📊',
    description: 'Convert PDF to PowerPoint presentation',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'ppt-to-pdf',
    from: 'PowerPoint',
    to: 'PDF',
    fromIcon: '📊',
    toIcon: '📄',
    description: 'Convert PowerPoint presentations to PDF',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'word-to-ppt',
    from: 'Word',
    to: 'PowerPoint',
    fromIcon: '📝',
    toIcon: '📊',
    description: 'Convert Word documents to PowerPoint',
    gradient: 'from-blue-500 to-orange-500'
  },
  {
    id: 'ppt-to-word',
    from: 'PowerPoint',
    to: 'Word',
    fromIcon: '📊',
    toIcon: '📝',
    description: 'Convert PowerPoint to Word document',
    gradient: 'from-orange-500 to-blue-500'
  },
  {
    id: 'pdf-to-excel',
    from: 'PDF',
    to: 'Excel',
    fromIcon: '📄',
    toIcon: '📈',
    description: 'Extract tables from PDF to Excel',
    gradient: 'from-red-500 to-green-500'
  },
  {
    id: 'excel-to-pdf',
    from: 'Excel',
    to: 'PDF',
    fromIcon: '📈',
    toIcon: '📄',
    description: 'Convert Excel spreadsheets to PDF',
    gradient: 'from-green-500 to-red-500'
  },
  {
    id: 'word-to-excel',
    from: 'Word',
    to: 'Excel',
    fromIcon: '📝',
    toIcon: '📈',
    description: 'Convert Word tables to Excel format',
    gradient: 'from-blue-500 to-green-500'
  }
];

export default function DocumentConverterPage() {
  const [selectedConversion, setSelectedConversion] = useState<ConversionOption | null>(null);
  const [showUploader, setShowUploader] = useState(false);

  const handleConversionSelect = (option: ConversionOption) => {
    setSelectedConversion(option);
    setShowUploader(true);
  };

  const handleBackToSelection = () => {
    setSelectedConversion(null);
    setShowUploader(false);
  };

  if (showUploader && selectedConversion) {
    return (
      <div className="min-h-screen gradient-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <button
                onClick={handleBackToSelection}
                className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Converters
              </button>
              <div className="glass-light p-6 rounded-2xl inline-block">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl">{selectedConversion.fromIcon}</div>
                  <div className="text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="text-4xl">{selectedConversion.toIcon}</div>
                </div>
                <h1 className="text-2xl font-bold text-white mt-4">
                  {selectedConversion.from} to {selectedConversion.to}
                </h1>
                <p className="text-white/70 mt-2">{selectedConversion.description}</p>
              </div>
            </div>

            {/* File Uploader */}
            <FileUploader 
              conversionType={selectedConversion}
              onBack={handleBackToSelection}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              href="/converters"
              className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Converters
            </Link>
            <div className="glass-light p-8 rounded-2xl">
              <h1 className="text-5xl font-bold text-white mb-4">
                📄 Document Converter
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Transform your documents between different formats with ease. 
                Choose your conversion type below and upload your files.
              </p>
            </div>
          </div>

          {/* Conversion Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionOptions.map((option) => (
              <div
                key={option.id}
                className="glass-3d p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                onClick={() => handleConversionSelect(option)}
              >
                {/* Icons and Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {option.fromIcon}
                  </div>
                  <div className={`p-2 rounded-full bg-gradient-to-r ${option.gradient}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {option.toIcon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {option.from} to {option.to}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm text-center mb-4">
                  {option.description}
                </p>

                {/* Convert Button */}
                <button className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${option.gradient} transition-all duration-300 hover:shadow-lg group-hover:shadow-xl`}>
                  Convert Now
                </button>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16 glass-light p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our Document Converter?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-white/70">Convert your documents in seconds with our optimized processing engine</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-2">100% Secure</h3>
                <p className="text-white/70">Your files are processed securely and deleted after conversion</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-xl font-semibold text-white mb-2">Up to 100MB</h3>
                <p className="text-white/70">Support for large files up to 100MB with maintained quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}