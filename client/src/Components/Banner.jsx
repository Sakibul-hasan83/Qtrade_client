import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cryptoPrices, setCryptoPrices] = useState([
    { name: 'BTC', price: '$45,230', change: '+2.5%', up: true },
    { name: 'ETH', price: '$3,120', change: '+1.8%', up: true },
    { name: 'BNB', price: '$312', change: '-0.5%', up: false },
  ]);

  const slides = [
    {
      title: "Trade Smarter with QTrade",
      subtitle: "Advanced Trading Platform",
      description: "Experience lightning-fast trades with institutional-grade tools and real-time market data",
      bgGradient: "from-blue-900 via-purple-900 to-indigo-900"
    },
    {
      title: "Start Trading in Minutes",
      subtitle: "Zero Commission Trading",
      description: "Join millions of traders worldwide. Get instant access to 100+ cryptocurrencies",
      bgGradient: "from-indigo-900 via-blue-900 to-cyan-900"
    },
    {
      title: "Secure & Regulated",
      subtitle: "Your Assets, Protected",
      description: "Bank-level security with 2FA, cold storage, and insurance coverage up to $250K",
      bgGradient: "from-purple-900 via-indigo-900 to-blue-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const priceTimer = setInterval(() => {
      setCryptoPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: `$${(parseFloat(crypto.price.replace(/[$,]/g, '')) + (Math.random() - 0.5) * 50).toFixed(2)}`,
        change: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 3).toFixed(2)}%`,
        up: Math.random() > 0.5
      })));
    }, 3000);
    return () => clearInterval(priceTimer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Crypto Price Ticker */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between overflow-hidden">
            <div className="flex items-center space-x-8">
              {cryptoPrices.map((crypto, i) => (
                <div key={i} className="flex items-center space-x-2 animate-fadeIn">
                  <span className="text-white font-bold">{crypto.name}</span>
                  <span className="text-gray-300">{crypto.price}</span>
                  <span className={`text-sm font-semibold ${crypto.up ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.change}
                  </span>
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-2 text-blue-400">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3"/>
              </svg>
              <span className="text-sm">Live Market</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-4xl font-bold text-white">QTrade</span>
                </div>

                {/* Dynamic Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-lg text-gray-300 max-w-xl">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 font-bold text-lg overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Trading Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 font-bold text-lg">
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Watch Demo</span>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">10M+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">$50B+</div>
                  <div className="text-sm text-gray-400">Trading Volume</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Cryptocurrencies</div>
                </div>
              </div>
            </div>

            {/* Right Content - Trading Card */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Chart Preview */}
                  <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">BTC/USDT</span>
                      <span className="text-green-400 font-semibold">+2.5%</span>
                    </div>
                    <div className="text-white text-3xl font-bold mb-6">$45,230.50</div>
                    
                    {/* Simple Chart Visualization */}
                    <div className="flex items-end space-x-1 h-32">
                      {[40, 55, 45, 65, 60, 75, 70, 85, 80, 90, 95, 100].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-cyan-300"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Trade */}
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
                        Buy
                      </button>
                      <button className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors">
                        Sell
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 mb-1">24h High</div>
                        <div className="text-white font-semibold">$46,850</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 mb-1">24h Low</div>
                        <div className="text-white font-semibold">$44,120</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-blue-500 shadow-lg shadow-blue-500/50'
                : 'w-3 h-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium">Scroll to Explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;