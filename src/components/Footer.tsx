export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0B0E14] via-[#1a1f2e] to-[#0B0E14] py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A67FF]/10 via-purple-500/10 to-[#00D1B2]/10 animate-gradient-shift"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#4A67FF]/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#00D1B2]/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center space-y-8">
          {/* Logo/Title with gradient border */}
          <div className="inline-block animate-float">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] p-[2px] rounded-2xl">
                <div className="bg-[#0B0E14] px-10 py-5 rounded-2xl">
                  <p className="text-white text-2xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    AI Outfit Generator
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg">
              🏆 AI500 Hackathon 2024
            </p>
            <p className="text-gray-500">
              Revolutionizing fashion with artificial intelligence
            </p>
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-3 pt-4">
            <div className="w-3 h-3 bg-gradient-to-r from-[#4A67FF] to-purple-500 rounded-full animate-bounce-slow shadow-lg shadow-[#4A67FF]/50"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce-slow shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-[#00D1B2] rounded-full animate-bounce-slow shadow-lg shadow-pink-500/50" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* Gradient divider */}
          <div className="pt-8">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#4A67FF]/50 via-purple-500/50 via-[#00D1B2]/50 to-transparent rounded-full"></div>
          </div>
          
          {/* Bottom text */}
          <p className="text-gray-600 text-sm pt-4">
            Made with ❤️ and cutting-edge AI
          </p>
        </div>
      </div>
    </footer>
  );
}