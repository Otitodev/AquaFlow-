
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const linkClass = (scrolled || !isHome)
    ? 'text-slate-700 hover:text-orange-500'
    : 'text-white hover:text-orange-300';

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/locations', label: 'Locations' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Utility Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-blue-100 text-xs py-2">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Licensed & Insured · IL Lic #055-123456</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Serving Chicago & Suburbs</span>
          </div>
          <a href="tel:3125550199" className="flex items-center gap-1 font-bold text-white hover:text-orange-300 transition-colors">
            <Phone className="w-3 h-3" /> 24/7 Emergency: (312) 555-0199
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled || !isHome ? 'glass-morphism shadow-md py-3' : 'bg-blue-900/80 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/mainlogoP.png" alt="Callahan Pipe & Drain" className="h-14 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-semibold">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={`transition-colors ${linkClass}`}>{label}</Link>
            ))}
            <a href="tel:3125550199" className={`flex items-center gap-2 font-bold transition-colors ${linkClass}`}>
              <Phone className="w-4 h-4" /> (312) 555-0199
            </a>
            <Link to="/book" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg font-bold">
              Book Online
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen
              ? <X className={`w-7 h-7 ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`} />
              : <Menu className={`w-7 h-7 ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`} />
            }
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-white flex flex-col pt-32 px-6 pb-10 shadow-2xl">
          <nav className="flex flex-col gap-6 text-lg font-semibold">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-slate-800 hover:text-orange-500 border-b border-slate-100 pb-4 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <a href="tel:3125550199" className="flex items-center justify-center gap-2 bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg">
              <Phone className="w-5 h-5" /> (312) 555-0199
            </a>
            <Link to="/book" className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
