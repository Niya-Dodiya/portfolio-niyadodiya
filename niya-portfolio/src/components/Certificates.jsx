import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Python Django Internship",
      organization: "Coursera",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1546410531-bea4f4b931dc?auto=format&fit=crop&q=80&w=600",
      link: "#"
    },
    {
      title: "Understanding the EU Artificial Intelligence Act",
      organization: "Alison",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
      link: "https://www.linkedin.com/posts/niya-dodiya-6936b6309_artificialintelligence-eulaw-digitalethics-activity-7355853499294777348-S7y8"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="glow-text">Certificates</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-olive/50 transition-colors"
            >
              <div className="relative h-40 overflow-hidden bg-brand-dark/50 p-4">
                 {/* Placeholder for certificate image */}
                 <div className="w-full h-full bg-cover bg-center rounded opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${cert.image})` }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-olive mb-2">
                   <Award size={16} />
                   <span className="text-sm font-medium">{cert.organization}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">{cert.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{cert.date}</p>
                <a href={cert.link} className="inline-flex items-center gap-2 text-sm text-white hover:text-brand-cyan transition-colors">
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
