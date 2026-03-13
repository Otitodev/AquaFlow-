
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ChevronRight, Phone } from 'lucide-react';
import PageMeta from '../../components/PageMeta';
import { locations } from '../../data/locations';

const LocationsIndex: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Chicago Plumber Service Areas | Callahan Pipe & Drain"
        description="Callahan Pipe & Drain serves all Chicago neighborhoods — Lincoln Park, Wicker Park, Lakeview, Logan Square, River North & more. 24/7 emergency service. Call (312) 555-0199."
      />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">Chicago, IL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Chicago Neighborhoods We Serve</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            From Lincoln Park to Hyde Park, we cover every corner of the city — 24/7, 365 days a year.
          </p>
          <a
            href="tel:3125550199"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4" /> (312) 555-0199
          </a>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Select Your Neighborhood</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Each page has neighborhood-specific service info, common local issues, and direct booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-50 group-hover:bg-blue-100 p-3 rounded-2xl transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {loc.name}
                </h3>

                <p className="text-sm text-slate-500 mb-5 flex-grow line-clamp-2">
                  {loc.intro.slice(0, 90)}…
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-50 pt-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Avg. <strong className="text-slate-600">{loc.arrivalWindow}</strong> response</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Don't See Your Neighborhood?</h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">
            We serve all of Chicago and many suburbs. Call us to confirm coverage at your address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3125550199"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call (312) 555-0199
            </a>
            <Link
              to="/contact"
              className="border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsIndex;
