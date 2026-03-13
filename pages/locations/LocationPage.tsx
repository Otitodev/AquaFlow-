
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, ShieldCheck, Phone, CheckCircle2, ChevronRight, Wrench } from 'lucide-react';
import PageMeta from '../../components/PageMeta';
import Services from '../../components/Services';
import { getLocation, locations } from '../../data/locations';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug ?? '');

  if (!location) return <Navigate to="/locations" replace />;

  return (
    <>
      <PageMeta title={location.title} description={location.description} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/locations" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{location.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-500/20 p-2 rounded-full">
              <MapPin className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-orange-400 font-bold uppercase tracking-widest text-sm">Chicago, IL</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-2xl">
            {location.h1}
          </h1>

          {/* Quick trust signals */}
          <div className="flex flex-wrap gap-6 text-sm text-blue-200 mb-10">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <strong className="text-white">Avg. {location.arrivalWindow}</strong> response
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Licensed & Insured · IL Lic #055-123456
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-orange-400" />
              Serving {location.zipCodes.join(', ')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:3125550199"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call (312) 555-0199
            </a>
            <Link
              to="/book"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + Common Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/5">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">About This Area</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Plumbing Experts Who Know {location.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{location.intro}</p>

              <ul className="space-y-3">
                {location.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/5">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need a plumber in {location.name}?</h3>
                <p className="text-slate-600 text-sm mb-6">Average on-site response: <strong className="text-slate-900">{location.arrivalWindow}</strong></p>

                <a
                  href="tel:3125550199"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-center transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Phone className="w-5 h-5" /> (312) 555-0199
                </a>
                <Link
                  to="/book"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-center transition-colors flex items-center justify-center gap-2"
                >
                  Schedule Online
                </Link>

                <p className="text-xs text-slate-400 text-center mt-4">Flat-rate pricing · No surprise fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Nearby Neighborhoods */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Also Serving Nearby Neighborhoods</h2>
          <p className="text-slate-500 mb-8">We cover all of Chicago — explore our service area.</p>
          <div className="flex flex-wrap gap-3">
            {location.nearbyNeighborhoods.map((n) => {
              const neighbor = locations.find(l => l.name === n);
              return neighbor ? (
                <Link
                  key={n}
                  to={`/locations/${neighbor.slug}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 font-medium hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all text-sm"
                >
                  <MapPin className="w-3.5 h-3.5" /> {n}
                </Link>
              ) : (
                <span
                  key={n}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-500 text-sm"
                >
                  <MapPin className="w-3.5 h-3.5" /> {n}
                </span>
              );
            })}
            <Link
              to="/locations"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all text-sm"
            >
              All Locations <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LocalBusiness schema for this neighborhood */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": `Callahan Pipe & Drain — ${location.name}`,
          "url": `https://www.callahanpipeanddrain.com/#/locations/${location.slug}`,
          "telephone": "+13125550199",
          "areaServed": `${location.name}, Chicago, IL`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location.name,
            "addressRegion": "IL",
            "postalCode": location.zipCodes[0],
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2500"
          }
        }) }}
      />
    </>
  );
};

export default LocationPage;
