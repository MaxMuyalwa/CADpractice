import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Terms = () => {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="March 1, 2026">
      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">A. Subscription & Pricing</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Individual Annual Subscription:</strong> Billed as a single annual payment of $50/yr ($4.16/mo). This provides 12 months of access for one (1) user. We do not offer monthly billing options.</p>
          </div>
          <div>
            <p><strong>Institutional/Teacher Bulk Licenses:</strong> A minimum initial purchase of 11 licenses ($385.00) is required to activate a PAID Organizational Account. Additional licenses may be purchased for $35.00 per license. All licenses are valid for a 12-month term beginning on the date of the initial purchase. Any additional licenses purchased during the 12-month term will be prorated to align with the original expiration date. This ensures all licenses within an organization remain coterminous for simplified annual renewal.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">B. License Allocation</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Individual Plan:</strong> Licenses are non-transferable and tied to a single user account.</p>
          </div>
          <div>
            <p><strong>Institutional Plan:</strong> Licenses are "floating" until assigned to a student or educator via the Educator Dashboard. Licenses can be re-assigned at any point within the paid term.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">C. Billing & Payment</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Individual Plan:</strong> Payments must be made via Credit Card or Digital Wallet at the time of signup.</p>
          </div>
          <div>
            <p><strong>Institutional Plan:</strong> Schools may pay via Credit Card or Purchase Order (PO). Full access to the Educator Dashboard and licenses will be granted upon receipt of a valid PO or cleared payment.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">D. Intellectual Property & Usage</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Ownership:</strong> All CAD challenges, 2D drawings, 3D models, and the proprietary Mass-Tolerance Validation Logic are the exclusive property of CADPractice LLC. This includes the proprietary skill-mapping algorithms used to determine student proficiency. Access to the platform is a limited license to use, not a sale of content.</p>
          </div>
          <div>
            <p className="mb-4"><strong>Prohibited Actions:</strong> Users may not:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use automated systems (bots/scrapers) or manual methods (screenshots/redrawing) to harvest or store challenge data or dimensions for use outside the platform.</li>
              <li>Redistribute, "re-skin", or create derivative works of CADPractice challenges for use on competing platforms or private curriculum.</li>
              <li>Bypass, decompile, or reverse-engineer the tolerance validation logic or the skill-acquisition mapping.</li>
              <li>Share login credentials with unauthorized users. Licenses are seat-based and tied to the individual or school site specified at purchase.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">E. Data Privacy & Compliance</h3>
        <div className="space-y-6">
          <p><strong>FERPA:</strong> For Organizational Accounts, CADPractice LLC acts as a "School Official" with a legitimate educational interest under the Family Educational Rights and Privacy Act.</p>
          <p><strong>COPPA:</strong> We do not knowingly collect personal information from children under the age of 13.</p>
          <p><strong>Full Policy:</strong> All data practices are governed by our Student Data Privacy Policy.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-6 uppercase tracking-tight">F. Cancellation & Refund</h3>
        <div className="space-y-6">
          <div>
            <p><strong>Cancellation:</strong> A user with a student or educator role may delete their account by going to their user settings and selecting "Delete Account". Upon account deletion, all points, data, and records will be deleted. If the user has the educator/org owner role, they must transfer org owner permissions to another educator before they can delete their account. Otherwise, they can contact support at <a href="mailto:info@cadpractice.com" className="text-[#08CB00] hover:underline">info@cadpractice.com</a> to request account deletion.</p>
          </div>
          <div>
            <p><strong>Refund Policy:</strong> Due to the digital nature of our proprietary content, all sales are final.</p>
          </div>
        </div>
      </section>
      
      <p className="mt-16 text-[11px] font-black uppercase tracking-[0.2em] text-[#08CB00]">
        Effective as of March 1, 2026
      </p>
    </LegalLayout>
  );
};
