
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-40 overflow-hidden dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full blur-[100px] md:blur-[160px] opacity-10 md:opacity-15 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary rounded-full blur-[80px] md:blur-[140px] opacity-10 md:opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-8 animate-bounce">
            Introducing Lumina 2.0
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1] mb-6 md:mb-10">
            Innovating <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary/80">Future Experiences.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            A premium showcase of digital artistry and engineering. We craft meaningful interactions for the modern world, blending aesthetics with high-end technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-zinc-950 font-extrabold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-300 text-lg"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 font-extrabold rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
