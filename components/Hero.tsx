
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, ChevronRight, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070" 
          alt="Professional Plumbing Service Chicago" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-300 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Available Now In Chicago
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Flawless Flow, <br />
            <span className="text-blue-400">Guaranteed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            Expert residential and commercial plumbing with upfront pricing and 24/7 emergency support across the Windy City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all text-center shadow-xl shadow-orange-900/20 flex items-center justify-center gap-2">
              Book a Technician <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:3125550199" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" /> (312) 555-0199
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                '1507003211169-0a1dd7228f2d',
                '1494790108377-be9c29b29330',
                '1560250097-0b93528c311a',
                '1573496359142-b8d87734a5a2',
              ].map((id, i) => (
                <img
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-slate-800 object-cover"
                  src={`https://images.unsplash.com/photo-${id}?w=88&h=88&q=80&auto=format&fit=facearea&facepad=2`}
                  alt="Chicago customer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1 gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-medium text-slate-300">
                <span className="text-white font-bold">4.9/5</span> · 2,500+ verified Chicago reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
