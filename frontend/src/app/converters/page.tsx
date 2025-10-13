export default function ConvertersPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="glass-light p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              File Converters
            </h1>
            <p className="text-xl text-white/80">
              Choose from our wide range of file conversion tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Document Converter</h3>
              <p className="text-white/70 mb-4">PDF, DOCX, TXT, RTF conversions</p>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25">
                Convert Now
              </button>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Image Converter</h3>
              <p className="text-white/70 mb-4">JPG, PNG, GIF, WebP, SVG</p>
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg transition-all duration-300 hover:from-green-600 hover:to-blue-600 hover:shadow-lg hover:shadow-green-500/25">
                Convert Now
              </button>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-white mb-2">Audio Converter</h3>
              <p className="text-white/70 mb-4">MP3, WAV, FLAC, AAC, OGG</p>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25">
                Convert Now
              </button>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Converter</h3>
              <p className="text-white/70 mb-4">MP4, AVI, MOV, MKV, WebM</p>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-lg hover:shadow-pink-500/25">
                Convert Now
              </button>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Converter</h3>
              <p className="text-white/70 mb-4">CSV, JSON, XML, XLSX</p>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25">
                Convert Now
              </button>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🗜️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Archive Converter</h3>
              <p className="text-white/70 mb-4">ZIP, RAR, 7Z, TAR</p>
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg transition-all duration-300 hover:from-teal-600 hover:to-green-600 hover:shadow-lg hover:shadow-teal-500/25">
                Convert Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}