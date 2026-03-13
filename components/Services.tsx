
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Droplets, Thermometer, Activity, Snowflake, Zap, ArrowRight, Wrench, Wind } from 'lucide-react';

export const unifiedServices = [
  {
    id: "emergency",
    title: "Emergency Repairs",
    desc: "24/7 rapid response for burst pipes, major leaks, and urgent flooding issues across Chicago.",
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    price: "From $149",
    details: ["Burst Pipe Repair", "Main Water Shut-off", "Active Leak Patching", "Emergency Pump-outs"]
  },
  {
    id: "residential",
    title: "Residential Plumbing",
    desc: "Expert care for faucets, toilets, and fixtures in Chicago bungalows to high-rise condos.",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    price: "From $99",
    details: ["Fixture Installation", "Toilet Repair", "Garbage Disposals", "Leak Detection"]
  },
  {
    id: "water-heaters",
    title: "Water Heaters",
    desc: "Specialized installation and repair for tankless, gas, and electric water heating systems.",
    icon: <Thermometer className="w-8 h-8 text-orange-500" />,
    price: "From $199",
    details: ["Tankless Upgrades", "Gas/Electric Repair", "Annual Flushing", "Expansion Tanks"]
  },
  {
    id: "sewer-drain",
    title: "Sewer & Drains",
    desc: "Advanced hydro-jetting and video inspections to clear the toughest urban blockages.",
    icon: <Droplets className="w-8 h-8 text-emerald-500" />,
    price: "From $125",
    details: ["Hydro-Jetting", "Camera Inspection", "Root Removal", "Main Line Clearing"]
  },
  {
    id: "flood-protection",
    title: "Flood Protection",
    desc: "Sump pump maintenance and battery backup systems to keep your basement dry year-round.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    price: "From $175",
    details: ["Sump Pump Install", "Battery Backups", "Ejector Pumps", "Check Valve Service"]
  },
  {
    id: "hvac-boilers",
    title: "Boilers & Radiators",
    desc: "Expert service for Chicago's classic steam and hot water heating systems and boilers.",
    icon: <Wind className="w-8 h-8 text-cyan-500" />,
    price: "From $150",
    details: ["Boiler Maintenance", "Radiator Repair", "Steam Valve Replacement", "Hydronic Heating"]
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Professional Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Callahan Pipe & Drain provides comprehensive, code-compliant plumbing solutions tailored to Chicago's unique architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {unifiedServices.map((service) => (
            <div key={service.id} className={`group bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full ${service.id === 'emergency' ? 'border-red-200 hover:border-red-400' : 'border-slate-100 hover:border-blue-200'}`}>
              {service.id === 'emergency' && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  Available Now · 24/7
                </div>
              )}
              <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl transition-colors ${service.id === 'emergency' ? 'bg-red-50 group-hover:bg-red-100' : 'bg-slate-50 group-hover:bg-blue-50'}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center justify-between border-t border-slate-50 pt-6 mt-auto">
                <span className="text-blue-600 font-bold">{service.price}</span>
                <Link 
                  to="/services" 
                  className="text-slate-900 font-bold flex items-center gap-1 group/btn hover:text-blue-600 transition-colors"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
