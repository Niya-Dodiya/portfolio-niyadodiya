import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: "M.Sc. (CA & IT)",
      institution: "K S School of Business Management, Gujarat University, Ahmedabad",
      duration: "Currently Pursuing",
      description: "Focusing on advanced computer applications, software engineering principles, and full-stack development."
    },
    {
      degree: "Previous Academic Qualification",
      institution: "Institution Name",
      duration: "YYYY - YYYY",
      description: "Foundation in computer science and application concepts with a strong core in mathematics and logic."
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="glow-text">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:via-brand-olive before:to-transparent">
          {educations.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-dark group-hover:border-brand-olive text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                 <GraduationCap size={20} className="group-hover:text-brand-olive transition-colors" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl shadow-xl hover:border-brand-olive/40 transition-colors">
                <div className="flex items-center space-x-2 mb-2 text-brand-cyan text-sm">
                  <Calendar size={14} />
                  <span>{edu.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-brand-olive font-medium mb-3">{edu.institution}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
