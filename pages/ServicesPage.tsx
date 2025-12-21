
import React from 'react';
import { CheckCircle2, Droplets, Flame, Waves, Wrench, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: "Residential Plumbing",
      icon: <Waves className="w-10 h-10 text-blue-600" />,
      items: ["Faucet & Sink Repairs", "Toilet Installation", "Leaking Pipe Detection", "Garbage Disposal Fixes", "Shower & Tub Plumbing"]
    },
    {
      title: "Water Heaters",
      icon: <Flame className="w-10 h-10 text-orange-600" />,
      items: ["Tankless Water Heaters", "Traditional Gas & Electric", "Emergency Repairs", "Expansion Tanks", "Annual Flushing Service"]
    },
    {
      title: "Sewer & Drains",
      icon: <Droplets className="w-10 h-10 text-emerald-600" />,
      items: ["High-Pressure Jetting", "Video Camera Inspection", "Sewer Line Replacement", "Main Drain Cleaning", "Root Removal"]
    },
    {
      title: "HVAC & Boilers",
      icon: <Wind className="w-10 h-10 text-cyan-600" />,
      items: ["Radiator Repairs", "Steam Boiler Service", "Hydronic Heating", "Gas Line Installation", "Backflow Prevention"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-black mb-6">Plumbing Solutions for Every Need</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            From historic bungalows to modern skyscrapers, we have the expertise to handle Chicago's most complex plumbing challenges.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors">
                    {cat.icon}
                  </div>
                  <Wrench className="text-slate-200 group-hover:text-blue-100 transition-colors w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{cat.title}</h2>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/book" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Get an estimate <CheckCircle2 className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-6">The Chicago Standard</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Plumbing in Chicago requires specific knowledge of city codes, lead service lines, and the impact of our extreme seasonal temperature swings. We specialize in winterization and pipe protection.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">Code Compliant</h4>
                <p className="text-sm text-slate-500">Full knowledge of local Chicago building codes.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">Winter Ready</h4>
                <p className="text-sm text-slate-500">Specialized equipment for thawing frozen pipes.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" alt="Chicago Skyline" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
