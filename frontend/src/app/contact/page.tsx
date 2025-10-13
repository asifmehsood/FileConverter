export default function ContactPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="glass-light p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">Send Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/70">support@fileconverter.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Live Chat</p>
                      <p className="text-white/70">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">⏰</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-white/70">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">FAQ</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium">Is the service free?</p>
                    <p className="text-white/70 text-sm">Yes, core features are completely free.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">File size limits?</p>
                    <p className="text-white/70 text-sm">Up to 100MB for free users.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Data security?</p>
                    <p className="text-white/70 text-sm">Files are deleted after 24 hours automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}