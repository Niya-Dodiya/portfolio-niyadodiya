import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Medical Insurance Cost Prediction",
      description: "A machine learning pipeline that predicts medical insurance costs based on user demographic and health data. Built with an interactive web interface for real-time predictions.",
      tags: ["Python", "Machine Learning", "Flask", "Streamlit"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "AMC Management Website",
      description: "A comprehensive Annual Maintenance Contract portal designed for managing service agreements, tracking equipment maintenance, and generating status reports.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "MERN Stack E-Platform",
      description: "A full-stack web application featuring user authentication, dashboard analytics, and seamless data management operating on a non-relational database architecture.",
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="glow-text">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-olive/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-cyan/50 z-20 transition-colors duration-300 pointer-events-none rounded-t-xl"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded text-brand-olive">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto border-t border-white/10 pt-4">
                  <a href={project.github} className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-1 text-sm text-slate-300 hover:text-brand-cyan transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
