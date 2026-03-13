
import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Terms of Service | Callahan Pipe & Drain"
        description="Terms of service for Callahan Pipe & Drain. Read our service agreement, pricing policy, warranty terms, and liability limitations."
      />

      <section className="bg-slate-900 py-16 text-white text-center px-6">
        <h1 className="text-4xl font-black mb-3">Terms of Service</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Last updated: January 1, 2025</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-slate-600 leading-relaxed mb-10">
            By scheduling or receiving services from Callahan Pipe & Drain ("Company"), you ("Customer") agree to the following terms. Please read them carefully before booking.
          </p>

          <Section title="1. Service Agreement">
            <p>Callahan Pipe & Drain agrees to provide licensed plumbing services at the address specified by the Customer. All technicians are licensed under the State of Illinois (IL Lic #055-123456) and fully insured.</p>
            <p>Scheduling a service appointment does not guarantee same-day service. Arrival windows are estimates only and may vary due to traffic, prior jobs, or emergency dispatch priority.</p>
          </Section>

          <Section title="2. Diagnostic Fee">
            <p>A diagnostic service call fee of <strong>$89</strong> applies to all non-emergency visits. This fee covers the technician's travel, on-site assessment, and written quote.</p>
            <p>The $89 diagnostic fee is <strong>fully credited toward the cost of any repair</strong> if the Customer authorizes work to proceed at the time of the visit. If the Customer declines the quoted repair, the diagnostic fee is due at time of visit.</p>
          </Section>

          <Section title="3. Flat-Rate Pricing">
            <p>All repair and installation work is quoted at a flat rate prior to commencement. The Customer must authorize the quoted price in writing (or verbally, which may be recorded) before work begins. The final invoice will not exceed the authorized quote unless the Customer approves additional work discovered during the repair.</p>
            <p>We do not charge by the hour. There are no overtime or after-hours surcharges for standard service calls. Emergency dispatch calls (same-day, nights, and weekends) are quoted at emergency rates disclosed before dispatch.</p>
          </Section>

          <Section title="4. Payment">
            <p>Payment is due in full upon completion of service. We accept cash, check, and all major credit cards. Financing options may be available for projects over $1,000 — ask your technician for details.</p>
            <p>Unpaid invoices are subject to a 1.5% monthly finance charge after 30 days. The Customer is responsible for all reasonable costs of collection, including attorney's fees, in the event of non-payment.</p>
          </Section>

          <Section title="5. Warranty">
            <p>Callahan Pipe & Drain warrants all parts and labor for a minimum of <strong>one (1) year</strong> from the date of service. If a warranted repair fails within that period, we will return to remedy the issue at no charge.</p>
            <p>The warranty does not cover:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Damage caused by freezing, flooding, or acts of nature</li>
              <li>Work performed or modified by a third party after our service</li>
              <li>Normal wear and tear on fixtures and parts beyond our installation</li>
            </ul>
          </Section>

          <Section title="6. Customer Responsibilities">
            <p>The Customer must provide safe, clear access to the work area. Any delay caused by inaccessible areas or undisclosed conditions (e.g., no water shut-off, prior code violations) may result in additional charges disclosed before proceeding.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the fullest extent permitted by Illinois law, Callahan Pipe & Drain's total liability for any claim arising from a service visit shall not exceed the amount paid by the Customer for that specific service visit.</p>
            <p>We are not liable for indirect, incidental, or consequential damages including but not limited to lost income, property damage unrelated to the work performed, or mold resulting from pre-existing conditions.</p>
          </Section>

          <Section title="8. Governing Law">
            <p>These terms are governed by the laws of the State of Illinois. Any disputes shall be resolved in Cook County, Illinois.</p>
          </Section>

          <Section title="9. Contact">
            <p>Questions about these terms? Contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:service@callahanpipeanddrain.com" className="text-blue-600 hover:underline">service@callahanpipeanddrain.com</a><br />
              <strong>Phone:</strong> <a href="tel:3125550199" className="text-blue-600 hover:underline">(312) 555-0199</a><br />
              <strong>Mail:</strong> Callahan Pipe & Drain, 123 W Wacker Dr Suite 500, Chicago, IL 60601
            </p>
          </Section>

          <div className="border-t border-slate-100 pt-8 mt-8">
            <Link to="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
