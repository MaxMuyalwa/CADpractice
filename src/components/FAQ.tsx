import React, { useState } from 'react';
import { ChevronDown, BookOpen, CheckCircle2, ShieldCheck, Lock, BarChart3 } from 'lucide-react';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does CAD PRACTICE have curriculum resources?",
      a: "Yes, we have standard-aligned modules spanning all core CAD competencies that plug seamlessly into your existing curriculum.",
      icon: <BookOpen className="w-5 h-5 text-[#08CB00]" />
    },
    {
      q: "Can I customize my tests?",
      a: "Yes, CAD PRACTICE allows for deep customization. You can tailor assessments to match your specific syllabus and target the exact skills you want to test.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#08CB00]" />
    },
    {
      q: "What is the Money Back Guarantee?",
      a: "We offer a 100% exam pass money-back guarantee. If your students complete our required modules and do not pass their official certification exams, we will refund your licensing costs.",
      icon: <ShieldCheck className="w-5 h-5 text-[#08CB00]" />
    },
    {
      q: "Is my student data secure?",
      a: "Absolutely. We strictly adhere to student data privacy regulations (FERPA/COPPA compliant) to ensure all student information is encrypted, safe, and private.",
      icon: <Lock className="w-5 h-5 text-[#08CB00]" />
    },
    {
      q: "Is there an online dashboard to track my students?",
      a: "Yes! We offer a free online dashboard to manage and evaluate the progress of up to 10 students. For larger classes, our premium tiers support anywhere from 10 to 10,000+ students.",
      icon: <BarChart3 className="w-5 h-5 text-[#08CB00]" />
    }
  ];

  return (
    <section className="relative z-10 py-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Educator FAQs</h2>
          <p className="text-gray-600 dark:text-gray-400">Everything you need to know about integrating CAD Practice into your classroom.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl transition-all duration-300 bg-[#E5E5E5] dark:bg-[#000805] ${
                openFaq === index 
                ? 'shadow-inner' 
                : 'shadow-md'
              }`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-all bg-[#E5E5E5] dark:bg-[#000805] ${
                    openFaq === index 
                    ? 'shadow-inner' 
                    : 'shadow-sm'
                  }`}>
                    {faq.icon}
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">{faq.q}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#08CB00]' : 'text-gray-600 dark:text-gray-400'}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
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
