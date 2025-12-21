
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (scrolled || !isHome) 
    ? 'text-slate-700 hover:text-blue-600' 
    : 'text-slate-900 md:text-white md:hover:text-blue-300';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'glass-morphism shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-black tracking-tight ${scrolled || !isHome ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            AquaFlow<span className="text-blue-600">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <Link to="/services" className={`transition-colors ${linkClass}`}>Services</Link>
          <Link to="/about" className={`transition-colors ${linkClass}`}>About</Link>
          <Link to="/faq" className={`transition-colors ${linkClass}`}>FAQ</Link>
          <Link to="/contact" className={`transition-colors ${linkClass}`}>Contact</Link>
          <Link to="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg">
            Book Online
          </Link>
        </nav>

        <button className="md:hidden">
          <Menu className={`w-8 h-8 ${scrolled || !isHome ? 'text-slate-900' : 'text-slate-900 md:text-white'}`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
