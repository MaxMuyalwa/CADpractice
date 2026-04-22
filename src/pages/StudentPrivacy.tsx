import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const StudentPrivacy = () => {
  return (
    <LegalLayout title="Student Data Privacy Policy" lastUpdated="February 2026">
      <div className="mb-12">
        <p className="text-[10px] font-black text-[#08CB00] uppercase tracking-widest mb-4">
          Effective Date: March 1, 2026
        </p>
        <p>
          At CADpractice, we believe that student privacy is a fundamental right. This policy explains how we collect, protect, and use data for students using our platform through a school or individual account.
        </p>
      </div>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">1. Our Privacy Commitments</h3>
        <ul className="space-y-3 font-bold text-gray-600 dark:text-gray-400 list-none pl-0">
          <li className="flex items-start gap-3">
            <span className="text-[#08CB00] mt-1">•</span>
            <span>We do not sell student data. Not now, not ever.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#08CB00] mt-1">•</span>
            <span>We do not use student data for targeted advertising. Your data is for learning, not for selling ads.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#08CB00] mt-1">•</span>
            <span>We do not build commercial profiles of students.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#08CB00] mt-1">•</span>
            <span>You own your data. Schools and parents can request deletion at any time.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">2. What Information We Collect</h3>
        <p className="mb-6">We only collect the minimum amount of data necessary to provide our educational services.</p>
        
        <div className="overflow-x-auto border border-gray-100 dark:border-white/10 rounded-xl mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5 font-black text-[10px] uppercase tracking-widest text-[#08CB00]">
                <th className="p-4 border-b border-gray-100 dark:border-white/10 w-1/4">Data Category</th>
                <th className="p-4 border-b border-gray-100 dark:border-white/10 w-1/3">Purpose</th>
                <th className="p-4 border-b border-gray-100 dark:border-white/10">Examples</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-gray-600 dark:text-gray-400">
              <tr>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 text-gray-900 dark:text-white">Account Info</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10">To create and secure your profile.</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 italic">Full name, email address</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 text-gray-900 dark:text-white">School Context</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10">To link you to the correct class.</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 italic">Class Code, organization name, classroom name</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 text-gray-900 dark:text-white">Activity Data</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10">To track progress and show achievements.</td>
                <td className="p-4 border-b border-gray-100 dark:border-white/10 italic">Quiz scores, time spent on challenges, completed tasks</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-900 dark:text-white">Technical Data</td>
                <td className="p-4">To keep our site secure and to ensure the site works on your device.</td>
                <td className="p-4 italic">IP address, browser type, device type</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">3. How We Use and Share Data</h3>
        <p className="mb-6">We use student data strictly for educational purposes. We only share data with "Sub processors" (partners) who help us run our site (like our cloud hosting provider).</p>
        
        <h4 className="font-black text-xs uppercase tracking-widest text-gray-900 dark:text-white mb-4">2026 Third-Party Disclosure</h4>
        <div className="space-y-4">
          <p><strong>Hosting:</strong> AWS for secure data storage.</p>
          <p><strong>Payments:</strong> Stripe for secure billing.</p>
          <p><strong>Communication & Productivity:</strong> Google Workspace for business communication, customer support, and administrative email.</p>
          <p><strong>Automated Notifications:</strong> Mailgun for delivery of transactional emails, such as password resets.</p>
          <p><strong>Technical Maintenance:</strong> Hytel for software developers and system administrators who assist in website development, bug fixing, and platform maintenance.</p>
          <p><strong>Educational Oversight:</strong> Student performance metrics (validation scores and times) are shared exclusively with the verified Educator or School Organization linked to the student's account.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">4. Compliance (FERPA & COPPA)</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Family Educational Rights and Privacy Act (FERPA)</h4>
            <p>We operate as a "School Official" under FERPA. This means we are under the direct control of your school or district regarding the use of education records.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Children's Online Privacy Protection Act (COPPA)</h4>
            <p className="mb-4">CADpractice is a professional training tool intended for users aged 13 and older. We do not knowingly collect personal information from children under the age of 13. If we learn we have collected data from a child under 13 without consent, we will delete it immediately.</p>
            <p>In the event that a student under 13 wishes to use the platform (e.g., for middle school enrichment), a parent or legal guardian must create the account in their own name and provide supervision. In such cases, the parent/guardian assumes full responsibility for compliance with these Terms.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">5. Security & Data Retention</h3>
        <div className="space-y-4">
          <p><strong>Encryption:</strong> All data is encrypted at rest (AES-256) and in transit (TLS).</p>
          <p><strong>Retention:</strong> We retain student personal information only as long as an account is active. If an account remains inactive for 24 months, or upon a school's request, we will permanently delete or de-identify all student records in accordance with our Data Retention Policy.</p>
          <p><strong>The "Eraser" Rule:</strong> In compliance with 2026 laws, students (13+) or parents can delete their data by clicking the "Delete Account" button in their settings or by emailing us at <a href="mailto:info@cadpractice.com" className="text-[#08CB00] hover:underline">info@cadpractice.com</a>.</p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">6. Your Rights</h3>
        <p className="mb-4">Parents and students have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 font-bold text-gray-600 dark:text-gray-400">
          <li>Review the student's personal information.</li>
          <li>Correct any errors in the data.</li>
          <li>Refuse further collection or use of data.</li>
          <li>Delete the student's account.</li>
        </ul>
      </section>

      <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
        <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-4">Data Privacy Inquiries</h3>
        <p className="mb-6">If you have questions about this policy, please reach out to us:</p>
        <div className="space-y-2 text-sm font-bold text-gray-600 dark:text-gray-400">
          <p><span className="text-gray-900 dark:text-white font-black uppercase text-[10px] tracking-widest mr-2">Name:</span> Vicki Schnaars</p>
          <p><span className="text-gray-900 dark:text-white font-black uppercase text-[10px] tracking-widest mr-2">Email:</span> <a href="mailto:info@cadpractice.com" className="text-[#08CB00] hover:underline">info@cadpractice.com</a></p>
          <p><span className="text-gray-900 dark:text-white font-black uppercase text-[10px] tracking-widest mr-2">Address:</span> #1033 1210 North Bethlehem Pike, STE B-8, North Wales, PA 19454</p>
        </div>
      </div>
    </LegalLayout>
  );
};
