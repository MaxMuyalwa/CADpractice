import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 2026">
      <div className="mb-12">
        <p className="text-[10px] font-black text-[#08CB00] uppercase tracking-widest mb-4">
          Effective Date: March 1, 2026
        </p>
        <p>
          CADPractice LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and disclose information when you visit our website and use our CAD skill development platform.
        </p>
      </div>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">1. Information We Collect</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Account Information:</strong> When you create an account, we collect your name, email address, country, CAD software used.</p>
          </div>
          <div>
            <p><strong>Payment Information:</strong> Payments are processed through Stripe, QuickBooks, and Blue Vine. We do not store your credit card details on our servers. Stripe provides us with a "token" and the last four digits of the card for transaction records.</p>
          </div>
          <div>
            <p><strong>Performance Data:</strong> We collect data related to your use of the platform, including challenge entry attempts, challenge success rates, and time-to-complete.</p>
          </div>
          <div>
            <p><strong>Usage Data:</strong> We collect technical info such as IP addresses, browser types, and pages visited to ensure the platform remains secure and functional.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">2. How We Use Your Information</h3>
        <p className="mb-4">We use the collected data to:</p>
        <ul className="list-disc pl-6 space-y-2 font-bold text-gray-600 dark:text-gray-400">
          <li>Provide and maintain the CADPractice platform.</li>
          <li>Obfuscate usernames.</li>
          <li>Display rankings on classroom, organization, and/or global leaderboards.</li>
          <li>Provide instructors with analytics on student progress.</li>
          <li>Communicate updates, support responses, and (for non-student users) occasional platform news.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">3. Cookies and Tracking</h3>
        <p>We use essential cookies to keep you logged in and to remember your preferences. We do not use third-party advertising cookies to track your behavior on other websites.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">4. Third-Party Service Providers</h3>
        <p className="mb-6">We share data with trusted "sub-processors" only to provide the service. These include:</p>
        <div className="space-y-4">
          <p><strong>Hosting:</strong> AWS for secure data storage.</p>
          <p><strong>Payments:</strong> Stripe for secure billing.</p>
          <p><strong>Communication & Productivity:</strong> Google Workspace for business communication, customer support, and administrative email.</p>
          <p><strong>Automated Notifications:</strong> Mailgun for delivery of transactional emails, such as password resets.</p>
          <p><strong>Technical Maintenance:</strong> Hytel for software developers and system administrators who assist in website development, bug fixing, and platform maintenance.</p>
          <p><strong>Educational Oversight:</strong> Student performance metrics (validation scores and times) are shared exclusively with the verified Educator or School Organization linked to the student's account.</p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">5. Data Security</h3>
        <p>All data is encrypted in transit and at rest using AES-256 and TLS encryption. We implement strict access controls to ensure that only authorized personnel can access sensitive information.</p>
      </section>
      
      <p className="mt-16 text-[11px] font-black uppercase tracking-[0.2em] text-[#08CB00]">
        Effective as of March 1, 2026
      </p>
    </LegalLayout>
  );
};
