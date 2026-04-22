import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const EULA = () => {
  return (
    <LegalLayout title="End User License Agreement" lastUpdated="March 1, 2026">
      <div className="mb-12">
        <p>
          This End User License Agreement ("Agreement") is a binding legal contract between CADPractice LLC ("Licensor," "we," "us") and you, the user ("User," "you," or "Institution"). By accessing the platform, you agree to the following terms:
        </p>
      </div>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">0. Beta Disclaimer & "As-Is" Provision</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">0.1. Pre-Release Status</h4>
            <p>User acknowledges that the Platform is currently in "Beta" status and is undergoing final testing. The Services, including the mass-tolerance validation and skills acquisition mapping, are provided on an "AS IS" and "AS AVAILABLE" basis.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">0.2. Limitation of Liability</h4>
            <p>While CADPractice LLC strives for 100% accuracy, we do not warrant that the service will be uninterrupted or error-free. CADPractice LLC shall not be liable for any loss of data or instructional time during this Beta period.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">1. Scope of Service</h3>
        <p className="mb-6">CADPractice LLC provides a game-based, performance-driven environment for CAD skill development and instructional analysis. The platform offers five core functional pillars:</p>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">1.1. Curated Challenge Library</h4>
            <p>Access to a growing repository of high-quality, professionally drafted 2D technical drawings designed to solve the educator "content gap" and test specific modeling competencies.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">1.2. Proprietary Skills Acquisition Mapping</h4>
            <p>Each challenge is digitally mapped to specific CAD competencies. Upon successful completion of a challenge, the platform extrapolates and awards skill-specific points, building a dynamic skills matrix for the student.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">1.3. Instructional Analytics</h4>
            <p>An Educator Dashboard that provides real-time visibility into student progress. This includes tracking the number of attempts per challenge and total time-on-task, allowing educators to identify specific areas of student struggle.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">1.4. Automated Validation</h4>
            <p>A proprietary mass-tolerance validation engine that verifies 3D modeling accuracy. Users submit physical property data (such as mass or volume) for real-time comparison against solution ranges within pre-defined numerical tolerances.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">1.5. Student Engagement & Gamification</h4>
            <p>A competitive framework utilizing leaderboards, badges, and instant feedback designed to increase student motivation and "time-on-task".</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">2. Service Limitations & User Responsibilities</h3>
        <div className="space-y-4">
          <p><strong>Third-Party Software Required:</strong> You acknowledge that CADPractice LLC provides the training environment but does not provide the actual CAD software (e.g., SOLIDWORKS®, Autodesk Inventor®, Onshape®) required to complete the challenges. Users are responsible for obtaining their own valid software licenses from these third-party vendors.</p>
          <p><strong>Access Only:</strong> This is a license to access our hosted SaaS platform; it is not a sale of software. No code or software is "downloaded" or owned by the user.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">3. Restrictions on Use</h3>
        <p className="mb-4">You agree to use this for educational purposes and will not redistribute materials. You agree NOT to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Capture, record, or redistribute CADPractice LLC challenge drawings or proprietary prompt logic.</li>
          <li>Use any automated bot or "script" to submit answers or climb leaderboards.</li>
          <li>Create multiple accounts to manipulate classroom or global rankings.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">3. Digital Badging & Credentials</h3>
        <p>Badges earned on CADPractice LLC are educational milestones only. They are not official certifications from Dassault Systemes, Autodesk, Onshape, etc. CADPractice LLC is an independent training provider and is not affiliated with, or endorsed by, these trademark holders.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">4. Data Privacy (Student Records)</h3>
        <p>For institutional users, CADPractice LLC complies with standard student data privacy protections. We do not sell our data or share personal information to the public.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4 uppercase">A. FERPA Compliance (Family Educational Rights and Privacy Act)</h3>
        <p className="mb-4">CADPractice LLC acknowledges that for the purposes of this Agreement, it is designated as a "School Official" with a legitimate educational interest in the student data processed through the platform.</p>
        <div className="space-y-4">
          <p><strong>Data Ownership:</strong> All data generated by student accounts under an Educational Organization license remains the exclusive property of that Organization.</p>
          <p><strong>Performance Data as Educational Records:</strong> We recognize that Student Performance Data, including but not limited to challenge answer entry attempts, validation success rates, time-to-complete, and leaderboard rankings, constitutes a protected "Educational Record" under FERPA.</p>
          <p><strong>Limited Use:</strong> CADPractice LLC will only use Student Data and Performance Data for the purpose of fulfilling its duties under this agreement (providing the service and instructor analytics) and will not "mine" data for advertising, profile building, or marketing purposes.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4 uppercase">B. Age Requirements and COPPA Compliance Eligibility</h3>
        <p className="mb-4">CADPractice LLC is a professional training tool intended for users aged 13 and older. We do not knowingly collect personal information from children under the age of 13.</p>
        <div className="space-y-4">
          <p><strong>Age Gate:</strong> During registration, users must verify their age. If a potential user is under the age of 13, account creation will be prohibited.</p>
          <p><strong>Parental/Guardian Accounts:</strong> In the event that a student under 13 wishes to use the platform (e.g., for middle school enrichment), a parent or legal guardian must create the account in their own name and provide supervision. In such cases, the parent/guardian assumes full responsibility for compliance with these Terms.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4 uppercase">C. Data Security & Storage</h3>
        <div className="space-y-4">
          <p><strong>Encryption:</strong> All student data is encrypted in transit and at rest using industry-standard protocols (AES-256 and TLS).</p>
          <p><strong>Data Deletion:</strong> We retain student personal information only as long as an account is active. If an account remains inactive for 24 months, or upon a school's request, we will permanently delete or de-identify all student records in accordance with our Data Retention Policy.</p>
          <p><strong>The "Eraser" Rule:</strong> In compliance with 2026 laws, students (13+) or parents can delete their data by clicking the "Delete Account" button in their settings or by emailing us at <a href="mailto:info@cadpractice.com" className="text-[#08CB00] hover:underline">info@cadpractice.com</a>.</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4 uppercase">D. No Third-Party Sale of Data</h3>
        <p>CADPractice LLC strictly prohibits the sale, rental, or trade of student or teacher personal information to third parties.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">5. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, CADPractice LLC shall not be liable for any indirect, incidental, or consequential damages (including loss of data or profit) arising out of your use of the platform. In no event shall CADPractice LLC's total liability exceed the amount paid by you (or your Organization) for the service during the twelve (12) months preceding the claim.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">6. Disclaimer of Warranties</h3>
        <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. CADPractice LLC makes no warranties, expressed or implied, regarding the accuracy of automated answer validation or that the service will be uninterrupted or error-free. You acknowledge that validation results are based on predefined numerical tolerances and that CADPractice LLC is not responsible for discrepancies arising from third-party software calculations or rounding variations. Use of the platform is at the user's own risk.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">7. Termination</h3>
        <p>CADPractice LLC reserves the right to suspend or terminate accounts that violate these Terms. Upon termination of an Organizational account, we will provide a 30-day window for the Organization to request a final export of student progress data before permanent deletion.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">8. Indemnification</h3>
        <p>You agree to indemnify and hold harmless CADPractice LLC from any claims, damages, or legal fees resulting from your violation of these Terms or your misuse of the platform's features.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">9. Governing Law and Jurisdiction</h3>
        <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Pennsylvania, without regard to its conflict of laws principles. You agree that any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in Montgomery County, Pennsylvania, and you hereby consent to the personal jurisdiction of such courts.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-black dark:text-white mb-4">10. Modifications to this Agreement</h3>
        <div className="space-y-4">
          <p><strong>Right to Amend:</strong> CADPractice LLC reserves the right to modify or replace these Terms at any time. We will determine, at our sole discretion, what constitutes a "material change."</p>
          <p><strong>Notice of Changes:</strong> For material changes, we will provide an announcement on the platform dashboard or email the primary account holder.</p>
          <p><strong>Acceptance of Terms:</strong> By continuing to use the platform after revisions become effective, you agree to the revised terms. If you do not agree, you must stop using the service.</p>
        </div>
      </section>
      
      <p className="mt-16 text-[11px] font-black uppercase tracking-[0.2em] text-[#08CB00]">
        Effective as of March 1, 2026
      </p>
    </LegalLayout>
  );
};
