import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Info, Trophy, Star, Laptop, GraduationCap, Zap, Users, ShieldCheck, ArrowRight, FileText, CheckCircle2, HelpCircle, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'educator'>('student');
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // reset initial states
    gsap.set('.pricing-card', { opacity: 0, y: 30 });
    gsap.set('.price-number', { scale: 0.8, opacity: 0 });
    gsap.set('.feature-item', { x: -10, opacity: 0 });
    gsap.set('.card-header', { opacity: 0, y: -10 });

    const tl = gsap.timeline();

    tl.to('.pricing-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    })
    .to('.price-number', {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.1
    }, '-=0.4')
    .to('.card-header', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1
    }, '-=0.6')
    .to('.feature-item', {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out'
    }, '-=0.4');

  }, { dependencies: [activeTab], scope: containerRef });

  useGSAP(() => {
    // Scanner Animation
    gsap.to('.laser-scanner', {
      left: '100%',
      duration: 3,
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 4,
        repeat: -1
      }
    });
  }, { scope: containerRef });

  const plans = [
    {
      name: "Student – Free",
      category: "student",
      type: "free",
      label: "FREE",
      subheading: "Get started with the basics",
      description: "Beginners who want to explore CADpractice without any commitment.",
      price: "$0",
      period: "Free forever",
      features: [
        { text: "<strong>3</strong> Free Sample Challenges" },
        { text: "<strong>1</strong> Sample CAD Quiz" },
        { text: "Permanent Progress & Points" }
      ],
      cta: "Start Learning",
      variant: "secondary",
      showCreditCardNote: true,
      icon: Users
    },
    {
      name: "Student – Paid Individual",
      category: "student",
      type: "paid",
      label: "PREMIUM",
      subheading: "Best for individual learners",
      description: "Dedicated learners who want full access and tutorials.",
      price: "$50",
      period: "per 12 months",
      isPopular: true,
      features: [
        { text: "<strong>Full Access</strong> to the Challenge Library" },
        { text: "<strong>Full Access</strong> to the CAD Quiz Library" },
        { text: "Tutorials for all Challenges" },
        { text: "Portable License to join any Classroom" },
        { text: "Exclusive Badges & Leaderboards" }
      ],
      cta: "Get Full Access",
      variant: "primary",
      icon: Zap
    },
    {
      name: "Educator – Free",
      category: "educator",
      type: "free",
      label: "FREE",
      subheading: "Start your first classroom",
      description: "For educators managing small classrooms and exploring tools.",
      price: "$0",
      period: "Free forever",
      upsellBanner: "Upgrade to a Group License to unlock the full library.",
      features: [
        { text: "<strong>1</strong> Classroom" },
        { text: "<strong>3</strong> Sample Challenges" },
        { text: "<strong>1</strong> Free Quiz" },
        { text: "Educator Dashboard" },
        { text: "Invite & Progress Tracking" }
      ],
      cta: "Create Classroom",
      variant: "secondary",
      showCreditCardNote: true,
      icon: GraduationCap
    },
    {
      name: "Educator – Paid",
      category: "educator",
      type: "paid",
      label: "PREMIUM",
      subheading: "Best for schools/teams (11+ seats)",
      description: "Powerhouses managing multiple classrooms.",
      price: "$35",
      period: "per seat / 12 months*",
      isPopular: true,
      note: "11 SEAT MINIMUM",
      footerNote: "*Need to add students later? We'll automatically pro-rate additional seats to match your current license end date.",
      features: [
        { text: "<strong>Unlimited</strong> Classrooms" },
        { text: "<strong>Full Access</strong> to the Challenge Library" },
        { text: "<strong>Full Access</strong> to the CAD Quiz Library" },
        { text: "Assign Unlimited Challenges" },
        { text: "Tutorials for all Challenges" },
        { text: "Educator Dashboard Access" },
        { text: "Invite & Progress Tracking" }
      ],
      cta: "Buy Group License",
      secondaryCta: "PO/Invoice Support",
      variant: "primary",
      icon: Laptop
    }
  ];

  const filteredPlans = plans.filter(plan => plan.category === activeTab);

  return (
    <main className="pt-12 lg:pt-16 pb-20 px-4 relative overflow-hidden bg-transparent selection:bg-primary/30 min-h-screen">
      {/* Background System */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(var(--matrix-green-rgb, 34, 160, 75), 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--matrix-green-rgb, 34, 160, 75), 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, white 20%, transparent 95%)',
          maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 95%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight uppercase"
          >
            Improve Your CAD Skills. <br className="hidden md:block" />
            <span className="text-primary">Choose Your Plan.</span>
          </motion.h1>
          <motion.p className="text-xs md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-bold uppercase tracking-tight opacity-90">
            Whether you’re a student building skills or an educator managing a classroom, we have a plan for you.
          </motion.p>
        </div>

        {/* Toggle persona */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex bg-gray-200 dark:bg-white/5 p-1 rounded-full border border-gray-300 dark:border-white/10 backdrop-blur-xl shadow-lg relative isolate overflow-hidden">
            
            <button 
              onClick={() => setActiveTab('student')}
              className={`relative px-10 py-2.5 text-[9px] font-black uppercase tracking-widest rounded-full transition-all duration-300 z-10 ${
                activeTab === 'student' 
                ? 'text-white dark:text-black' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'student' && (
                <motion.div
                  layoutId="holo-bg"
                  className="absolute inset-0 bg-gray-900 dark:bg-primary rounded-full z-[-1] shadow-[0_0_20px_rgba(var(--primary-rgb,34,160,75),0.5)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Student
            </button>
            
            <button 
              onClick={() => setActiveTab('educator')}
              className={`relative px-10 py-2.5 text-[9px] font-black uppercase tracking-widest rounded-full transition-all duration-300 z-10 ${
                activeTab === 'educator' 
                ? 'text-white dark:text-black' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'educator' && (
                <motion.div
                  layoutId="holo-bg"
                  className="absolute inset-0 bg-gray-900 dark:bg-primary rounded-full z-[-1] shadow-[0_0_20px_rgba(var(--primary-rgb,34,160,75),0.5)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Educator
            </button>

            {/* Option 3: Neon Phase Glitch Effect */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5, 1, 0],
                x: [-2, 2, -1, 1, 0],
                scale: [1, 1.05, 0.98, 1.02, 1]
              }}
              transition={{ 
                duration: 0.4, 
                times: [0, 0.1, 0.2, 0.3, 1],
                ease: "easeInOut"
              }}
              className="absolute inset-0 z-20 pointer-events-none mix-blend-screen bg-primary/20 blur-sm"
            />

            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay z-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 1px, black 2px)',
                backgroundSize: '100% 3px'
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="flex justify-center" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {filteredPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card relative flex flex-col rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  plan.isPopular 
                  ? 'bg-white dark:bg-black/60 border-primary/40 shadow-2xl ring-4 ring-primary/5' 
                  : plan.name.includes('Educator') && plan.type === 'paid'
                    ? 'bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/20 shadow-xl'
                    : 'bg-white/90 dark:bg-black/40 border-gray-200 dark:border-white/10 backdrop-blur-3xl shadow-xl'
                }`}
              >
                <div className="flex flex-col sm:flex-row flex-1">
                  {/* Left Panel */}
                  <div className="w-full sm:w-[42%] p-6 flex flex-col justify-start items-start border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-white/5 relative">
                    <div className="mb-4 flex flex-col items-start gap-2">
                      <span className="price-number text-6xl sm:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
                        {plan.price}
                      </span>
                      {plan.note && (
                        <div className="bg-primary/20 border border-primary/30 px-2 py-0.5 rounded-sm">
                          <p className="text-[7px] font-black text-primary uppercase tracking-[0.1em]">{plan.note}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-2">
                      <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest leading-none">
                        {plan.period}
                      </p>
                      {plan.footerNote && (
                        <p className="text-[11px] font-bold text-primary leading-snug tracking-tight italic">
                          {plan.footerNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="flex-1 p-6 flex flex-col bg-gray-50/30 dark:bg-white/[0.01]">
                     <div className="card-header mb-4">
                       <h3 className="text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-[0.2em]">{plan.name}</h3>
                       <p className="text-[9px] font-bold text-primary uppercase tracking-wider">{plan.subheading}</p>
                     </div>
                     
                     <ul className="space-y-3 mb-4 flex-1">
                      {plan.features.map((item, j) => (
                        <li key={j} className="feature-item flex gap-2.5 items-start group/item">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.variant === 'primary' ? 'text-primary' : 'text-gray-400 dark:text-white/30'}`} />
                          <span 
                            className="text-[10px] leading-snug font-bold text-gray-700 dark:text-white group-hover/item:text-gray-900 dark:group-hover/item:text-green-400 transition-colors"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </li>
                      ))}
                    </ul>

                      {plan.upsellBanner && (
                        <div className="mt-4 p-2 bg-primary/10 border border-primary/20 rounded-lg">
                          <p className="text-[8px] font-black text-primary uppercase text-center">{plan.upsellBanner}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-4 md:p-5 bg-white dark:bg-black/20 mt-auto border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
                    <Button 
                      className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[12px] transition-all duration-300 border-none shadow-lg ${
                        plan.variant === 'primary' 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/95 hover:scale-[1.01] active:scale-[0.98]' 
                        : 'bg-white dark:bg-transparent text-gray-900 dark:text-white border-2 border-gray-200 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 hover:scale-[1.01] active:scale-[0.98]'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    
                    <div className="mt-2.5 h-4 flex items-center justify-center gap-4 w-full">
                      {plan.showCreditCardNote && (
                        <div className="flex items-center gap-1 opacity-80">
                          <CreditCard className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400" />
                          <span className="text-[9px] font-black uppercase text-gray-500 dark:text-gray-400">No Credit Card Required</span>
                        </div>
                      )}
                      {plan.secondaryCta && (
                        <button className="text-[10px] font-black text-gray-400 hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-1 group">
                          <FileText className="w-3 h-3 transition-transform group-hover:scale-110" />
                          {plan.secondaryCta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Global Footer - Bento Diagnostic Cards */}
        <div className="mt-20 sm:mt-32 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "REF.01",
                label: "Permanent Progress",
                text: "Earned points and badges stay with your account forever.",
                icon: Trophy
              },
              {
                id: "REF.02",
                label: "Global Ranking",
                text: "Compete with the best CAD masters on the global leaderboards.",
                icon: Trophy // Using Trophy for rankings too, or maybe Zap/Users
              },
              {
                id: "REF.03",
                label: "Group Licensing",
                text: "Scale effortlessly with automated pro-rated seat management.",
                icon: Users
              }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/60 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb,34,160,75),0.15)] transition-all duration-500"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 transition-all duration-700 pointer-events-none" />

                <div className="mb-8 p-3 w-fit bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors relative z-10">
                  <item.icon className="w-6 h-6 text-gray-400 dark:text-white/40 group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-3 relative z-10">
                  <h4 className="text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-[0.2em]">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-bold uppercase tracking-tight">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
                  <div className="w-full h-full bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
