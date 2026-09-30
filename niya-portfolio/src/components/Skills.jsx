import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Database, Brain, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="w-6 h-6 text-brand-olive" />,
      skills: ["Python", "Java", "C/C++", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: <Layout className="w-6 h-6 text-brand-cyan" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Laravel"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-brand-olive" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Machine Learning / AI",
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Deep Learning"]
    },
    {
      title: "Tools & Others",
      icon: <PenTool className="w-6 h-6 text-slate-300" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="glow-text">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item} className="glass-card p-6 h-full flex flex-col group hover:border-brand-olive/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-brand-olive/50 hover:bg-brand-olive/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
