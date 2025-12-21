
import React from 'react';
import { Users, History, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white text-center px-6">
        <h1 className="text-5xl font-black mb-6">Our Chicago Story</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          From a single truck in Lincoln Park to a fleet serving the entire Chicagoland area, our mission has always been clear: reliability above all.
        </p>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1000" 
                alt="Vintage Chicago" 
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <History className="w-5 h-5" /> Founded in 2008
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Over a Decade of Excellence</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AquaFlow Plumbing started with Joe Rossi and his vision for a transparent, customer-first plumbing service. Having worked in the industry for 20 years, Joe saw how often Chicago homeowners were overcharged for simple fixes.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we employ over 25 licensed master plumbers who share that same dedication to integrity and craftsmanship. We don't just fix pipes; we protect your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-blue-600" />, stat: "25+", label: "Master Plumbers" },
              { icon: <Award className="w-8 h-8 text-blue-600" />, stat: "15k+", label: "Projects Completed" },
              { icon: <Heart className="w-8 h-8 text-blue-600" />, stat: "100%", label: "Satisfaction Guaranteed" },
              { icon: <Award className="w-8 h-8 text-blue-600" />, stat: "A+", label: "BBB Rating" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <div className="text-3xl font-black text-slate-900 mb-2">{item.stat}</div>
                <div className="text-slate-500 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-16">Meet the Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Joe Rossi", role: "Founder & Master Plumber", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
              { name: "Sarah Miller", role: "Head of Residential Services", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Marcus Williams", role: "Emergency Response Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
