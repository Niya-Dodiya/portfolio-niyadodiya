import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-olive/5 to-brand-dark pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle animated background in card */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#6b8e2333_50%,#00e5ff33_100%)] opacity-20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
           <div className="absolute inset-1 bg-brand-dark rounded-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to know more about my skills and experience?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Download my complete resume to view my full academic history, detailed project descriptions, and technical proficiencies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Niya_Dodiya_Resume.txt" download="Niya_Dodiya_Resume.txt" className="primary-button px-8 py-3 flex items-center justify-center gap-2 text-lg">
                <Download size={20} /> Download Resume
              </a>
              <a href="#" className="glass-button px-8 py-3 flex items-center justify-center gap-2 text-lg uppercase tracking-wide">
                <FileText size={20} /> View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
