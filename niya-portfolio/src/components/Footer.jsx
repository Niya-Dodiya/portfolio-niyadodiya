import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Niya <span className="text-brand-olive">Dodiya</span></h3>
            <p className="text-slate-400 max-w-sm">
              Building, learning and growing through technology.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/Niya-Dodiya" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-brand-olive/20 hover:border-brand-olive hover:text-white transition-all text-slate-400 cursor-pointer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/niya-dodiya-6936b6309/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-brand-cyan/20 hover:border-brand-cyan hover:text-white transition-all text-slate-400 cursor-pointer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:niyadodiya81@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-brand-olive/20 hover:border-brand-olive hover:text-white transition-all text-slate-400 cursor-pointer">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Niya Dodiya. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
