import React, { useState } from 'react';
import { ChevronDown, BookOpen, CheckCircle2, ShieldCheck, Lock, BarChart3 } from 'lucide-react';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does CAD PRACTICE have curriculum resources?",
      a: "Yes, we have standard-aligned modules spanning all core CAD competencies that plug seamlessly into your existing curriculum.",
      icon: <BookOpen className="w-5 h-5 text-neu-green" />
    },
    {
      q: "Can I customize my tests?",
      a: "Yes, CAD PRACTICE allows for deep customization. You can tailor assessments to match your specific syllabus and target the exact skills you want to test.",
      icon: <CheckCircle2 className="w-5 h-5 text-neu-green" />
    },
    {
      q: "What is the Money Back Guarantee?",
      a: "We offer a 100% exam pass money-back guarantee. If your students complete our required modules and do not pass their official certification exams, we will refund your licensing costs.",
      icon: <ShieldCheck className="w-5 h-5 text-neu-green" />
    },
    {
      q: "Is my student data secure?",
      a: "Absolutely. We strictly adhere to student data privacy regulations (FERPA/COPPA compliant) to ensure all student information is encrypted, safe, and private.",
      icon: <Lock className="w-5 h-5 text-neu-green" />
    },
    {
      q: "Is there an online dashboard to track my students?",
      a: "Yes! We offer a free online dashboard to manage and evaluate the progress of up to 10 students. For larger classes, our premium tiers support anywhere from 10 to 10,000+ students.",
      icon: <BarChart3 className="w-5 h-5 text-neu-green" />
    }
  ];

  return (
    <section className="relative z-10 py-24 bg-background transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-neu-text-primary">Educator FAQs</h2>
          <p className="text-neu-text-secondary">Everything you need to know about integrating CAD Practice into your classroom.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-background rounded-2xl transition-all duration-300 ${
                openFaq === index 
                ? 'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]' 
                : 'shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
              }`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-all ${
                    openFaq === index 
                    ? 'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-1px_-1px_2px_var(--shadow-light)]' 
                    : 'shadow-[4px_4px_8px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]'
                  }`}>
                    {faq.icon}
                  </div>
                  <span className="font-bold text-neu-text-primary">{faq.q}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-neu-text-secondary transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-neu-green' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-neu-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
