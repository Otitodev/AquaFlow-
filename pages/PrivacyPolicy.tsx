
import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Privacy Policy | Callahan Pipe & Drain"
        description="Privacy policy for Callahan Pipe & Drain. Learn how we collect, use, and protect your personal information."
      />

      <section className="bg-slate-900 py-16 text-white text-center px-6">
        <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Last updated: January 1, 2025</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-slate-600 leading-relaxed mb-10">
            Callahan Pipe & Drain ("we," "us," or "our") is committed to protecting your privacy. This policy describes what information we collect, how we use it, and your rights regarding that information.
          </p>

          <Section title="1. Information We Collect">
            <p>When you use our online booking form or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>ZIP code and service address</li>
              <li>Description of your plumbing issue</li>
            </ul>
            <p>We do not collect payment card information through this website. All payment is processed in person at time of service.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dispatch a licensed technician to your address</li>
              <li>Confirm your appointment via SMS or phone call</li>
              <li>Follow up on completed service for quality assurance</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="3. Cookies & Tracking">
            <p>This website does not use advertising trackers or third-party analytics cookies. No persistent tracking cookies are set on your device by Callahan Pipe & Drain.</p>
          </Section>

          <Section title="4. Data Retention">
            <p>We retain service records (name, address, work performed) for up to 7 years to honor our warranty obligations and comply with Illinois contractor record-keeping requirements. Booking inquiry data that does not result in a service visit is deleted within 90 days.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We take reasonable administrative and technical measures to protect your information from unauthorized access, disclosure, or loss. However, no data transmission over the internet can be guaranteed to be 100% secure.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You may request access to, correction of, or deletion of your personal data at any time. To submit a request, contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:service@callahanpipeanddrain.com" className="text-blue-600 hover:underline">service@callahanpipeanddrain.com</a><br />
              <strong>Phone:</strong> <a href="tel:3125550199" className="text-blue-600 hover:underline">(312) 555-0199</a><br />
              <strong>Mail:</strong> Callahan Pipe & Drain, 123 W Wacker Dr Suite 500, Chicago, IL 60601
            </p>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>We may update this policy from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of our website after an update constitutes acceptance of the revised policy.</p>
          </Section>

          <div className="border-t border-slate-100 pt-8 mt-8">
            <Link to="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
