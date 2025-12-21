
import React from 'react';

const reviews = [
  {
    name: "Michael Chen",
    location: "River North",
    text: "AquaFlow responded to my midnight emergency within 30 minutes. The plumber was professional and clearly explained the fix.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    location: "Logan Square",
    text: "Best price I could find in Chicago for a tankless water heater installation. They even helped me with the utility rebate paperwork!",
    rating: 5
  },
  {
    name: "David Smith",
    location: "Gold Coast",
    text: "Very thorough drain cleaning service. They used a camera to show me the blockage was clear. Highly recommend their smart estimation tool too.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16">What Your Neighbors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: rev.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{rev.name}</h4>
                <p className="text-sm text-slate-500">{rev.location}, IL</p>
              </div>
              <div className="absolute top-8 right-8 text-blue-100 opacity-20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.0523 12.595 17.0174 11.9073 17.7071L10.5 19.1144L11.9144 20.5287C13.2541 19.1891 14.017 17.3464 14.017 15.3086L14.017 21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 16.0523 3.59502 17.0174 2.9073 17.7071L1.5 19.1144L2.91442 20.5287C4.25406 19.1891 5.017 17.3464 5.017 15.3086L5.017 21Z"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
