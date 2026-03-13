
import React from 'react';

const reviews = [
  {
    name: "Michael C.",
    neighborhood: "River North",
    service: "Emergency Burst Pipe",
    text: "Called at 11pm for a burst pipe in our condo. Tech arrived in under an hour, fixed the line, and cleaned up completely. Saved our floors. Will never call anyone else.",
    rating: 5,
    source: "Google"
  },
  {
    name: "Elena R.",
    neighborhood: "Logan Square",
    service: "Tankless Water Heater Install",
    text: "Best price in Chicago for a tankless water heater. They handled the permit, the installation, and even helped me get the ComEd rebate. Total pros.",
    rating: 5,
    source: "Google"
  },
  {
    name: "David S.",
    neighborhood: "Gold Coast",
    service: "Hydro-Jet Drain Cleaning",
    text: "Very thorough drain cleaning. They ran a camera first so I could see exactly what was going on. Clear explanation, fair price, zero mess left behind.",
    rating: 5,
    source: "Yelp"
  },
  {
    name: "Patricia W.",
    neighborhood: "Lincoln Park",
    service: "Sump Pump Replacement",
    text: "Our basement flooded twice before we found Callahan. They installed a new sump pump with a battery backup — haven't had a drop of water since. Worth every penny.",
    rating: 5,
    source: "Google"
  },
  {
    name: "James O.",
    neighborhood: "Wicker Park",
    service: "Main Water Line Repair",
    text: "Huge job — main water line under our 1920s two-flat. Callahan's crew was on-site by 8am, finished same day, and the city inspection passed without issue.",
    rating: 5,
    source: "Google"
  },
  {
    name: "Sofia M.",
    neighborhood: "Lakeview",
    service: "Water Heater & Boiler Check",
    text: "Needed a full plumbing inspection before buying my condo. The technician was thorough, honest about what needed attention now vs. later. I felt totally informed.",
    rating: 5,
    source: "Google"
  }
];

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Customer Reviews</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">What Your Neighbors Are Saying</h2>
          <p className="text-lg text-slate-500">2,500+ verified reviews · 4.9 average rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              {/* Stars */}
              <div className="flex text-yellow-400 gap-0.5 mb-3">
                {Array.from({ length: rev.rating }).map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">"{rev.text}"</p>

              {/* Reviewer */}
              <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                <div>
                  <p className="font-bold text-slate-900">{rev.name}</p>
                  <p className="text-sm text-slate-500">{rev.neighborhood} · {rev.service}</p>
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                  via {rev.source}
                </span>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-slate-100">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.95.09-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-slate-500 text-sm">
          <a href="https://www.google.com/search?q=Callahan+Pipe+%26+Drain+Chicago" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            Read all 2,500+ reviews on Google →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
