import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Award, Layers } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Layers />, count: "10+", label: "Projects Completed" },
    { icon: <Code />, count: "15+", label: "Technologies Learned" },
    { icon: <Award />, count: "5+", label: "Certifications" },
    { icon: <BookOpen />, count: "M.Sc. IT", label: "Current Education" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="glow-text">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-olive/20 to-brand-cyan/20 z-0"></div>
              {/* Generated Illustration */}
              <div className="relative z-10 bg-brand-dark/90 rounded-xl h-full border border-white/5 flex items-center justify-center min-h-[300px] overflow-hidden">
                <img src="/images/abstract_ai_nodes.png" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Niya AI Graphic" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-4 left-0 w-full text-center z-20">
                   <h3 className="text-xl font-bold text-white mb-1 shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Niya Dodiya</h3>
                   <p className="text-brand-cyan text-sm font-medium shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Software Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a student pursuing <strong className="text-white">M.Sc. (CA & IT)</strong> at K S School of Business Management, Gujarat University, Ahmedabad. My academic background has equipped me with a strong foundation in computer applications and information technology.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I have a deep passion for <strong className="text-brand-olive hover:text-brand-olive-light transition-colors">Software and Full Stack Development</strong>, ensuring seamless integration between beautiful frontends and robust backends. Alongside web development, I am highly interested in <strong className="text-brand-cyan">Machine Learning and Artificial Intelligence</strong>, exploring data-driven solutions to modern problems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My core goal is to gain real-world IT industry experience, collaborate with brilliant minds, and contribute effectively to innovative projects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-brand-olive flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white mb-1">{stat.count}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
