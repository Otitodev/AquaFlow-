
import React, { useState } from 'react';
import { BookingStatus } from '../types';
import { Check, MapPin, Clock, ArrowRight } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Plumbing',
    description: '',
    zip: ''
  });

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
      <div className="max-w-xl mx-auto my-20 bg-white p-12 rounded-3xl shadow-2xl text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black mb-4">Service Scheduled!</h2>
        <p className="text-slate-600 mb-8">We've received your request. A dispatcher will call you within 15 minutes to confirm the arrival time.</p>
        <button onClick={() => setStatus(BookingStatus.IDLE)} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">Done</button>
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
