import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative md:pt-32 pt-20 pb-10 bg-white dark:bg-darklight bg-cover transition-colors duration-300 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-8 relative z-10">
        
        {/* Text Content */}
        <div className="md:col-span-7 col-span-12 p-4 space-y-4 md:space-y-6 flex flex-col items-center text-center justify-center order-2 md:order-1">
          <div className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 animate-float-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-success shadow-[0_0_8px_rgba(60,210,120,0.6)] animate-pulse"></span>
            <span className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm tracking-wide uppercase">
              Open to opportunities
            </span>
          </div>
          
          <h1 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight animate-float-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#26d0ce] to-[#1a2980] animate-text-gradient">
              Vishal Khachane
            </span>
            <br />
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#26d0ce] animate-text-gradient">.NET</span> Developer
          </h1>
          
          <p className="text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl font-bold max-w-lg leading-relaxed animate-float-up opacity-0" style={{ animationDelay: '0.5s' }}>
            {portfolioData.personalInfo.heroDescription}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 animate-float-up opacity-0" style={{ animationDelay: '0.7s' }}>
            <a
              href="#projects"
              className="py-2.5 px-6 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg flex items-center gap-2 hover:scale-105"
            >
              View My Work
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a
              href="#contact"
              className="py-2.5 px-6 bg-transparent text-gray-900 dark:text-white font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
          

        </div>

        {/* Image Content */}
        <div className="md:col-span-5 col-span-12 relative flex items-center justify-center order-1 md:order-2 mt-8 md:mt-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px]">
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
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-3 animate-[float_4s_ease-in-out_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-10 -left-8 w-14 h-14 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-3 animate-[float_5s_ease-in-out_0.5s_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1/2 -right-10 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2.5 animate-[float_6s_ease-in-out_1s_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -top-4 left-1/4 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2 animate-[float_4.5s_ease-in-out_0.2s_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-0 right-4 w-12 h-12 bg-white dark:bg-darklight rounded-2xl shadow-xl flex items-center justify-center p-2.5 animate-[float_5.5s_ease-in-out_0.8s_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
