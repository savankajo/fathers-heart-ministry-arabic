import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const NAV_ITEMS = [
  { label: 'Home', href: '/', anchor: '' },
  { label: 'About Us', href: '/#about', anchor: 'about' },
  { label: 'Gallery', href: '/#gallery', anchor: 'gallery' },
  { label: 'Services', href: '/#services', anchor: 'services' },
  { label: 'Contact Us', href: '/#contact', anchor: 'contact' },
];

const EXTRA_LINKS = [
  { label: 'Sermons', to: '/sermons' },
  { label: 'Podcast', to: '/podcast' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (isHome && anchor) {
      e.preventDefault();
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg'
    : 'bg-white shadow-md';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center space-x-3 group">
            <img
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
              alt="Father's Heart Ministry Logo"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleAnchorClick(e, item.anchor)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#1a3a5c] hover:bg-blue-50 rounded-lg transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            ))}
            {EXTRA_LINKS.map(link => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${isActive ? 'bg-[#1a3a5c] text-white' : 'text-gray-700 hover:text-[#1a3a5c] hover:bg-blue-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/donations"
              className="ml-3 bg-[#D4AF37] hover:bg-[#c49b2a] text-black font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Donate
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#1a3a5c] hover:bg-blue-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleAnchorClick(e, item.anchor)}
                className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-[#1a3a5c] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            {EXTRA_LINKS.map(link => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-[#1a3a5c] text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-[#1a3a5c]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/donations"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 bg-[#D4AF37] text-black font-bold px-4 py-3 rounded-xl text-center hover:bg-[#c49b2a] transition-colors duration-200"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
