import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Music, Mail, Disc } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-display bg-background-dark text-gray-200 selection:bg-primary selection:text-black">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.08] mix-blend-overlay"></div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[60] border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-background-dark/90 backdrop-blur-md border-border-subtle py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Ventress Logo" 
              className="h-20 md:h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors relative
                  ${location.pathname === link.path ? 'text-white' : 'text-mist hover:text-primary'}
                  ${location.pathname === link.path ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-primary" : ''}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-background-dark transform transition-transform duration-300 md:hidden flex items-center justify-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-bold uppercase tracking-[0.2em] ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-border-subtle relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-[0.2em] text-white">VENTRESS</span>
            <span className="text-mist text-[10px] uppercase tracking-wider">est. 2024 • Earth</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-mist hover:text-primary transition-colors"><Mail size={20} /></a>
            <a href="#" className="text-mist hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-mist hover:text-primary transition-colors"><Disc size={20} /></a>
            <a href="#" className="text-mist hover:text-primary transition-colors"><Music size={20} /></a>
          </div>

          <div className="text-center md:text-right">
            <a href="mailto:booking@ventress.band" className="text-xs font-medium hover:text-primary text-gray-400 transition-colors block mb-1">
              booking@ventress.band
            </a>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">© 2024 Ventress. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;