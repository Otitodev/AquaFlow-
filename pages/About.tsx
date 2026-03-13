
import React from 'react';
import { Users, History, Award, Heart } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <PageMeta
        title="About Us | Callahan Pipe & Drain Chicago Plumber"
        description="Meet the Callahan team — Chicago's trusted plumbers since 2008. Licensed, insured, and proud to serve every Chicago neighborhood. 25+ master plumbers, 15k+ jobs completed."
      />
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
              <div className="bg-blue-900 rounded-3xl p-10 flex flex-col justify-between gap-8 min-h-[360px]" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}>
                <div>
                  <p className="text-7xl font-black text-orange-400 leading-none">2008</p>
                  <p className="text-blue-300 text-lg mt-2">Est. in Chicago, IL</p>
                </div>
                <div className="space-y-4">
                  {[
                    { year: '2008', text: 'Founded by Joe Callahan with one truck' },
                    { year: '2013', text: 'Expanded to 10 licensed master plumbers' },
                    { year: '2018', text: 'Opened commercial division for Loop high-rises' },
                    { year: '2024', text: '25+ plumbers, 12,000+ completed jobs' },
                  ].map(m => (
                    <div key={m.year} className="flex items-start gap-4">
                      <span className="text-orange-400 font-bold text-sm w-10 shrink-0">{m.year}</span>
                      <span className="text-blue-200 text-sm">{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <History className="w-5 h-5" /> Founded in 2008
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Over a Decade of Excellence</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Callahan Pipe & Drain started with Joe Callahan and his vision for a transparent, customer-first plumbing service. Having worked in the industry for 20 years, Joe saw how often Chicago homeowners were overcharged for simple fixes.
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
              { name: "Joe Rossi", initials: "JR", role: "Founder & Master Plumber", from: 'from-blue-800', to: 'to-blue-950' },
              { name: "Sarah Miller", initials: "SM", role: "Head of Residential Services", from: 'from-slate-700', to: 'to-slate-900' },
              { name: "Marcus Williams", initials: "MW", role: "Emergency Response Lead", from: 'from-orange-700', to: 'to-orange-900' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className={`relative overflow-hidden rounded-3xl mb-6 w-full h-80 bg-gradient-to-br ${member.from} ${member.to} flex items-center justify-center`}>
                  <span className="text-8xl font-black text-white/20 select-none">{member.initials}</span>
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
