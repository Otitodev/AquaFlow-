
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { locations } from '../data/locations';

const slugMap: Record<string, string> = Object.fromEntries(
  locations.map(l => [l.name, l.slug])
);

const Footer: React.FC = () => {
  const neighborhoods = [
    'Lincoln Park', 'Wicker Park', 'Logan Square', 'Bucktown',
    'Lakeview', 'Andersonville', 'River North', 'Hyde Park',
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src="/mainlogoP.png" alt="Callahan Pipe & Drain" className="h-12 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Serving the greater Chicago metropolitan area with pride. Residential, commercial, and industrial plumbing solutions available 24/7.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:3125550199" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                <Phone className="w-4 h-4" /> (312) 555-0199
              </a>
              <a href="mailto:service@callahanpipeanddrain.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-500" /> service@callahanpipeanddrain.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> 123 W Wacker Dr, Chicago, IL 60601
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><Link to="/book" className="hover:text-orange-400 transition-colors">Schedule Service</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Service Areas</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
              {neighborhoods.map(n => (
                slugMap[n] ? (
                  <Link key={n} to={`/locations/${slugMap[n]}`} className="text-slate-400 hover:text-orange-400 transition-colors">{n}</Link>
                ) : (
                  <span key={n} className="text-slate-400">{n}</span>
                )
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4"><Link to="/locations" className="text-blue-400 hover:text-blue-300">View all service areas →</Link></p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Callahan Pipe & Drain Chicago. All Rights Reserved. · IL Plumber's License #055-123456 · Fully Insured</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
