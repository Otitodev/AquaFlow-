
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { unifiedServices } from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-blue-600 py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Chicago's Full-Service <br/>Plumbing Experts</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            From the historic homes of Gold Coast to the modern high-rises in the West Loop, AquaFlow delivers reliable, code-compliant solutions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {unifiedServices.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-2xl font-black text-blue-600">{service.price}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.desc}
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Included in this service:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/book" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md group-hover:shadow-lg"
                >
                  Book this Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-6">The AquaFlow Standard</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We don't just fix pipes; we provide peace of mind. Every service call includes a comprehensive safety inspection of your home's main plumbing lines to prevent future emergencies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Licensed Technicians</h4>
                <p className="text-sm text-slate-500 leading-relaxed">All staff are IDPH licensed and background checked for your safety.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                <p className="text-sm text-slate-500 leading-relaxed">We use flat-rate pricing guides so there are never any surprises on your bill.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Chicago Experts</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Decades of experience with city-specific codes and vintage plumbing.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Work Warranty</h4>
                <p className="text-sm text-slate-500 leading-relaxed">We stand by our work with a minimum 1-year warranty on all parts and labor.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000" 
                alt="Chicago Infrastructure" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl -z-0 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-3xl -z-0 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
