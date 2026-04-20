import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <main className="pt-20 md:pt-24 lg:pt-32 pb-20 px-6 md:px-12 relative z-10 min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {/* Page Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black tracking-tight"
        >
          About Us
        </motion.h1>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-[#08CB00] text-3xl md:text-4xl font-black uppercase tracking-tight">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Our mission is to transform CAD education through game-based learning and actionable analytics, providing educators with the tools to keep students inspired and the insights to support their individual growth.
          </p>
        </motion.section>

        {/* Our Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-[#08CB00] text-3xl md:text-4xl font-black uppercase tracking-tight">Our Vision</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Our vision is to become the global benchmark for student engagement in technical education, setting a new standard where progress is measured not just by the final answer, but by the persistence and skills demonstrated along the journey.
          </p>
        </motion.section>

        {/* Our History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-[#08CB00] text-3xl md:text-4xl font-black uppercase tracking-tight">
            Our History: From Global Tournaments to the Classroom
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">The Foundation of TooTallToby</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Before CADpractice, we founded www.tootalltoby.com - a global hub for 3D CAD enthusiasts. We wanted to build a CAD-agnostic community where people could connect, learn, and test their skills through Toby's legendary 3D CAD challenges and our international speed-modeling tournaments. Today, TTT is the gold standard for CAD competitions worldwide.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">The Educational Pivot</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                As our community grew, we noticed something inspiring: Students and educators were interested in our platform. They loved the energy and the challenge, but we realized our platform didn't always fit the unique needs of a school environment. Educators needed a way to manage progress, and districts required strict adherence to data privacy and security standards.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">A Creative Solution for Modern Educators</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We saw the struggle firsthand - teachers were spending hours searching for quality material and fighting an uphill battle to keep students engaged. We decided to build a solution specifically for the classroom.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                CADpractice takes the "Secret Sauce" of Too Tall Toby's Premium Practice Models - the excitement, the instant validation, and the competitive spirit - and wraps it in a secure, educator-led platform. We've replaced the "grading struggle" with a creative ecosystem that keeps students hooked and gives teachers their time back.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Meet the Founders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-[#08CB00] text-3xl md:text-4xl font-black uppercase tracking-tight">Meet the Founders</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Vicki Chong Schnaars | CEO & Co-Founder</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Vicki leads the strategic vision and operational architecture for CADpractice. As a co-founder of both Too Tall Toby and CADpractice, she has been instrumental in scaling the brand from a community of enthusiasts to a global educational standard.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With 11 years of experience in the bio-tech industry - specializing in software Quality Control and managing audit-ready testing teams - Vicki brings a high-stakes precision to the platform. Her background ensures that the CADpractice platform meets the rigorous data integrity and security standards required by modern educational institutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Toby Schnaars | Chief Architect & Co-Founder</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Toby is the creative force and technical voice of CADpractice. A 30-year veteran and founder of Too Tall Toby, Toby designs the challenges and engages with the global community to ensure the platform remains the gold standard for CAD engagement.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                His deep industry roots include many years working with top SOLIDWORKS resellers followed by SOLIDWORKS (Dassault Systemes). This journey from the front lines of CAD support to global leadership allowed him to see firsthand what was missing in CAD education. Today, he uses 30 years of experience to architect the challenges that prepare students for the demands of the modern workforce.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In addition to architecturing challenges for CADpractice, Toby offers in-depth instruction through <a href="https://tootalltoby.thinkific.com/" target="_blank" rel="noopener noreferrer" className="text-[#08CB00] font-bold hover:underline">Thinkific Training</a>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-10 text-center space-y-2"
        >
          <p className="text-2xl md:text-3xl italic font-medium text-gray-900 dark:text-white">
            "I've been a teacher for 30 years and I've never seen a better platform."
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            -Chris Odom, STEM Educator and former Rocket Scientist
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-10 text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Experience a better way to teach, practice, and learn.
          </h2>
          <button className="px-8 py-3 lg:px-10 lg:py-4 bg-[#08CB00] text-white dark:text-black font-black uppercase tracking-widest rounded-md hover:bg-[#0aed00] transition-all transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </main>
  );
};
