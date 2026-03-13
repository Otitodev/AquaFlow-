
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import PageMeta from './components/PageMeta';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import LocationPage from './pages/locations/LocationPage';
import LocationsIndex from './pages/locations/LocationsIndex';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { CheckCircle2, Star, ShieldCheck, Clock, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustBar: React.FC = () => (
  <div className="bg-blue-900 text-white py-5 border-b border-blue-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center gap-1">
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-sm font-bold">4.9 / 5 Stars</p>
          <p className="text-xs text-blue-300">2,500+ Google Reviews</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ShieldCheck className="w-6 h-6 text-orange-400" />
          <p className="text-sm font-bold">Licensed & Insured</p>
          <p className="text-xs text-blue-300">IL Lic #055-123456</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Clock className="w-6 h-6 text-orange-400" />
          <p className="text-sm font-bold">24/7 Emergency</p>
          <p className="text-xs text-blue-300">Avg. response 47 min</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Award className="w-6 h-6 text-orange-400" />
          <p className="text-sm font-bold">Est. 2008</p>
          <p className="text-xs text-blue-300">15+ Years in Chicago</p>
        </div>
      </div>
    </div>
  </div>
);

const stats = [
  { value: '15+', label: 'Years Serving Chicago' },
  { value: '12,000+', label: 'Jobs Completed' },
  { value: '47 min', label: 'Avg. Response Time' },
  { value: '100%', label: 'Satisfaction Guarantee' },
];

const Home: React.FC = () => (
  <>
    <PageMeta
      title="Callahan Pipe & Drain | Chicago Plumber — 24/7 Emergency Service"
      description="Licensed Chicago plumber available 24/7. Flat-rate pricing, 2,500+ 5-star reviews. Serving Lincoln Park, Wicker Park, Logan Square & all Chicago neighborhoods. Call (312) 555-0199."
    />
    <main className="overflow-hidden">
      <Hero />
      <TrustBar />

      {/* Why Chicago Trusts Callahan */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* CSS stats panel — no image dependency */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-blue-900 rounded-3xl p-8 grid grid-cols-2 gap-4" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}>
                {stats.map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                    <p className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{s.value}</p>
                    <p className="text-sm text-blue-200 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">Why Choose Callahan</p>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Why Chicago Trusts <span className="text-blue-600">Callahan</span>
              </h2>
              <p className="text-lg text-slate-600">
                We've been serving the Windy City for over 15 years. From high-rise condos in the Loop to historic homes in Lincoln Park, we understand Chicago's unique plumbing challenges.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Emergency Dispatch — same-day guarantee",
                  "Licensed, Bonded & Insured (IL Lic #055-123456)",
                  "Upfront Flat-Rate Pricing — no hourly surprises",
                  "100% Satisfaction Guarantee or we come back free"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/book" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Estimate
                </Link>
                <a href="tel:3125550199" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all">
                  <Phone className="w-4 h-4" /> (312) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      {/* Emergency CTA */}
      <section className="py-20 bg-blue-900 text-white" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">Available 24/7 · 365 Days a Year</p>
          <h2 className="text-4xl font-bold mb-4">Plumbing Emergency?</h2>
          <p className="text-xl mb-10 text-blue-200 max-w-xl mx-auto">Around the clock, including weekends and holidays. Average on-site response: 47 minutes.</p>
          <a href="tel:3125550199" className="bg-white text-blue-900 px-10 py-5 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-4 mx-auto">
            <Phone className="w-7 h-7 text-orange-500" /> (312) 555-0199
          </a>
        </div>
      </section>
    </main>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/locations" element={<LocationsIndex />} />
            <Route path="/locations/:slug" element={<LocationPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
