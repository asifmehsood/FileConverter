import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Convert Files
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Instantly & Securely
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Transform any file format with our powerful, easy-to-use converter. 
            Support for documents, images, audio, video and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Get Started Free
            </Link>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to convert files quickly and efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/70">Convert files in seconds with our optimized processing</p>
            </div>
            <div className="glass-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Secure</h3>
              <p className="text-white/70">Your files are encrypted and never stored permanently</p>
            </div>
            <div className="glass-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Any Device</h3>
              <p className="text-white/70">Works perfectly on desktop, tablet, and mobile</p>
            </div>
            <div className="glass-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Quality</h3>
              <p className="text-white/70">Maintain original quality with advanced algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Convert your files in just three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Upload File</h3>
              <p className="text-white/70 text-lg">
                Simply drag & drop your file or click to browse and select
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Choose Format</h3>
              <p className="text-white/70 text-lg">
                Select the output format from our extensive list of supported types
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Download</h3>
              <p className="text-white/70 text-lg">
                Get your converted file instantly and download it to your device
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supported Formats
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We support hundreds of file formats across different categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">📄</span> Documents
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">PDF</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">DOCX</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">TXT</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">RTF</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">ODT</span>
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🖼️</span> Images
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">JPG</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">PNG</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">GIF</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">WebP</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">SVG</span>
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎵</span> Audio
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">MP3</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">WAV</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">FLAC</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">AAC</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">OGG</span>
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎬</span> Video
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">MP4</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">AVI</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">MOV</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">MKV</span>
                <span className="px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm">WebM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose FileConverter?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Trusted by thousands of users worldwide for reliable file conversion
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-light p-8 rounded-xl text-center">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Always Free</h3>
              <p className="text-white/70 text-lg">
                Core conversion features are completely free. No hidden fees or subscriptions required.
              </p>
            </div>
            <div className="glass-light p-8 rounded-xl text-center">
              <div className="text-4xl mb-6">🌟</div>
              <h3 className="text-2xl font-semibold text-white mb-4">No Software Install</h3>
              <p className="text-white/70 text-lg">
                Everything runs in your browser. No need to download or install any software.
              </p>
            </div>
            <div className="glass-light p-8 rounded-xl text-center">
              <div className="text-4xl mb-6">🔥</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Unlimited Usage</h3>
              <p className="text-white/70 text-lg">
                Convert as many files as you want. No daily limits or restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto glass-light p-12 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Convert Your Files?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users and start converting your files today. 
            It's fast, secure, and completely free.
          </p>
          <Link 
            href="/signup" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/25"
          >
            Start Converting Now
          </Link>
        </div>
      </section>
    </div>
  );
}
