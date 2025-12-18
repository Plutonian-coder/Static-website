
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 dark:bg-zinc-900/40 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-zinc-800">
          <div className="lg:w-1/2 p-10 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Let's build <br className="hidden md:block"/> the <span className="text-primary underline decoration-4 underline-offset-8">Extraordinary</span>.</h2>
              <p className="text-zinc-400 mb-12 text-lg md:text-xl leading-relaxed max-w-sm">
                Have a project in mind? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-primary border border-zinc-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Email Us</p>
                    <p className="text-lg md:text-xl font-bold">hello@lumina.design</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-primary border border-zinc-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Find Us</p>
                    <p className="text-lg md:text-xl font-bold">Creative HQ, London</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
          
          <div className="lg:w-1/2 bg-zinc-50 dark:bg-zinc-900/80 p-10 md:p-20 border-t lg:border-t-0 lg:border-l border-zinc-800">
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-transparent"
                />
                <label htmlFor="name" className="absolute left-5 top-4 text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-1 rounded">Name</label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-transparent"
                />
                <label htmlFor="email" className="absolute left-5 top-4 text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-1 rounded">Email Address</label>
              </div>
              <div className="relative group">
                <textarea 
                  rows={4} 
                  id="message"
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-transparent"
                ></textarea>
                <label htmlFor="message" className="absolute left-5 top-4 text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-1 rounded">Your Message</label>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-primary text-zinc-950 font-black rounded-2xl hover:bg-yellow-400 transform hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 text-lg uppercase tracking-widest"
              >
                Launch Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
