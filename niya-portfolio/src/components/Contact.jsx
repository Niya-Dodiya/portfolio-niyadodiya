import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic mock validation
    if(formData.name && formData.email) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative bg-black/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="glow-text">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-olive to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-slate-400 mb-8 max-w-md text-lg">
              I am currently open for full-time roles, internships, or freelance projects. Let's discuss how I can contribute to your team!
            </p>

            <div className="space-y-6">
              <a href="mailto:niyadodiya81@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">niyadodiya81@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/Niya-Dodiya" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors">
                  <Github />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">github.com/Niya-Dodiya</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/niya-dodiya-6936b6309/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors">
                  <Linkedin />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">Connect professionally</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full primary-button py-4 font-bold flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
