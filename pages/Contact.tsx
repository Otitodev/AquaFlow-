
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Need a repair or have a question? Our Chicago-based dispatch team is standing by.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-blue-200 shrink-0" />
                    <div>
                      <p className="font-bold">Headquarters</p>
                      <p className="text-blue-100 opacity-80">123 W Wacker Dr, Suite 500<br />Chicago, IL 60601</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-blue-200 shrink-0" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-blue-100 opacity-80">(312) 555-0199</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-blue-200 shrink-0" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-blue-100 opacity-80">service@aquaflow.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-blue-200 shrink-0" />
                    <div>
                      <p className="font-bold">Operating Hours</p>
                      <p className="text-blue-100 opacity-80">Open 24/7 for Emergencies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <MessageSquare className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900">Immediate Support</h4>
                </div>
                <p className="text-slate-600 text-sm mb-6">Use our AI assistant in the bottom right corner for instant diagnostics and quick estimates.</p>
                <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                  Open Chat
                </button>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Smith" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="General Inquiry" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-40" placeholder="How can we help you today?"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl w-full md:w-auto">
                      Submit Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
