export default function DashboardPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="glass-light p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to File Converter! 🎉
            </h1>
            <p className="text-xl text-white/80">
              Your account has been verified successfully. You now have access to all our features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Document Conversion</h3>
              <p className="text-white/70">Convert between PDF, DOCX, TXT and more</p>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Image Processing</h3>
              <p className="text-white/70">Resize, convert, and optimize images</p>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Formats</h3>
              <p className="text-white/70">CSV, JSON, XML conversions</p>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-white mb-2">Audio Files</h3>
              <p className="text-white/70">Convert between MP3, WAV, FLAC</p>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Processing</h3>
              <p className="text-white/70">MP4, AVI, MOV conversions</p>
            </div>

            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-white/70">Your files are processed securely</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 text-lg">
              Start Converting Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}