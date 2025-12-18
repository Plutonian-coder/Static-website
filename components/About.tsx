
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-xs font-black text-primary uppercase tracking-widest">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-6 md:mb-8 leading-tight">
              Crafting Digital Excellence Since Inception
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>
                Our journey began with a simple idea: that quality and aesthetics should never be mutually exclusive. We specialize in creating clean, minimal, and highly functional digital environments.
              </p>
              <p>
                Whether it's a school project showcase or a high-end corporate identity, our approach remains the same—centered on clarity, user experience, and visual harmony.
              </p>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter">150+</p>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div className="w-[1px] h-10 bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="text-center">
                <p className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter">12</p>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Awards</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="About Team" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-primary p-6 md:p-10 rounded-3xl shadow-2xl shadow-primary/20 transform hover:-rotate-3 transition-transform">
              <p className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter">10+</p>
              <p className="text-[10px] md:text-xs font-black text-zinc-900 uppercase tracking-tighter leading-none mt-1">Years of <br/>Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
