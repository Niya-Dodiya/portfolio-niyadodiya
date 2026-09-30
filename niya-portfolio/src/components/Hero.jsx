import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Database, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/20 text-brand-olive text-sm font-medium tracking-wide">
              M.Sc. (CA & IT) Student
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="text-white">Niya</span> <span className="glow-text">Dodiya</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
              IT Student | Software Developer | <br className="hidden md:block"/> ML & Full Stack Enthusiast
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              I’m a passionate IT student who enjoys building software applications, exploring machine learning, and creating modern web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="primary-button px-6 py-3 flex items-center gap-2 font-medium">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="/Niya_Dodiya_Resume.txt" download="Niya_Dodiya_Resume.txt" className="glass-button px-6 py-3 flex items-center gap-2 font-medium">
                <Download size={18} /> Download Resume
              </a>
              <a href="#contact" className="glass-button px-6 py-3 flex items-center gap-2 font-medium border-transparent bg-white/5 hover:border-brand-olive/50">
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </motion.div>

          {/* Illustration / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] flex justify-center items-center"
          >
            <div className="relative w-full h-full max-w-md mx-auto rounded-full p-2 bg-gradient-to-tr from-brand-olive to-brand-cyan shadow-[0_0_50px_rgba(107,142,35,0.3)]">
              <img 
                src="/images/niya_profile_illustration.png" 
                alt="Niya Dodiya Illustration" 
                className="w-full h-full object-cover rounded-full pointer-events-none"
              />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -left-4 bg-brand-dark p-3 rounded-xl border border-brand-cyan/30 shadow-lg text-brand-cyan font-mono text-sm backdrop-blur-md"
              >
                &lt;code/&gt;
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 -right-4 bg-brand-dark p-3 rounded-xl border border-brand-olive/30 shadow-lg text-brand-olive font-mono text-sm backdrop-blur-md"
              >
                {'{ dev }'}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Particles/Grid (Simplified via CSS grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
    </section>
  );
};

export default Hero;
