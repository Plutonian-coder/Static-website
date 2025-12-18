
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl md:text-3xl font-black tracking-tighter dark:text-white uppercase">
              LUMINA<span className="text-primary">.</span>
            </span>
            <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed text-lg italic">
              Illuminating ideas through superior digital craftsmanship. We turn concepts into stunning digital realities.
            </p>
          </div>
          
          <div>
            <h5 className="text-zinc-900 dark:text-zinc-50 font-black uppercase tracking-widest text-xs mb-6">Navigation</h5>
            <ul className="space-y-4 font-medium text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-zinc-900 dark:text-zinc-50 font-black uppercase tracking-widest text-xs mb-6">Socials</h5>
            <ul className="space-y-4 font-medium text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">
            &copy; {currentYear} Lumina Design Lab. Built for the future.
          </div>
          <div className="flex space-x-8 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
