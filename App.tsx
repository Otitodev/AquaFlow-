
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <main className="overflow-hidden">
    <Hero />
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1000" 
              alt="Plumber at work in Chicago" 
              className="rounded-3xl shadow-2xl object-cover w-full aspect-video md:aspect-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Why Chicago Trusts <span className="text-blue-600">AquaFlow</span>
            </h2>
            <p className="text-lg text-slate-600">
              We've been serving the Windy City for over 15 years. From high-rise condos in the Loop to historic homes in Lincoln Park, we understand Chicago's unique plumbing architecture.
            </p>
            <ul className="space-y-4">
              {[
                "24/7 Emergency Dispatch",
                "Licensed, Bonded, and Insured",
                "Upfront Flat-Rate Pricing",
                "100% Satisfaction Guarantee"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all inline-block shadow-lg hover:shadow-xl hover:-translate-y-1">
                Schedule a Technician
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Services />
    <Testimonials />
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Plumbing Emergency?</h2>
        <p className="text-xl mb-10 opacity-90">We're available 24 hours a day, 7 days a week, including holidays.</p>
        <a href="tel:3125550199" className="group bg-white text-blue-600 px-10 py-5 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-4 mx-auto">
          <CheckCircle2 className="w-8 h-8 text-blue-600" /> (312) 555-0199
        </a>
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
