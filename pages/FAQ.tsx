
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

// Typed as React.FC to ensure reserved props like 'key' are handled correctly in TypeScript
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-none py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
      >
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600">{question}</h3>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you offer 24/7 emergency service in Chicago?",
      answer: "Yes! AquaFlow Plumbing provides 24-hour emergency plumbing services throughout the city and surrounding suburbs. Whether it's 2 AM on a Tuesday or Christmas morning, our dispatchers and master plumbers are on call."
    },
    {
      question: "How much does a typical service call cost?",
      answer: "Our diagnostic service call fee is $89, which is applied toward the total cost of any repair you choose to proceed with. We provide upfront, flat-rate pricing so you'll know exactly what the job costs before we start."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely. Every AquaFlow technician is fully licensed by the City of Chicago and the State of Illinois. We carry comprehensive liability and workers' compensation insurance for your total peace of mind."
    },
    {
      question: "How quickly can you respond to a burst pipe?",
      answer: "For active floods or burst pipes, we prioritize dispatch and typically arrive within 60 to 90 minutes anywhere in the Chicagoland area."
    },
    {
      question: "Do you work with historic homes in neighborhoods like Lincoln Park?",
      answer: "Yes, we specialize in Chicago's unique vintage architecture. We understand the complexities of clay pipes, radiator heat systems, and antique fixtures commonly found in older Chicago residences."
    },
    {
      question: "Can I get a rough estimate before booking?",
      answer: "Yes! You can use our 'AquaBot' assistant on the website for a preliminary diagnostic and estimate. However, a firm quote requires an on-site physical inspection to account for all variables."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full mb-8">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-bold text-xs uppercase tracking-widest">Common Questions</span>
          </div>
          <h1 className="text-5xl font-black mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about AquaFlow services, pricing, and our commitment to Chicago homeowners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>

          <div className="mt-20 bg-blue-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h4>
              <p className="text-slate-600">Give us a call. Our team is happy to help you over the phone.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm">
                Contact Us
              </Link>
              <a href="tel:3125550199" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all">
                <PhoneCall className="w-5 h-5" /> (312) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
