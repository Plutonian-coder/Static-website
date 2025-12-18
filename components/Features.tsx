
import React from 'react';

const features = [
  {
    title: 'Clean Design',
    description: 'We prioritize white space and typography to ensure your content is always the hero.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Ready',
    description: 'Responsive by default. Your website will look stunning on desktops, tablets, and phones.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'High Performance',
    description: 'Built with modern best practices to ensure fast loading times and smooth transitions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Reliable',
    description: 'Stability you can count on. We follow industry standards to keep your data safe.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">Standard Features, <br/><span className="text-primary">Premium Execution.</span></h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            We don't just build websites; we craft high-performance machines designed to help you succeed in a digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 md:p-10 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] hover:bg-white dark:hover:bg-zinc-900 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-8 w-14 h-14 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-2xl text-primary shadow-sm border border-zinc-100 dark:border-zinc-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-zinc-950 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">{feature.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
