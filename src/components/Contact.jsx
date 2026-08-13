import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="section-padding bg-section dark:bg-darkmode">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-4">Contact Me</h2>
          <p className="text-midnight_text dark:text-white font-bold max-w-2xl mx-auto text-lg">Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Location */}
          <div className="group bg-white dark:bg-darklight p-10 rounded-3xl shadow-service hover:shadow-[0_10px_40px_rgba(47,115,242,0.15)] border border-border dark:border-dark_border flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-500"></div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-SkyBlueMist/30 text-primary flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:-rotate-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h4 className="font-extrabold text-2xl text-midnight_text dark:text-white mb-3">Location</h4>
            <p className="text-black dark:text-white font-bold text-lg leading-relaxed">{personalInfo.location}</p>
          </div>
          
          {/* Email */}
          <div className="group bg-white dark:bg-darklight p-10 rounded-3xl shadow-service hover:shadow-[0_10px_40px_rgba(47,115,242,0.15)] border border-border dark:border-dark_border flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-500"></div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-SkyBlueMist/30 text-primary flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h4 className="font-extrabold text-2xl text-midnight_text dark:text-white mb-3">Email</h4>
            <a href={`mailto:${personalInfo.email}`} className="text-black dark:text-white font-bold text-xs sm:text-sm md:text-xs lg:text-sm hover:text-primary transition-colors block w-full break-all px-2">{personalInfo.email}</a>
          </div>
          
          {/* Phone / WhatsApp */}
          <div className="group bg-white dark:bg-darklight p-10 rounded-3xl shadow-service hover:shadow-[0_10px_40px_rgba(47,115,242,0.15)] border border-border dark:border-dark_border flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-500"></div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-SkyBlueMist/30 text-primary flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 group-hover:-rotate-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-11.996 5.373-11.996 12.001 0 2.115.548 4.186 1.59 5.998l-1.625 5.94 6.081-1.595c1.765.955 3.754 1.458 5.945 1.458 6.625 0 11.997-5.374 11.997-12 0-6.628-5.372-12.002-11.992-12.002zm0 22.06c-1.785 0-3.535-.48-5.068-1.387l-.36-.214-3.766.987.997-3.666-.235-.373c-1.002-1.594-1.528-3.428-1.528-5.347 0-5.551 4.519-10.068 10.071-10.068 5.55 0 10.068 4.517 10.068 10.067s-4.518 10.068-10.069 10.068zm5.525-7.545c-.302-.152-1.791-.884-2.067-.986-.276-.101-.477-.152-.679.151-.201.303-.781.986-.957 1.189-.176.202-.352.227-.654.076-1.545-.776-2.736-1.89-3.771-3.239-.23-.3-.024-.463.128-.614.135-.135.302-.353.453-.531.151-.177.202-.303.303-.504.101-.202.05-.38-.025-.531-.075-.152-.678-1.638-.929-2.242-.244-.59-.492-.51-.678-.519-.176-.01-.378-.01-.58-.01-.202 0-.528.076-.805.379-.276.303-1.055 1.034-1.055 2.522 0 1.488 1.08 2.926 1.232 3.128.151.202 2.133 3.255 5.166 4.563.721.312 1.283.498 1.724.638.724.23 1.384.197 1.9.119.584-.088 1.791-.732 2.043-1.439.252-.707.252-1.313.176-1.439-.075-.127-.276-.202-.579-.353z"/></svg>
            </div>
            <h4 className="font-extrabold text-2xl text-midnight_text dark:text-white mb-3">WhatsApp</h4>
            <a href={personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-bold text-lg hover:text-[#25D366] transition-colors">{personalInfo.phone}</a>
          </div>

        </div>

        <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-primary to-SkyBlueMist p-[2px] rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-white dark:bg-darklight p-10 rounded-[calc(2rem-2px)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-3xl text-midnight_text dark:text-white mb-2">Connect with me on Socials</h4>
              <p className="text-midnight_text dark:text-white font-bold text-lg">Let's build something amazing together!</p>
            </div>
            <div className="flex justify-center gap-6">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group w-16 h-16 rounded-2xl bg-gray-50 dark:bg-darkmode flex items-center justify-center text-midnight_text dark:text-white hover:bg-[#0077B5] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-800">
                <svg className="w-7 h-7 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="group w-16 h-16 rounded-2xl bg-gray-50 dark:bg-darkmode flex items-center justify-center text-midnight_text dark:text-white hover:bg-[#181717] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-800">
                <svg className="w-7 h-7 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
