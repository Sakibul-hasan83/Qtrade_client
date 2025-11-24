import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    products: [
      { name: 'Spot Trading', path: '/spot' },
      { name: 'Futures Trading', path: '/futures' },
      { name: 'Margin Trading', path: '/margin' },
      { name: 'Staking', path: '/staking' },
      { name: 'NFT Marketplace', path: '/nft' },
      { name: 'P2P Trading', path: '/p2p' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press Kit', path: '/press' },
      { name: 'Security', path: '/security' },
      { name: 'Announcements', path: '/announcements' },
      { name: 'Legal & Privacy', path: '/legal' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Trading Guide', path: '/guide' },
      { name: 'API Documentation', path: '/api' },
      { name: 'Fee Structure', path: '/fees' },
      { name: 'Submit Ticket', path: '/ticket' },
      { name: 'Community', path: '/community' }
    ],
    resources: [
      { name: 'Academy', path: '/academy' },
      { name: 'Market Analysis', path: '/analysis' },
      { name: 'Trading Blog', path: '/blog' },
      { name: 'Crypto News', path: '/news' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Referral Program', path: '/referral' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', color: 'hover:text-cyan-400' },
    { name: 'Discord', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z', color: 'hover:text-indigo-400' },
    { name: 'Reddit', icon: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z', color: 'hover:text-orange-400' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'hover:text-blue-600' }
  ];

  const popularCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$45,230', change: '+2.5%', up: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,120', change: '+1.8%', up: true },
    { symbol: 'BNB', name: 'Binance Coin', price: '$312', change: '-0.5%', up: false },
    { symbol: 'SOL', name: 'Solana', price: '$98', change: '+5.2%', up: true }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A0F1F] to-[#050A14] text-white border-t border-[#1A253A]">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest market insights, trading tips, and exclusive offers delivered to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#0A0F1F] border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-all duration-300"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 whitespace-nowrap"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                QTrade
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The world's leading cryptocurrency trading platform. Trade with confidence using advanced tools, real-time data, and institutional-grade security.
            </p>
            
            {/* App Download Buttons */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-300">Download Our App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300 group">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300 group">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Cryptocurrencies */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-cyan-500/20">
          <h4 className="text-lg font-bold mb-4 text-cyan-400">Popular Cryptocurrencies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCryptos.map((crypto, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[#0A0F1F]/50 rounded-lg hover:bg-[#0A0F1F]/80 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                    {crypto.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{crypto.symbol}</div>
                    <div className="text-xs text-gray-400">{crypto.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{crypto.price}</div>
                  <div className={`text-xs ${crypto.up ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="pt-8 border-t border-[#1A253A]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">Follow Us:</span>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ${social.color} transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© 2024 QTrade. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-[#1A253A]">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>2FA Protected</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Insured up to $250K</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Licensed & Regulated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;