import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="glow-text">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center rounded-2xl border border-brand-cyan/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="mx-auto bg-brand-dark border border-white/10 w-16 h-16 rounded-full flex justify-center items-center mb-6 relative z-10 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
             <Briefcase className="text-brand-cyan" size={28} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            Open to Software / IT Internship Opportunities
          </h3>
          
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Looking for an opportunity to apply my skills, learn from industry professionals, and contribute to real-world projects. I am eager to bring value to an organization through dedication and continuous learning.
          </p>
          
          <a href="#contact" className="inline-flex items-center justify-center gap-2 primary-button px-8 py-3 text-lg relative z-10">
            Hire Me <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
