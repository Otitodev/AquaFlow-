
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                AquaFlow<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Serving the greater Chicago metropolitan area with pride. Residential, Commercial, and Industrial plumbing solutions available 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Residential Services</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Commercial Plumbing</Link></li>
              <li><Link to="/book" className="hover:text-blue-400 transition-colors">Schedule Service</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Pricing Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                123 W Wacker Dr, Chicago, IL 60601
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                (312) 555-0199
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                service@aquaflowchicago.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Weekdays:</span>
                <span className="text-white">24 Hours</span>
              </li>
              <li className="flex justify-between">
                <span>Weekends:</span>
                <span className="text-white">24 Hours</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays:</span>
                <span className="text-blue-400 font-bold">EMERGENCY ONLY</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 AquaFlow Plumbing Chicago. All Rights Reserved. Licensed #055-123456</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
