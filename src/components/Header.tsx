import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'CSR', href: '#csr' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle hash navigation for home page sections
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    if (href.startsWith('/#') && location.pathname === '/') {
      // Check if we're on home page and this is a section link
      return false; // We could add active section detection here
    }
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/vijay-logo.png" 
              alt="Dr. Vijay Anand Reddy Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`transition-colors duration-200 nav-text ${
                    isActiveLink(item.href) 
                      ? 'text-[#41729F]' 
                      : 'text-gray-700 hover:text-[#41729F]'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-200 nav-text ${
                    isActiveLink(item.href) 
                      ? 'text-[#41729F]' 
                      : 'text-gray-700 hover:text-[#41729F]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919676720002" 
              className="flex items-center space-x-2 text-[#41729F] hover:text-[#2d5a7a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91-9676720002</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className={`text-left px-4 py-2 transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-[#41729F] bg-[#41729F]/10'
                        : 'text-gray-700 hover:text-[#41729F] hover:bg-[#41729F]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-left px-4 py-2 transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-[#41729F] bg-[#41729F]/10'
                        : 'text-gray-700 hover:text-[#41729F] hover:bg-[#41729F]/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a 
                  href="tel:+919676720002" 
                  className="flex items-center space-x-2 text-[#41729F]"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91-9676720002</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;