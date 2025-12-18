
import React from 'react';

const teamMembers = [
  { name: 'Sarah Jenkins', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Michael Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Elena Rodriguez', role: 'UI Designer', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'David Smith', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">Our Elite Team</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg italic leading-relaxed">Meet the architects of Lumina's digital universe.</p>
          </div>
          <a href="#" className="hidden md:block px-6 py-3 border border-zinc-200 dark:border-zinc-700 rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors dark:text-zinc-300">Join Our Team</a>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:px-0 md:mx-0 snap-x snap-mandatory">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-0 snap-center group">
              <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-[4/5] bg-zinc-200 dark:bg-zinc-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:text-zinc-950 transition-colors cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:text-zinc-950 transition-colors cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors group-hover:text-primary">{member.name}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
