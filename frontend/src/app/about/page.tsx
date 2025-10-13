export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="glass-light p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              About FileConverter
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're passionate about making file conversion simple, secure, and accessible for everyone.
            </p>
          </div>

          {/* Our Story */}
          <section className="mb-12">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                FileConverter was born out of frustration with complicated, slow, and unreliable file conversion tools. 
                We realized that people needed a simple, fast, and secure way to convert their files without downloading 
                software or compromising their privacy.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Since our launch, we've helped millions of users convert billions of files, making their digital lives 
                easier and more productive. Our commitment to simplicity, security, and speed drives everything we do.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-12">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To provide the world's most reliable, secure, and user-friendly file conversion platform. 
                We believe that converting files should be as simple as clicking a button, without any 
                technical knowledge required.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
                <p className="text-white/70">
                  Your files are processed securely and deleted automatically. We never store or share your data.
                </p>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-white/70">
                  Advanced algorithms and powerful servers ensure your files are converted in seconds, not minutes.
                </p>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Always Available</h3>
                <p className="text-white/70">
                  Access our platform 24/7 from any device with an internet connection. No downloads required.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-2">10M+</div>
                <p className="text-white/70">Files Converted</p>
              </div>
              <div className="glass-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <p className="text-white/70">Happy Users</p>
              </div>
              <div className="glass-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <p className="text-white/70">File Formats</p>
              </div>
              <div className="glass-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/70">Uptime</p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-12">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-3xl font-semibold text-white mb-6">Our Team</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We're a dedicated team of developers, designers, and file format experts who are passionate about 
                creating the best possible user experience. Our diverse backgrounds in technology, design, and 
                customer service help us build a product that truly serves our users' needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-full border border-white/20">
                  Software Engineering
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-white/20">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white rounded-full border border-white/20">
                  DevOps & Security
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 text-white rounded-full border border-white/20">
                  Customer Support
                </span>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="glass-light p-8 rounded-xl">
              <h2 className="text-3xl font-semibold text-white mb-4">Get in Touch</h2>
              <p className="text-white/80 text-lg mb-6">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}