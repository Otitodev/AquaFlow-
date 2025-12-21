
import React from 'react';
import { AlertCircle, Droplets, Thermometer, Activity, Snowflake, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Emergency Repairs",
    desc: "Burst pipes, major leaks, or overflowing toilets fixed instantly.",
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    price: "From $149"
  },
  {
    title: "Drain Cleaning",
    desc: "High-pressure hydro-jetting to clear the toughest Chicago blockages.",
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    price: "From $99"
  },
  {
    title: "Water Heaters",
    desc: "Installation and repair of tankless and traditional water heaters.",
    icon: <Thermometer className="w-8 h-8 text-orange-500" />,
    price: "From $199"
  },
  {
    title: "Sewer Line Service",
    desc: "Video inspections and trenchless sewer repairs with no digging.",
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    price: "Custom Quote"
  },
  {
    title: "Pipe Thawing",
    desc: "Safe professional thawing for frozen pipes during Chicago winters.",
    icon: <Snowflake className="w-8 h-8 text-cyan-500" />,
    price: "From $125"
  },
  {
    title: "Sump Pumps",
    desc: "Battery backups and maintenance to keep your basement dry.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    price: "From $175"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Professional Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We handle everything from a dripping faucet to complex commercial plumbing installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                <span className="text-blue-600 font-bold">{service.price}</span>
                <button className="text-slate-900 font-bold flex items-center gap-1 group/btn">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
