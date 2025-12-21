
import React, { useState } from 'react';
import { BookingStatus } from '../types';
import { Check, MapPin, Clock, ArrowRight, Calendar, Wrench } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Plumbing Repair',
    description: '',
    zip: ''
  });

  const getArrivalWindow = (zip: string) => {
    if (zip.startsWith('606')) return "45 - 75 minutes";
    if (zip.startsWith('60')) return "60 - 90 minutes";
    return "90 - 120 minutes";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(BookingStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setStatus(BookingStatus.SUCCESS);
    }, 1500);
  };

  if (status === BookingStatus.SUCCESS) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-emerald-500 p-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black mb-2">Booking Confirmed!</h2>
            <p className="opacity-90">Our dispatcher is currently assigning your technician.</p>
          </div>
          
          <div className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 text-blue-600 mb-2">
                  <Wrench className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-xs">Service Type</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{formData.service}</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 text-blue-600 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-xs">Estimated Arrival</span>
                </div>
                <p className="text-xl font-bold text-blue-700">{getArrivalWindow(formData.zip)}</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                Next Steps
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <p className="text-slate-600 text-sm">You will receive an SMS confirmation at <span className="font-bold text-slate-900">{formData.phone}</span> shortly.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <p className="text-slate-600 text-sm">Our technician will call you when they are 10 minutes away from your location.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <p className="text-slate-600 text-sm">Standard diagnostic fee applies if work is not performed today.</p>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => setStatus(BookingStatus.IDLE)} 
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              Return to Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="md:w-2/5 bg-blue-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-6">Schedule Your Expert Plumber</h2>
            <p className="text-blue-100 mb-8">Quick service, transparent pricing, and professional results guaranteed.</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Service Area</h4>
                  <p className="text-blue-200 text-sm">All of Chicago & Suburbs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Fast Arrival</h4>
                  <p className="text-blue-200 text-sm">60-90 min response time</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white/10 p-4 rounded-2xl text-sm italic">
            "AquaFlow fixed my burst pipe in 40 minutes at 2 AM on a Sunday. Lifesavers!" - Sarah J., West Loop
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="md:w-3/5 p-10">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="(312) 555-0100"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-bold text-slate-700 mb-2">Chicago Zip Code</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="60601"
                value={formData.zip}
                onChange={e => setFormData({...formData, zip: e.target.value})}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option>General Plumbing Repair</option>
                <option>Drain Cleaning</option>
                <option>Emergency Flood</option>
                <option>Water Heater Service</option>
                <option>Sewer Line Repair</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about the issue</label>
              <textarea 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all h-32"
                placeholder="I noticed a leak under the kitchen sink..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>
          <button 
            type="submit" 
            disabled={status === BookingStatus.SUBMITTING}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${status === BookingStatus.SUBMITTING ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl active:scale-95'}`}
          >
            {status === BookingStatus.SUBMITTING ? 'Requesting Dispatch...' : 'Schedule Service Now'} <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
