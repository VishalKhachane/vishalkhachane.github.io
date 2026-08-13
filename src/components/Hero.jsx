import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative md:pt-44 pt-28 pb-16 bg-white dark:bg-darklight bg-cover transition-colors duration-300 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-8 relative z-10">
        
        {/* Text Content */}
        <div className="md:col-span-7 col-span-12 p-4 space-y-6 flex flex-col items-start justify-center order-2 md:order-1">
          <div className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-success shadow-[0_0_8px_rgba(60,210,120,0.6)]"></span>
            <span className="font-bold text-gray-900 dark:text-white text-sm tracking-wide uppercase">
              Open to opportunities
            </span>
          </div>
          
          <h1 className="text-gray-900 dark:text-white font-extrabold text-4xl sm:text-5xl md:text-[3.5rem] leading-tight tracking-tight">
            Hi, I'm <span className="text-primary">
              Vishal Khachane
            </span>
            <br />
            Full Stack <span className="text-primary">.NET</span> Developer
          </h1>
          
          <p className="text-gray-800 dark:text-gray-100 text-lg sm:text-xl font-bold max-w-lg leading-relaxed">
            {portfolioData.personalInfo.heroDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="py-3 px-8 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a
              href="#contact"
              className="py-3 px-8 bg-transparent text-gray-900 dark:text-white font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Let's Talk
            </a>
          </div>
          
          <div className="flex flex-wrap items-center mt-12 gap-10 pt-6 border-t border-gray-300 dark:border-gray-700 w-full max-w-lg">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.number}</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 col-span-12 relative flex items-center justify-center order-1 md:order-2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-SkyBlueMist p-1.5 shadow-[0_20px_60px_rgba(47,115,242,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-darklight">
                <img
                  src="/profile.jpeg"
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-3 animate-[bounce_4s_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-10 -left-8 w-14 h-14 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-3 animate-[bounce_5s_infinite_0.5s]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1/2 -right-10 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2.5 animate-[bounce_6s_infinite_1s]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -top-4 left-1/4 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2 animate-[bounce_4.5s_infinite_0.2s]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-0 right-4 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2.5 animate-[bounce_5.5s_infinite_0.8s]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
